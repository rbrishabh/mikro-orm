(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{1052:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},s=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=l(a),g=n,j=s["".concat(c,".").concat(g)]||s[g]||o[g]||b;return a?r.a.createElement(j,m(m({ref:t},p),{},{components:a})):r.a.createElement(j,m({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=g;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:n,c[1]=m;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},296:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return m})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(8),b=(a(0),a(1052)),c={id:"core.abstractnamingstrategy",title:"Class: AbstractNamingStrategy",sidebar_label:"AbstractNamingStrategy",hide_title:!0},m={unversionedId:"api/classes/core.abstractnamingstrategy",id:"version-4.4/api/classes/core.abstractnamingstrategy",isDocsHomePage:!1,title:"Class: AbstractNamingStrategy",description:"Class: AbstractNamingStrategy",source:"@site/versioned_docs/version-4.4/api/classes/core.abstractnamingstrategy.md",slug:"/api/classes/core.abstractnamingstrategy",permalink:"/docs/api/classes/core.abstractnamingstrategy",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/classes/core.abstractnamingstrategy.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1615917834,formattedLastUpdatedAt:"3/16/2021",sidebar_label:"AbstractNamingStrategy",sidebar:"version-4.4/API",previous:{title:"Class: CLIHelper",permalink:"/docs/api/classes/cli.clihelper"},next:{title:"Class: ArrayCollection<T, O>",permalink:"/docs/api/classes/core.arraycollection"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"classToMigrationName",id:"classtomigrationname",children:[]},{value:"classToTableName",id:"classtotablename",children:[]},{value:"getClassName",id:"getclassname",children:[]},{value:"joinColumnName",id:"joincolumnname",children:[]},{value:"joinKeyColumnName",id:"joinkeycolumnname",children:[]},{value:"joinTableName",id:"jointablename",children:[]},{value:"propertyToColumnName",id:"propertytocolumnname",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]}]}],p={toc:i};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-abstractnamingstrategy"},"Class: AbstractNamingStrategy"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".AbstractNamingStrategy"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"AbstractNamingStrategy")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.mongonamingstrategy"},Object(b.b)("em",{parentName:"a"},"MongoNamingStrategy"))),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.underscorenamingstrategy"},Object(b.b)("em",{parentName:"a"},"UnderscoreNamingStrategy"))),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.entitycasenamingstrategy"},Object(b.b)("em",{parentName:"a"},"EntityCaseNamingStrategy"))))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/api/interfaces/core.namingstrategy"},Object(b.b)("em",{parentName:"a"},"NamingStrategy")))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new AbstractNamingStrategy"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},Object(b.b)("em",{parentName:"a"},"AbstractNamingStrategy"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/classes/core.abstractnamingstrategy"},Object(b.b)("em",{parentName:"a"},"AbstractNamingStrategy"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"classtomigrationname"},"classToMigrationName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"classToMigrationName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"timestamp"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"timestamp")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L12"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:12")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"classtotablename"},"classToTableName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"classToTableName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L16"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:16")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getclassname"},"getClassName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getClassName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"file"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"separator?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"file")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:null},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"separator")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string")),Object(b.b)("td",{parentName:"tr",align:null},"'-'")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L5"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:5")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"joincolumnname"},"joinColumnName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"joinColumnName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"propertyName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"propertyName")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L18"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:18")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"joinkeycolumnname"},"joinKeyColumnName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"joinKeyColumnName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"entityName"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"referencedColumnName?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"entityName")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"referencedColumnName?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L20"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:20")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"jointablename"},"joinTableName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"joinTableName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"sourceEntity"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"targetEntity"),": ",Object(b.b)("em",{parentName:"p"},"string"),", ",Object(b.b)("inlineCode",{parentName:"p"},"propertyName?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"sourceEntity")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"targetEntity")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"propertyName?")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L22"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:22")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"propertytocolumnname"},"propertyToColumnName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"propertyToColumnName"),"(",Object(b.b)("inlineCode",{parentName:"p"},"propertyName"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"propertyName")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L24"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:24")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"referencecolumnname"},"referenceColumnName"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Abstract"),Object(b.b)("strong",{parentName:"p"},"referenceColumnName"),"(): ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"string")),Object(b.b)("p",null,"Implementation of: ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.namingstrategy"},"NamingStrategy")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L26"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:26")))}l.isMDXComponent=!0}}]);