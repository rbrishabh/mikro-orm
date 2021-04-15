(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{1110:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),l=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=l(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=l(a),O=r,j=m["".concat(c,".").concat(O)]||m[O]||d[O]||b;return a?n.a.createElement(j,p(p({ref:t},o),{},{components:a})):n.a.createElement(j,p({ref:t},o))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=O;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},274:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a(3),n=a(8),b=(a(0),a(1110)),c={id:"core.iwrappedentity",title:"Interface: IWrappedEntity<T, PK, P>",sidebar_label:"IWrappedEntity",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/core.iwrappedentity",id:"version-4.5/api/interfaces/core.iwrappedentity",isDocsHomePage:!1,title:"Interface: IWrappedEntity<T, PK, P>",description:"Interface: IWrappedEntity",source:"@site/versioned_docs/version-4.5/api/interfaces/core.iwrappedentity.md",slug:"/api/interfaces/core.iwrappedentity",permalink:"/docs/api/interfaces/core.iwrappedentity",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1618507755,formattedLastUpdatedAt:"4/15/2021",sidebar_label:"IWrappedEntity",sidebar:"version-4.5/API",previous:{title:"Interface: IDatabaseDriver<C>",permalink:"/docs/api/interfaces/core.idatabasedriver"},next:{title:"Interface: IndexOptions<T>",permalink:"/docs/api/interfaces/core.indexoptions"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"init",id:"init",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"populated",id:"populated",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"toObject",id:"toobject",children:[]},{value:"toPOJO",id:"topojo",children:[]},{value:"toReference",id:"toreference",children:[]}]}],o={toc:i};function l(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"interface-iwrappedentityt-pk-p"},"Interface: IWrappedEntity<T, PK, P",">"),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".IWrappedEntity"),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#anyentity"},Object(b.b)("em",{parentName:"a"},"AnyEntity")),"<T",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"PK")),Object(b.b)("td",{parentName:"tr",align:"left"},"keyof T"),Object(b.b)("td",{parentName:"tr",align:"left"},"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"P")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#populate"},Object(b.b)("em",{parentName:"a"},"Populate")),"<T",">"," ","|"," ",Object(b.b)("em",{parentName:"td"},"unknown")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown"))))),Object(b.b)("h2",{id:"implemented-by"},"Implemented by"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"/docs/api/classes/core.baseentity"},Object(b.b)("em",{parentName:"a"},"BaseEntity")))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"assign"},"assign"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"assign"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("em",{parentName:"p"},"boolean")," ","|"," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")),"): T"),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean")," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/interfaces/core.assignoptions"},Object(b.b)("em",{parentName:"a"},"AssignOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/typings.ts#L87"},"packages/core/src/typings.ts:87")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"init"),"<P",">","(",Object(b.b)("inlineCode",{parentName:"p"},"populated?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"p"},"populate?"),": P, ",Object(b.b)("inlineCode",{parentName:"p"},"lockMode?"),": ",Object(b.b)("a",{parentName:"p",href:"/docs/api/enums/core.lockmode"},Object(b.b)("em",{parentName:"a"},"LockMode")),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"P")),Object(b.b)("td",{parentName:"tr",align:"left"},"readonly ",Object(b.b)("em",{parentName:"td"},"string"),"[] ","|"," readonly keyof T[] ","|"," ",Object(b.b)("em",{parentName:"td"},"boolean")," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/enums/core.loadstrategy"},Object(b.b)("em",{parentName:"a"},"LoadStrategy"))," ","|"," ",Object(b.b)("em",{parentName:"td"},"PopulateChildren"),"<T",">"),Object(b.b)("td",{parentName:"tr",align:"left"},"readonly ",Object(b.b)("em",{parentName:"td"},"string"),"[] ","|"," readonly keyof T[] ","|"," ",Object(b.b)("em",{parentName:"td"},"boolean")," ","|"," ",Object(b.b)("a",{parentName:"td",href:"/docs/api/enums/core.loadstrategy"},Object(b.b)("em",{parentName:"a"},"LoadStrategy"))," ","|"," ",Object(b.b)("em",{parentName:"td"},"PopulateChildren"),"<T",">")))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"populated?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"populate?")),Object(b.b)("td",{parentName:"tr",align:"left"},"P")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"lockMode?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/enums/core.lockmode"},Object(b.b)("em",{parentName:"a"},"LockMode")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/typings.ts#L82"},"packages/core/src/typings.ts:82")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isinitialized"},"isInitialized"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isInitialized"),"(): ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"boolean")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/typings.ts#L80"},"packages/core/src/typings.ts:80")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"populated"},"populated"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"populated"),"(",Object(b.b)("inlineCode",{parentName:"p"},"populated?"),": ",Object(b.b)("em",{parentName:"p"},"boolean"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"populated?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"boolean"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/typings.ts#L81"},"packages/core/src/typings.ts:81")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(...",Object(b.b)("inlineCode",{parentName:"p"},"args"),": ",Object(b.b)("em",{parentName:"p"},"any"),"[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"...args")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"any"),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/typings.ts#L85"},"packages/core/src/typings.ts:85")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"toobject"},"toObject"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toObject"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ignoreFields?"),": ",Object(b.b)("em",{parentName:"p"},"string"),"[]): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"ignoreFields?")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"string"),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(b.b)("em",{parentName:"a"},"Dictionary")),"<any",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/typings.ts#L84"},"packages/core/src/typings.ts:84")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"topojo"},"toPOJO"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toPOJO"),"(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#entitydata"},Object(b.b)("em",{parentName:"a"},"EntityData")),"<T",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/typings.ts#L86"},"packages/core/src/typings.ts:86")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"toreference"},"toReference"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toReference"),"<PK2, P2",">","(): ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#identifiedreference"},Object(b.b)("em",{parentName:"a"},"IdentifiedReference")),"<T, PK2",">"," & ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.loadedreference"},Object(b.b)("em",{parentName:"a"},"LoadedReference")),"<T, P2",">"),Object(b.b)("h4",{id:"type-parameters-2"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"Name"),Object(b.b)("th",{parentName:"tr",align:"left"},"Type"),Object(b.b)("th",{parentName:"tr",align:"left"},"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"PK2")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/docs/api/modules/core#primaryproperty"},Object(b.b)("em",{parentName:"a"},"PrimaryProperty")),"<T",">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("inlineCode",{parentName:"td"},"P2")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown")),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("em",{parentName:"td"},"unknown"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",{parentName:"p",href:"/docs/api/modules/core#identifiedreference"},Object(b.b)("em",{parentName:"a"},"IdentifiedReference")),"<T, PK2",">"," & ",Object(b.b)("a",{parentName:"p",href:"/docs/api/interfaces/core.loadedreference"},Object(b.b)("em",{parentName:"a"},"LoadedReference")),"<T, P2",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/typings.ts#L83"},"packages/core/src/typings.ts:83")))}l.isMDXComponent=!0}}]);