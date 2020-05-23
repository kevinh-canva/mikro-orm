import { QueryBuilder as KnexQueryBuilder, Raw, Transaction as KnexTransaction, Value } from 'knex';
import {
  AnyEntity, Collection, Configuration, Constructor, DatabaseDriver, Dictionary, EntityData, EntityManager, EntityManagerType, EntityMetadata, EntityProperty,
  FilterQuery, FindOneOptions, FindOptions, IDatabaseDriver, LockMode, Primary, QueryOrderMap, QueryResult, ReferenceType, Transaction, Utils, wrap, PopulateOptions, LoadStrategy,
} from '@mikro-orm/core';
import { AbstractSqlConnection, AbstractSqlPlatform, QueryBuilder, Field } from './index';
import { SqlEntityManager } from './SqlEntityManager';

export abstract class AbstractSqlDriver<C extends AbstractSqlConnection = AbstractSqlConnection> extends DatabaseDriver<C> {

  [EntityManagerType]: SqlEntityManager<this>;

  protected readonly connection: C;
  protected readonly replicas: C[] = [];
  protected readonly platform: AbstractSqlPlatform;

  protected constructor(config: Configuration, platform: AbstractSqlPlatform, connection: Constructor<C>, connector: string[]) {
    super(config, connector);
    this.connection = new connection(this.config);
    this.replicas = this.createReplicas(conf => new connection(this.config, conf, 'read'));
    this.platform = platform;
  }

  getPlatform(): AbstractSqlPlatform {
    return this.platform;
  }

  createEntityManager<D extends IDatabaseDriver = IDatabaseDriver>(useContext?: boolean): D[typeof EntityManagerType] {
    return new SqlEntityManager(this.config, this, this.metadata, useContext) as unknown as EntityManager<D>;
  }

  async find<T extends AnyEntity<T>>(entityName: string, where: FilterQuery<T>, options?: FindOptions<T>, ctx?: Transaction<KnexTransaction>): Promise<T[]> {
    const meta = this.metadata.get(entityName);
    options = { populate: [], orderBy: {}, ...(options || {}) };

    const populate = this.autoJoinOneToOneOwner(meta, options.populate as PopulateOptions[]);

    if (options.fields) {
      options.fields.unshift(...meta.primaryKeys.filter(pk => !options!.fields!.includes(pk)));
    }

    const qb = this.createQueryBuilder(entityName, ctx, !!ctx);
    qb.select(options.fields || '*')
      .populate(populate)
      .where(where as Dictionary)
      .orderBy(options.orderBy!)
      .groupBy(options.groupBy!)
      .having(options.having!)
      .withSchema(options.schema);

    if (options.limit !== undefined) {
      qb.limit(options.limit, options.offset);
    }

    Utils.asArray(options.flags).forEach(flag => qb.setFlag(flag));

    return this.rethrow(qb.execute('all'));
  }

  async findOne<T extends AnyEntity<T>>(entityName: string, where: FilterQuery<T>, options?: FindOneOptions<T>, ctx?: Transaction<KnexTransaction>): Promise<T | null> {
    options = { populate: [], orderBy: {}, ...(options || {}) };

    const meta = this.metadata.get(entityName);

    const populate = this.autoJoinOneToOneOwner(meta, options.populate as PopulateOptions[]);
    const pk = meta.primaryKeys[0];

    if (Utils.isPrimaryKey(where)) {
      where = { [pk]: where } as FilterQuery<T>;
    }

    if (options.fields && !options.fields.includes(pk)) {
      options.fields.unshift(pk);
    }

    const joinedLoads = this.joinedLoads(meta, populate);
    const qb = this.createQueryBuilder(entityName, ctx, !!ctx);
    const selects: Field[] = [];

    if (joinedLoads.length > 0) {
      selects.push(...this.getSelectForJoinedLoad(qb, meta, joinedLoads));
    } else {
      const defaultSelect = options.fields || ['*'];
      selects.push(...defaultSelect);
      qb.limit(1);
    }

    const method = joinedLoads.length > 0 ? 'all' : 'get';

    qb.select(selects)
      .populate(populate)
      .where(where as Dictionary)
      .orderBy(options.orderBy!)
      .groupBy(options.groupBy!)
      .having(options.having!)
      .setLockMode(options.lockMode)
      .withSchema(options.schema);

    Utils.asArray(options.flags).forEach(flag => qb.setFlag(flag));

    const result = await this.rethrow(qb.execute(method));

    if (Array.isArray(result)) {
      return this.processJoinedLoads(result, joinedLoads) as unknown as T;
    }

    return result;
  }

  mapResult<T extends AnyEntity<T>>(result: EntityData<T>, meta: EntityMetadata, populate: PopulateOptions[] = [], aliasMap: Dictionary<string> = {}): T | null {
    const ret = super.mapResult(result, meta);

    if (!ret) {
      return null;
    }

    const joinedLoads = this.joinedLoads(meta, populate);

    joinedLoads.forEach(relationName => {
      const relation = meta.properties[relationName];
      const properties = this.metadata.get(relation.type).properties;
      const found = Object.entries(aliasMap).find(([,r]) => r === relation.type)!;
      const relationAlias = found[0];

      ret[relationName] = ret[relationName] || [];
      const relationPojo = {};

      let relationExists = true;
      Object.values(properties)
        .filter(({ reference }) => reference === ReferenceType.SCALAR)
        .forEach(prop => {
          const alias = `${relationAlias}_${prop.fieldNames[0]}`;
          const value = ret[alias];

          // If the primary key value for the relation is null, we know we haven't joined to anything
          // and therefore we don't return any record (since all values would be null)
          if (prop.primary && value === null) {
            relationExists = false;
          }

          if (alias in ret) {
            relationPojo[prop.name] = ret[alias];
            delete ret[alias];
          }
        });

      if (relationExists) {
        ret[relationName].push(relationPojo);
      }
    });

    return ret as T;
  }

  async count(entityName: string, where: any, ctx?: Transaction<KnexTransaction>): Promise<number> {
    const pks = this.metadata.get(entityName).primaryKeys;
    const qb = this.createQueryBuilder(entityName, ctx, !!ctx)
      .count(pks, true)
      .where(where);
    const res = await this.rethrow(qb.execute('get', false));

    return +res.count;
  }

  async nativeInsert<T extends AnyEntity<T>>(entityName: string, data: EntityData<T>, ctx?: Transaction<KnexTransaction>): Promise<QueryResult> {
    const meta = this.metadata.get<T>(entityName, false, false);
    const collections = this.extractManyToMany(entityName, data);
    const pks = this.getPrimaryKeyFields(entityName);
    const qb = this.createQueryBuilder(entityName, ctx, true);
    const res = await this.rethrow(qb.insert(data).execute('run', false));
    res.row = res.row || {};
    let pk: any;

    if (pks.length > 1) { // owner has composite pk
      pk = Utils.getPrimaryKeyCond(data as T, pks);
    } else {
      res.insertId = data[pks[0]] || res.insertId || res.row[pks[0]];
      pk = [res.insertId];
    }

    await this.processManyToMany<T>(meta, pk, collections, false, ctx);

    return res;
  }

  async nativeUpdate<T extends AnyEntity<T>>(entityName: string, where: FilterQuery<T>, data: EntityData<T>, ctx?: Transaction<KnexTransaction>): Promise<QueryResult> {
    const meta = this.metadata.get<T>(entityName, false, false);
    const pks = this.getPrimaryKeyFields(entityName);
    const collections = this.extractManyToMany(entityName, data);
    let res: QueryResult = { affectedRows: 0, insertId: 0, row: {} };

    if (Utils.isPrimaryKey(where) && pks.length === 1) {
      where = { [pks[0]]: where } as FilterQuery<T>;
    }

    if (Object.keys(data).length > 0) {
      const qb = this.createQueryBuilder(entityName, ctx, true)
        .update(data)
        .where(where as Dictionary);

      res = await this.rethrow(qb.execute('run', false));
    }

    const pk = pks.map(pk => Utils.extractPK<T>(data[pk] || where, meta)) as Primary<T>[];
    await this.processManyToMany<T>(meta, pk, collections, true, ctx);

    return res;
  }

  async nativeDelete<T extends AnyEntity<T>>(entityName: string, where: FilterQuery<T> | string | any, ctx?: Transaction<KnexTransaction>): Promise<QueryResult> {
    const pks = this.getPrimaryKeyFields(entityName);

    if (Utils.isPrimaryKey(where) && pks.length === 1) {
      where = { [pks[0]]: where };
    }

    const qb = this.createQueryBuilder(entityName, ctx, true).delete(where);

    return this.rethrow(qb.execute('run', false));
  }

  async syncCollection<T extends AnyEntity<T>, O extends AnyEntity<O>>(coll: Collection<T, O>, ctx?: Transaction): Promise<void> {
    const wrapped = wrap(coll.owner, true);
    const meta = wrapped.__meta;
    const pks = wrapped.__primaryKeys;
    const snapshot = coll.getSnapshot().map(item => wrap(item, true).__primaryKeys);
    const current = coll.getItems(false).map(item => wrap(item, true).__primaryKeys);
    const deleteDiff = snapshot.filter(item => !current.includes(item));
    const insertDiff = current.filter(item => !snapshot.includes(item));
    const target = snapshot.filter(item => current.includes(item)).concat(...insertDiff);
    const equals = Utils.equals(current, target);

    // wrong order if we just delete and insert to the end
    if (coll.property.fixedOrder && !equals) {
      deleteDiff.length = insertDiff.length = 0;
      deleteDiff.push(...snapshot);
      insertDiff.push(...current);
    }

    await this.rethrow(this.updateCollectionDiff<T, O>(meta, coll.property, pks, deleteDiff, insertDiff, ctx));
  }

  async loadFromPivotTable<T extends AnyEntity<T>, O extends AnyEntity<O>>(prop: EntityProperty, owners: Primary<O>[][], where?: FilterQuery<T>, orderBy?: QueryOrderMap, ctx?: Transaction): Promise<Dictionary<T[]>> {
    const pivotProp2 = this.getPivotInverseProperty(prop);
    const ownerMeta = this.metadata.get(pivotProp2.type);
    const targetMeta = this.metadata.get(prop.type);
    const cond = { [`${prop.pivotTable}.${pivotProp2.name}`]: { $in: ownerMeta.compositePK ? owners : owners.map(o => o[0]) } };

    if (!Utils.isEmpty(where) && Object.keys(where as Dictionary).every(k => Utils.isOperator(k, false))) {
      where = cond;
    } else {
      where = { ...where, ...cond };
    }

    orderBy = this.getPivotOrderBy(prop, orderBy);
    const qb = this.createQueryBuilder(prop.type, ctx, !!ctx);
    const populate = this.autoJoinOneToOneOwner(targetMeta, [{
      field: prop.pivotTable,
    }]);
    qb.select('*').populate(populate).where(where as Dictionary).orderBy(orderBy!);
    const items = owners.length ? await this.rethrow(qb.execute('all')) : [];

    const map: Dictionary<T[]> = {};
    owners.forEach(owner => map['' + Utils.getPrimaryKeyHash(owner as string[])] = []);
    items.forEach((item: any) => {
      const key = Utils.getPrimaryKeyHash(prop.joinColumns.map(col => item[col]));
      map[key].push(item);
      prop.joinColumns.forEach(col => delete item[col]);
      prop.inverseJoinColumns.forEach(col => delete item[col]);
    });

    return map;
  }

  async execute<T extends QueryResult | EntityData<AnyEntity> | EntityData<AnyEntity>[] = EntityData<AnyEntity>[]>(queryOrKnex: string | KnexQueryBuilder | Raw, params: any[] = [], method: 'all' | 'get' | 'run' = 'all', ctx?: Transaction): Promise<T> {
    return this.rethrow(this.connection.execute(queryOrKnex, params, method, ctx));
  }

  /**
   * 1:1 owner side needs to be marked for population so QB auto-joins the owner id
   */
  protected autoJoinOneToOneOwner(meta: EntityMetadata, populate: PopulateOptions[]): PopulateOptions[] {
    if (!this.config.get('autoJoinOneToOneOwner')) {
      return populate;
    }

    const relationsToPopulate = populate.map(({ field }) => field);

    const toPopulate: PopulateOptions[] = Object.values(meta.properties)
      .filter(prop => {
        return prop.reference === ReferenceType.ONE_TO_ONE && !prop.owner && !relationsToPopulate.includes(prop.name);
      })
      .map(prop => ({ field: prop.name, strategy: prop.strategy }));

    return [...populate, ...toPopulate];
  }

  protected joinedLoads(meta: EntityMetadata, populate: PopulateOptions[]): string[] {
    return populate
      .filter(({ field }) => meta.properties[field]?.strategy === LoadStrategy.JOINED)
      .map(({ field }) => field);
  }

  protected processJoinedLoads<T extends AnyEntity<T>>(rawResults: object[], joinedLoads: string[]): T | null {
    if (rawResults.length === 0) {
      return null;
    }

    return rawResults.reduce((result, value) => {
      joinedLoads.forEach(relationName => {
        const relation = value[relationName];
        const existing = result[relationName] || [];

        result[relationName] = [...existing, ...relation];
      });

      return { ...value, ...result };
    }, {}) as unknown as T;
  }

  getRefForField(field: string, schema: string, alias: string) {
    return this.connection.getKnex().ref(field).withSchema(schema).as(alias);
  }

  protected getSelectForJoinedLoad(queryBuilder: QueryBuilder, meta: EntityMetadata, joinedLoads: string[]): Field[] {
    const selects: Field[] = [];

    // alias all fields in the primary table
    Object.values(meta.properties)
      .filter(prop => prop.reference === ReferenceType.SCALAR && prop.persist !== false)
      .forEach(prop => {
        selects.push(prop.fieldNames[0]);
      });

    let previousRelationName: string;
    joinedLoads.forEach(relationName => {
      previousRelationName = relationName;

      const prop = meta.properties[relationName];
      const properties = this.metadata.get(prop.type).properties;

      Object.values(properties)
        .filter(prop => prop.reference === ReferenceType.SCALAR && prop.persist !== false)
        .forEach(prop => {
          const tableAlias = queryBuilder.getNextAlias(relationName, previousRelationName !== relationName);
          const fieldAlias = `${tableAlias}_${prop.fieldNames[0]}`;

          selects.push(this.getRefForField(prop.fieldNames[0], tableAlias, fieldAlias));
          queryBuilder.join(relationName, tableAlias, {}, 'leftJoin');
        });
    });

    return selects;
  }

  protected createQueryBuilder<T extends AnyEntity<T>>(entityName: string, ctx?: Transaction<KnexTransaction>, write?: boolean): QueryBuilder<T> {
    return new QueryBuilder(entityName, this.metadata, this, ctx, undefined, write ? 'write' : 'read');
  }

  protected extractManyToMany<T extends AnyEntity<T>>(entityName: string, data: EntityData<T>): EntityData<T> {
    if (!this.metadata.has(entityName)) {
      return {};
    }

    const props = this.metadata.get(entityName).properties;
    const ret: EntityData<T> = {};

    for (const k of Object.keys(data)) {
      const prop = props[k];

      if (prop && prop.reference === ReferenceType.MANY_TO_MANY) {
        ret[k as keyof T] = data[k].map((item: Primary<T>) => Utils.asArray(item));
        delete data[k];
      }
    }

    return ret;
  }

  protected async processManyToMany<T extends AnyEntity<T>>(meta: EntityMetadata<T> | undefined, pks: Primary<T>[], collections: EntityData<T>, clear: boolean, ctx?: Transaction<KnexTransaction>) {
    if (!meta) {
      return;
    }

    const props = meta.properties;

    for (const k of Object.keys(collections)) {
      await this.rethrow(this.updateCollectionDiff(meta, props[k], pks, clear, collections[k], ctx));
    }
  }

  protected async updateCollectionDiff<T extends AnyEntity<T>, O extends AnyEntity<O>>(meta: EntityMetadata<O>, prop: EntityProperty<T>, pks: Primary<O>[], deleteDiff: Primary<T>[][] | boolean, insertDiff: Primary<T>[][], ctx?: Transaction): Promise<void> {
    const meta2 = this.metadata.get<T>(prop.type);

    if (!deleteDiff) {
      deleteDiff = [];
    }

    if (deleteDiff === true || deleteDiff.length > 0) {
      const qb1 = this.createQueryBuilder(prop.pivotTable, ctx, true);
      const knex = qb1.getKnex();

      if (Array.isArray(deleteDiff)) {
        knex.whereIn(prop.inverseJoinColumns, deleteDiff as Value[][]);
      }

      meta2.primaryKeys.forEach((pk, idx) => knex.andWhere(prop.joinColumns[idx], pks[idx] as Value[][]));
      await this.execute(knex.delete());
    }

    const items = insertDiff.map(item => {
      const cond = {} as Dictionary<Primary<T | O>>;
      prop.joinColumns.forEach((joinColumn, idx) => cond[joinColumn] = pks[idx]);
      prop.inverseJoinColumns.forEach((inverseJoinColumn, idx) => cond[inverseJoinColumn] = item[idx]);

      return cond;
    });

    if (this.platform.allowsMultiInsert()) {
      const qb2 = this.createQueryBuilder(prop.pivotTable, ctx, true);
      await this.execute(qb2.getKnex().insert(items));
    } else {
      await Utils.runSerial(items, item => this.createQueryBuilder(prop.pivotTable, ctx, true).insert(item).execute('run', false));
    }
  }

  async lockPessimistic<T extends AnyEntity<T>>(entity: T, mode: LockMode, ctx?: Transaction): Promise<void> {
    const qb = this.createQueryBuilder(entity.constructor.name, ctx);
    const meta = wrap(entity, true).__meta;
    const cond = Utils.getPrimaryKeyCond(entity, meta.primaryKeys);
    qb.select('1').where(cond!).setLockMode(mode);
    await this.rethrow(qb.execute());
  }

}