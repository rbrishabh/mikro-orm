(window.webpackJsonp=window.webpackJsonp||[]).push([[900],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),l=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=l(a),s=r,O=m["".concat(b,".").concat(s)]||m[s]||d[s]||c;return a?n.a.createElement(O,p(p({ref:t},o),{},{components:a})):n.a.createElement(O,p({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var o=2;o<c;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},970:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(7),c=(a(0),a(1253)),b={id:"memorycacheadapter",title:"Class: MemoryCacheAdapter",sidebar_label:"MemoryCacheAdapter"},p={unversionedId:"api/classes/memorycacheadapter",id:"version-4.3/api/classes/memorycacheadapter",isDocsHomePage:!1,title:"Class: MemoryCacheAdapter",description:"Hierarchy",source:"@site/versioned_docs/version-4.3/api/classes/memorycacheadapter.md",slug:"/api/classes/memorycacheadapter",permalink:"/docs/4.3/api/classes/memorycacheadapter",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/memorycacheadapter.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612166900,sidebar_label:"MemoryCacheAdapter",sidebar:"version-4.3/API",previous:{title:"Class: MariaDbDriver",permalink:"/docs/4.3/api/classes/mariadbdriver"},next:{title:"Class: MetadataDiscovery",permalink:"/docs/4.3/api/classes/metadatadiscovery"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"data",id:"data",children:[]},{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[{value:"clear",id:"clear",children:[]},{value:"get",id:"get",children:[]},{value:"set",id:"set",children:[]}]}],o={toc:i};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"MemoryCacheAdapter"))),Object(c.b)("h2",{id:"implements"},"Implements"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/4.3/api/interfaces/cacheadapter"}),"CacheAdapter"))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new MemoryCacheAdapter"),"(",Object(c.b)("inlineCode",{parentName:"p"},"options"),": { expiration: number  }): ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/memorycacheadapter"}),"MemoryCacheAdapter")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/cache/MemoryCacheAdapter.ts#L5"}),"packages/core/src/cache/MemoryCacheAdapter.ts:5"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"{ expiration: number  }")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.3/api/classes/memorycacheadapter"}),"MemoryCacheAdapter")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"data"},"data"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Private")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"data"),": Map","<","string, { data: any ; expiration: number  }> = new Map","<","string, { data: any; expiration: number }>()"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/cache/MemoryCacheAdapter.ts#L5"}),"packages/core/src/cache/MemoryCacheAdapter.ts:5"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"options"},"options"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Private")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"options"),": { expiration: number  }"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/cache/MemoryCacheAdapter.ts#L7"}),"packages/core/src/cache/MemoryCacheAdapter.ts:7"))),Object(c.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"expiration")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number")))),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"clear"},"clear"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"clear"),"(): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Implementation of ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/cacheadapter"}),"CacheAdapter"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/cache/MemoryCacheAdapter.ts#L36"}),"packages/core/src/cache/MemoryCacheAdapter.ts:36"))),Object(c.b)("p",null,"Clears all items stored in the cache."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"get"},"get"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"get"),"<","T>(",Object(c.b)("inlineCode",{parentName:"p"},"name"),": string): Promise","<","T ","|"," undefined>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Implementation of ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/cacheadapter"}),"CacheAdapter"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/cache/MemoryCacheAdapter.ts#L12"}),"packages/core/src/cache/MemoryCacheAdapter.ts:12"))),Object(c.b)("p",null,"Gets the items under ",Object(c.b)("inlineCode",{parentName:"p"},"name")," key from the cache."),Object(c.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"T")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","T ","|"," undefined>"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"set"},"set"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"set"),"(",Object(c.b)("inlineCode",{parentName:"p"},"name"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"data"),": any, ",Object(c.b)("inlineCode",{parentName:"p"},"origin"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"expiration?"),": number): Promise","<","void>"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Implementation of ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/4.3/api/interfaces/cacheadapter"}),"CacheAdapter"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/cache/MemoryCacheAdapter.ts#L29"}),"packages/core/src/cache/MemoryCacheAdapter.ts:29"))),Object(c.b)("p",null,"Sets the item to the cache. ",Object(c.b)("inlineCode",{parentName:"p"},"origin")," is used for cache invalidation and should reflect the change in data."),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"origin")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"expiration?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"number")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"))}l.isMDXComponent=!0}}]);