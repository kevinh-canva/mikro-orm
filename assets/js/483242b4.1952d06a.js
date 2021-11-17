"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33616],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32107:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={title:"Upgrading from v4 to v5"},s=void 0,d={unversionedId:"upgrading-v4-to-v5",id:"upgrading-v4-to-v5",isDocsHomePage:!1,title:"Upgrading from v4 to v5",description:"Following sections describe (hopefully) all breaking changes, most of them might be not valid",source:"@site/docs/upgrading-v4-to-v5.md",sourceDirName:".",slug:"/upgrading-v4-to-v5",permalink:"/docs/next/upgrading-v4-to-v5",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/upgrading-v4-to-v5.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637167499,formattedLastUpdatedAt:"11/17/2021",frontMatter:{title:"Upgrading from v4 to v5"}},p=[{value:"Node 14+ required",id:"node-14-required",children:[],level:2},{value:"TypeScript 4.1+ required",id:"typescript-41-required",children:[],level:2},{value:"Options parameters",id:"options-parameters",children:[],level:2},{value:"Type-safe populate parameter with dot notation",id:"type-safe-populate-parameter-with-dot-notation",children:[],level:2},{value:"Type-safe fields parameter",id:"type-safe-fields-parameter",children:[],level:2},{value:"Type-safe orderBy parameter",id:"type-safe-orderby-parameter",children:[],level:2},{value:"Removed <code>@Repository()</code> decorator",id:"removed-repository-decorator",children:[],level:2},{value:"Disallowed global identity map",id:"disallowed-global-identity-map",children:[],level:2},{value:"<code>LoadedCollection.get()</code> and <code>$</code> now return the <code>Collection</code> instance",id:"loadedcollectionget-and--now-return-the-collection-instance",children:[],level:2},{value:"Different table aliasing for select-in loading strategy and for QueryBuilder",id:"different-table-aliasing-for-select-in-loading-strategy-and-for-querybuilder",children:[],level:2},{value:"Migrations are now stored without extensions",id:"migrations-are-now-stored-without-extensions",children:[],level:2},{value:"Changes in <code>assign()</code> helper",id:"changes-in-assign-helper",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Following sections describe (hopefully) all breaking changes, most of them might be not valid\nfor you, like if you do not use custom ",(0,r.kt)("inlineCode",{parentName:"p"},"NamingStrategy")," implementation, you do not care about\nthe interface being changed.")),(0,r.kt)("h2",{id:"node-14-required"},"Node 14+ required"),(0,r.kt)("p",null,"Support for older node versions was dropped. "),(0,r.kt)("h2",{id:"typescript-41-required"},"TypeScript 4.1+ required"),(0,r.kt)("p",null,"Support for older TypeScript versions was dropped. "),(0,r.kt)("h2",{id:"options-parameters"},"Options parameters"),(0,r.kt)("p",null,"Previously many methods had many (often boolean) parameters, in v5 such methods are\nrefactored to use options object instead to improve readability. Some methods offered\nboth signatures - the multi parameter signatures are now removed."),(0,r.kt)("p",null,"List of such methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"em.find()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"em.findOne()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"em.findOneOrFail()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"em.findAndCount()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"em.getReference()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"em.merge()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"em.fork()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"em.begin()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"em.assign()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"em.create()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo.find()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo.findOne()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo.findOneOrFail()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo.findAndCount()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo.findAll()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo.getReference()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo.merge()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"collection.init()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo.create()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo.assign()"))),(0,r.kt)("p",null,"This also applies to the methods on ",(0,r.kt)("inlineCode",{parentName:"p"},"IDatabaseDriver")," interface."),(0,r.kt)("h2",{id:"type-safe-populate-parameter-with-dot-notation"},"Type-safe populate parameter with dot notation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FindOptions.populate")," parameter is now strictly typed and supports only array of\nstrings or a boolean.\nObject way is no longer supported. To set loading strategy, use ",(0,r.kt)("inlineCode",{parentName:"p"},"FindOptions.strategy"),".\nThe return type of all such methods now returns properly typed ",(0,r.kt)("inlineCode",{parentName:"p"},"Loaded")," response. "),(0,r.kt)("h2",{id:"type-safe-fields-parameter"},"Type-safe fields parameter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FindOptions.fields")," parameter is now strictly typed also for the dot notation."),(0,r.kt)("h2",{id:"type-safe-orderby-parameter"},"Type-safe orderBy parameter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FindOptions.orderBy")," parameter is now strictly typed. It also allows passing an\narray of objects instead of just a single object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const books = await em.find(Book, {}, {\n  orderBy: [\n    { title: 1 },\n    { author: { name: -1 } },\n  ],\n});\n")),(0,r.kt)("h2",{id:"removed-repository-decorator"},"Removed ",(0,r.kt)("inlineCode",{parentName:"h2"},"@Repository()")," decorator"),(0,r.kt)("p",null,"The decorator was problematic as it could only work properly it the file was required\nsoon enough - before the ORM initialization, otherwise the repository would not be\nregistered at all."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"@Entity({ customRepository: () => CustomRepository })")," in the entity definition\ninstead."),(0,r.kt)("h2",{id:"disallowed-global-identity-map"},"Disallowed global identity map"),(0,r.kt)("p",null,"In v5, it is no longer possible to use the global identity map. This was a\ncommon issue that led to weird bugs, as using the global EM without request\ncontext is wrong, we always need to have a dedicated context for each request,\nso they do not interfere."),(0,r.kt)("p",null,"Now we get a validation error if we try to use the global context. We still can\ndisable this check via ",(0,r.kt)("inlineCode",{parentName:"p"},"allowGlobalContext")," configuration, or a connected\nenvironment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"MIKRO_ORM_ALLOW_GLOBAL_CONTEXT")," - this can be handy\nespecially in unit tests."),(0,r.kt)("h2",{id:"loadedcollectionget-and--now-return-the-collection-instance"},(0,r.kt)("inlineCode",{parentName:"h2"},"LoadedCollection.get()")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"$")," now return the ",(0,r.kt)("inlineCode",{parentName:"h2"},"Collection")," instance"),(0,r.kt)("p",null,"Previously those dynamically added getters returned the array copy of collection\nitems. In v5, we return the collection instance, which is also iterable and has\na ",(0,r.kt)("inlineCode",{parentName:"p"},"length")," getter and indexed access support, so it mimics the array. To get the\narray copy as before, call ",(0,r.kt)("inlineCode",{parentName:"p"},"getItems()")," as with a regular collection."),(0,r.kt)("h2",{id:"different-table-aliasing-for-select-in-loading-strategy-and-for-querybuilder"},"Different table aliasing for select-in loading strategy and for QueryBuilder"),(0,r.kt)("p",null,"Previously with select-in strategy as well as with QueryBuilder, table aliases\nwere always the letter ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," followed by unique index. In v5, we use the same\nmethod as with joined strategy - the letter is inferred from the entity name."),(0,r.kt)("p",null,"This can be breaking if you used the aliases somewhere, e.g. in custom SQL\nfragments. We can restore to the old behaviour by implementing custom naming\nstrategy, overriding the ",(0,r.kt)("inlineCode",{parentName:"p"},"aliasName")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { AbstractNamingStrategy } from '@mikro-orm/core';\n\nclass CustomNamingStrategy extends AbstractNamingStrategy {\n  aliasName(entityName: string, index: number) {\n    return 'e' + index;\n  }\n}\n")),(0,r.kt)("p",null,"Note that in v5 it is possible to use ",(0,r.kt)("inlineCode",{parentName:"p"},"expr()")," helper to access the alias name\ndynamically, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"expr(alias => `lower('${alias}.name')`)"),", which should be\nnow preferred way instead of hardcoding the aliases."),(0,r.kt)("h2",{id:"migrations-are-now-stored-without-extensions"},"Migrations are now stored without extensions"),(0,r.kt)("p",null,"Running migrations in production via node and ts-node is now handled the same.\nThis should actually not be breaking, as old format with extension is still\nsupported (e.g. they still can be rolled back), but newly logged migrations\nwill not contain the extension."),(0,r.kt)("h2",{id:"changes-in-assign-helper"},"Changes in ",(0,r.kt)("inlineCode",{parentName:"h2"},"assign()")," helper"),(0,r.kt)("p",null,"Embeddable instances are now created via ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityFactory")," and they respect the\n",(0,r.kt)("inlineCode",{parentName:"p"},"forceEntityConstructor")," configuration. Due to this we need to have EM instance\nwhen assigning to embedded properties. "),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"em.assign()")," should be preferred to get around this."),(0,r.kt)("p",null,"Deep assigning of child entities now works by default based on the presence of PKs in the payload.\nThis behaviour can be disable via updateByPrimaryKey: false in the assign options."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mergeObjects")," option is now enabled by default."))}c.isMDXComponent=!0}}]);