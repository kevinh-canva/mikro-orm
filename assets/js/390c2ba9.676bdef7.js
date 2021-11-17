"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2702],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(o,".").concat(u)]||m[u]||k[u]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86873:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],p={id:"knex.column",title:"Interface: Column",sidebar_label:"Column",custom_edit_url:null,hide_title:!0},o="Interface: Column",s={unversionedId:"api/interfaces/knex.column",id:"version-4.5/api/interfaces/knex.column",isDocsHomePage:!1,title:"Interface: Column",description:"knex.Column",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.column.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.column",permalink:"/docs/api/interfaces/knex.column",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1637145518,formattedLastUpdatedAt:"11/17/2021",frontMatter:{id:"knex.column",title:"Interface: Column",sidebar_label:"Column",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"WithWrapped",permalink:"/docs/api/interfaces/knex.knex-1.withwrapped"},next:{title:"ForeignKey",permalink:"/docs/api/interfaces/knex.foreignkey"}},c=[{value:"Properties",id:"properties",children:[{value:"defaultValue",id:"defaultvalue",children:[],level:3},{value:"enumItems",id:"enumitems",children:[],level:3},{value:"fk",id:"fk",children:[],level:3},{value:"fks",id:"fks",children:[],level:3},{value:"indexes",id:"indexes",children:[],level:3},{value:"maxLength",id:"maxlength",children:[],level:3},{value:"name",id:"name",children:[],level:3},{value:"nullable",id:"nullable",children:[],level:3},{value:"primary",id:"primary",children:[],level:3},{value:"type",id:"type",children:[],level:3},{value:"unique",id:"unique",children:[],level:3}],level:2}],k={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-column"},"Interface: Column"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".Column"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"defaultvalue"},"defaultValue"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"defaultValue"),": ",(0,i.kt)("em",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L40"},"packages/knex/src/typings.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"enumitems"},"enumItems"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"enumItems"),": ",(0,i.kt)("em",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L41"},"packages/knex/src/typings.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fk"},"fk"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fk"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.foreignkey"},(0,i.kt)("em",{parentName:"a"},"ForeignKey"))),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L33"},"packages/knex/src/typings.ts:33")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fks"},"fks"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fks"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.foreignkey"},(0,i.kt)("em",{parentName:"a"},"ForeignKey")),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L34"},"packages/knex/src/typings.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"indexes"},"indexes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"indexes"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.index"},(0,i.kt)("em",{parentName:"a"},"Index")),"[]"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L35"},"packages/knex/src/typings.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maxlength"},"maxLength"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"maxLength"),": ",(0,i.kt)("em",{parentName:"p"},"number")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L39"},"packages/knex/src/typings.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L31"},"packages/knex/src/typings.ts:31")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nullable"},"nullable"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nullable"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L38"},"packages/knex/src/typings.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"primary"},"primary"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"primary"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L36"},"packages/knex/src/typings.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("em",{parentName:"p"},"string")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L32"},"packages/knex/src/typings.ts:32")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unique"},"unique"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"unique"),": ",(0,i.kt)("em",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/knex/src/typings.ts#L37"},"packages/knex/src/typings.ts:37")))}m.isMDXComponent=!0}}]);