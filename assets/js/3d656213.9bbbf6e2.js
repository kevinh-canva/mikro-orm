"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91402],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},k=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=d(t),m=r,u=k["".concat(o,".").concat(m)]||k[m]||s[m]||a;return t?i.createElement(u,l(l({ref:n},c),{},{components:t})):i.createElement(u,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<a;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3402:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var i=t(83117),r=t(80102),a=(t(67294),t(3905)),l=["components"],p={id:"knex.Column",title:"Interface: Column",sidebar_label:"Column",custom_edit_url:null},o=void 0,d={unversionedId:"api/interfaces/knex.Column",id:"api/interfaces/knex.Column",isDocsHomePage:!1,title:"Interface: Column",description:"knex.Column",source:"@site/docs/api/interfaces/knex.Column.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.Column",permalink:"/docs/next/api/interfaces/knex.Column",editUrl:null,tags:[],version:"current",frontMatter:{id:"knex.Column",title:"Interface: Column",sidebar_label:"Column",custom_edit_url:null},sidebar:"API",previous:{title:"UpdateOptions",permalink:"/docs/next/api/interfaces/core.UpdateOptions"},next:{title:"ColumnDifference",permalink:"/docs/next/api/interfaces/knex.ColumnDifference"}},c=[{value:"Properties",id:"properties",children:[{value:"autoincrement",id:"autoincrement",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"comment",id:"comment",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"default",id:"default",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"enumItems",id:"enumitems",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"length",id:"length",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"mappedType",id:"mappedtype",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"name",id:"name",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"nullable",id:"nullable",children:[{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"precision",id:"precision",children:[{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3},{value:"primary",id:"primary",children:[{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3},{value:"scale",id:"scale",children:[{value:"Defined in",id:"defined-in-10",children:[],level:4}],level:3},{value:"type",id:"type",children:[{value:"Defined in",id:"defined-in-11",children:[],level:4}],level:3},{value:"unique",id:"unique",children:[{value:"Defined in",id:"defined-in-12",children:[],level:4}],level:3},{value:"unsigned",id:"unsigned",children:[{value:"Defined in",id:"defined-in-13",children:[],level:4}],level:3}],level:2}],s={toc:c};function k(e){var n=e.components,t=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/knex"},"knex"),".Column"),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"autoincrement"},"autoincrement"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"autoincrement"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L38"},"packages/knex/src/typings.ts:38")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"comment"},"comment"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"comment"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L44"},"packages/knex/src/typings.ts:44")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"default"},"default"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"default"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L43"},"packages/knex/src/typings.ts:43")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"enumitems"},"enumItems"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"enumItems"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L45"},"packages/knex/src/typings.ts:45")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"length"},"length"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"length"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L40"},"packages/knex/src/typings.ts:40")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mappedtype"},"mappedType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"mappedType"),": ",(0,a.kt)("a",{parentName:"p",href:"../classes/core.Type"},(0,a.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),">"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L36"},"packages/knex/src/typings.ts:36")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L34"},"packages/knex/src/typings.ts:34")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"nullable"},"nullable"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"nullable"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L39"},"packages/knex/src/typings.ts:39")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"precision"},"precision"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"precision"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L41"},"packages/knex/src/typings.ts:41")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"primary"},"primary"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"primary"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L46"},"packages/knex/src/typings.ts:46")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"scale"},"scale"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"scale"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L42"},"packages/knex/src/typings.ts:42")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L35"},"packages/knex/src/typings.ts:35")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"unique"},"unique"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"unique"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L47"},"packages/knex/src/typings.ts:47")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"unsigned"},"unsigned"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"unsigned"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/7b7c3a2/packages/knex/src/typings.ts#L37"},"packages/knex/src/typings.ts:37")))}k.isMDXComponent=!0}}]);