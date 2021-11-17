"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92414],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(t),u=a,b=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return t?r.createElement(b,s(s({ref:n},p),{},{components:t})):r.createElement(b,s({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},83357:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),s=["components"],o={title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},l=void 0,d={unversionedId:"embeddables",id:"embeddables",isDocsHomePage:!1,title:"Separating Concerns using Embeddables",description:"Support for embeddables was added in version 4.0",source:"@site/docs/embeddables.md",sourceDirName:".",slug:"/embeddables",permalink:"/docs/next/embeddables",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/embeddables.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637167499,formattedLastUpdatedAt:"11/17/2021",frontMatter:{title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},sidebar:"docs",previous:{title:"Custom Types",permalink:"/docs/next/custom-types"},next:{title:"Defining Entities via EntitySchema",permalink:"/docs/next/entity-schema"}},p=[{value:"Initializing embeddables",id:"initializing-embeddables",children:[],level:2},{value:"Column Prefixing",id:"column-prefixing",children:[],level:2},{value:"Storing embeddables as objects",id:"storing-embeddables-as-objects",children:[],level:2},{value:"Array of embeddables",id:"array-of-embeddables",children:[],level:2},{value:"Nested embeddables",id:"nested-embeddables",children:[],level:2},{value:"Polymorphic embeddables",id:"polymorphic-embeddables",children:[],level:2}],m={toc:p};function c(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Support for embeddables was added in version 4.0")),(0,i.kt)("p",null,"Embeddables are classes which are not entities themselves, but are embedded in\nentities and can also be queried. You'll mostly want to use them to reduce\nduplication or separating concerns. Value objects such as date range or address\nare the primary use case for this feature."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Embeddables needs to be discovered just like regular entities, don't forget to\nadd them to the list of entities when initializing the ORM.")),(0,i.kt)("p",null,"Embeddables can contain properties with basic ",(0,i.kt)("inlineCode",{parentName:"p"},"@Property()")," mapping, nested\n",(0,i.kt)("inlineCode",{parentName:"p"},"@Embedded()")," properties or arrays of ",(0,i.kt)("inlineCode",{parentName:"p"},"@Embedded()")," properties. From version\n5.0 we can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToOne()")," properties."),(0,i.kt)("p",null,"For the purposes of this tutorial, we will assume that you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," class in\nyour application and you would like to store an address in the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," class. We will\nmodel the ",(0,i.kt)("inlineCode",{parentName:"p"},"Address")," class as an embeddable instead of simply adding the respective\ncolumns to the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded()\n  address!: Address;\n\n}\n\n@Embeddable()\nexport class Address {\n  \n  @Property()\n  street!: string;\n\n  @Property()\n  postalCode!: string;\n\n  @Property()\n  city!: string;\n\n  @Property()\n  country!: string;\n\n}\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When using ReflectMetadataProvider, you might need to provide the class in decorator options:\n",(0,i.kt)("inlineCode",{parentName:"p"},"@Embedded(() => Address)")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@Embedded({ entity: () => Address })"),".")),(0,i.kt)("p",null,"In terms of your database schema, MikroORM will automatically inline all columns from\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"Address")," class into the table of the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," class, just as if you had declared\nthem directly there."),(0,i.kt)("h2",{id:"initializing-embeddables"},"Initializing embeddables"),(0,i.kt)("p",null,"In case all fields in the embeddable are nullable, you might want to initialize the\nembeddable, to avoid getting a null value instead of the embedded object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Embedded()\naddress = new Address();\n")),(0,i.kt)("h2",{id:"column-prefixing"},"Column Prefixing"),(0,i.kt)("p",null,"By default, MikroORM names your columns by prefixing them, using the value object name."),(0,i.kt)("p",null,"Following the example above, your columns would be named as ",(0,i.kt)("inlineCode",{parentName:"p"},"address_street"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"address_postal_code"),"..."),(0,i.kt)("p",null,"You can change this behaviour to meet your needs by changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix")," attribute\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Embedded()")," notation."),(0,i.kt)("p",null,"The following example shows you how to set your prefix to ",(0,i.kt)("inlineCode",{parentName:"p"},"myPrefix_"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded({ prefix: 'myPrefix_' })\n  address!: Address;\n\n}\n")),(0,i.kt)("p",null,"To have MikroORM drop the prefix and use the value object's property name directly,\nset ",(0,i.kt)("inlineCode",{parentName:"p"},"prefix: false"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Embedded({ entity: () => Address, prefix: false })\n  address!: Address;\n\n}\n")),(0,i.kt)("h2",{id:"storing-embeddables-as-objects"},"Storing embeddables as objects"),(0,i.kt)("p",null,"From MikroORM v4.2 we can also store the embeddable as an object instead of\ninlining its properties to the owing entity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class User {\n\n  @Embedded({ entity: () => Address, object: true })\n  address!: Address;\n\n}\n")),(0,i.kt)("p",null,"In SQL drivers, this will use a JSON column to store the value. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Only MySQL and PostgreSQL drivers support searching by JSON properties currently.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/embeddables.html"},"doctrine tutorial"),"\nas the behaviour here is pretty much the same.")),(0,i.kt)("h2",{id:"array-of-embeddables"},"Array of embeddables"),(0,i.kt)("p",null,"Embedded arrays are always stored as JSON. It is possible to use them inside\nnested embeddables. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  @Embedded(() => Address, { array: true })\n  addresses: Address[] = [];\n")),(0,i.kt)("h2",{id:"nested-embeddables"},"Nested embeddables"),(0,i.kt)("p",null,"Starting with v4.4, we can also nest embeddables, both in inline mode and object mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nclass User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded(() => Profile, { object: true, nullable: true })\n  profile?: Profile;\n\n}\n\n@Embeddable()\nclass Profile {\n\n  @Property()\n  username: string;\n\n  @Embedded(() => Identity)\n  identity: Identity;\n\n  constructor(username: string, identity: Identity) {\n    this.username = username;\n    this.identity = identity;\n  }\n\n}\n\n@Embeddable()\nclass Identity {\n\n  @Property()\n  email: string;\n\n  constructor(email: string) {\n    this.email = email;\n  }\n\n}\n")),(0,i.kt)("h2",{id:"polymorphic-embeddables"},"Polymorphic embeddables"),(0,i.kt)("p",null,"Since v5, it is also possible to use polymorphic embeddables. This means we\ncan define multiple classes for a single embedded property and the right one\nwill be used based on the discriminator column, similar to how single table\ninheritance work."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';\n\nenum AnimalType {\n  CAT,\n  DOG,\n}\n\n@Embeddable({ abstract: true, discriminatorColumn: 'type' })\nabstract class Animal {\n\n  @Enum(() => AnimalType)\n  type!: AnimalType;\n\n  @Property()\n  name!: string;\n\n}\n\n@Embeddable({ discriminatorValue: AnimalType.CAT })\nclass Cat extends Animal {\n\n  @Property({ nullable: true })\n  canMeow?: boolean = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.CAT;\n    this.name = name;\n  }\n\n}\n\n@Embeddable({ discriminatorValue: AnimalType.DOG })\nclass Dog extends Animal {\n\n  @Property({ nullable: true })\n  canBark?: boolean = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.DOG;\n    this.name = name;\n  }\n\n}\n\n@Entity()\nclass Owner {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded(() => [Cat, Dog])\n  pet!: Cat | Dog;\n\n}\n")))}c.isMDXComponent=!0}}]);