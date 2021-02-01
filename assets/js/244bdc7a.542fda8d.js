(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),l=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=l(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||c;return n?a.a.createElement(f,b(b({ref:t},o),{},{components:n})):a.a.createElement(f,b({ref:t},o))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var o=2;o<c;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),c=(n(0),n(1253)),i={id:"knex.tabledifference",title:"Interface: TableDifference",sidebar_label:"TableDifference",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/interfaces/knex.tabledifference",id:"api/interfaces/knex.tabledifference",isDocsHomePage:!1,title:"Interface: TableDifference",description:"Interface: TableDifference",source:"@site/docs/api/interfaces/knex.tabledifference.md",slug:"/api/interfaces/knex.tabledifference",permalink:"/docs/next/api/interfaces/knex.tabledifference",editUrl:null,version:"current",sidebar_label:"TableDifference",sidebar:"API",previous:{title:"Interface: Table",permalink:"/docs/next/api/interfaces/knex.table"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"addIndex",id:"addindex",children:[]},{value:"create",id:"create",children:[]},{value:"dropIndex",id:"dropindex",children:[]},{value:"remove",id:"remove",children:[]},{value:"rename",id:"rename",children:[]},{value:"update",id:"update",children:[]}]}],o={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-tabledifference"},"Interface: TableDifference"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/knex"}),"knex"),".TableDifference"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"TableDifference"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"addindex"},"addIndex"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"addIndex"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.indexdef"}),Object(c.b)("em",{parentName:"a"},"IndexDef")),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/9f12d90/packages/knex/src/typings.ts#L72"}),"packages/knex/src/typings.ts:72")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"create"},"create"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"create"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(c.b)("em",{parentName:"p"},"any"),">","[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/9f12d90/packages/knex/src/typings.ts#L68"}),"packages/knex/src/typings.ts:68")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"dropindex"},"dropIndex"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"dropIndex"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.indexdef"}),Object(c.b)("em",{parentName:"a"},"IndexDef")),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/9f12d90/packages/knex/src/typings.ts#L73"}),"packages/knex/src/typings.ts:73")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"remove"},"remove"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"remove"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.column"}),Object(c.b)("em",{parentName:"a"},"Column")),"[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/9f12d90/packages/knex/src/typings.ts#L71"}),"packages/knex/src/typings.ts:71")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"rename"},"rename"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"rename"),": { ",Object(c.b)("inlineCode",{parentName:"p"},"from"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.column"}),Object(c.b)("em",{parentName:"a"},"Column"))," ; ",Object(c.b)("inlineCode",{parentName:"p"},"to"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(c.b)("em",{parentName:"p"},"any"),">","  }[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/9f12d90/packages/knex/src/typings.ts#L70"}),"packages/knex/src/typings.ts:70")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"update"},"update"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"update"),": { ",Object(c.b)("inlineCode",{parentName:"p"},"column"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.column"}),Object(c.b)("em",{parentName:"a"},"Column"))," ; ",Object(c.b)("inlineCode",{parentName:"p"},"diff"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/knex.issame"}),Object(c.b)("em",{parentName:"a"},"IsSame"))," ; ",Object(c.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/interfaces/core.entityproperty"}),Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<",Object(c.b)("em",{parentName:"p"},"any"),">","  }[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/9f12d90/packages/knex/src/typings.ts#L69"}),"packages/knex/src/typings.ts:69")))}l.isMDXComponent=!0}}]);