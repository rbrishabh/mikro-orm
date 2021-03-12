(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{1052:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return j}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),m=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=m(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=m(a),O=n,j=l["".concat(c,".").concat(O)]||l[O]||s[O]||r;return a?b.a.createElement(j,o(o({ref:t},i),{},{components:a})):b.a.createElement(j,o({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=O;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<r;i++)c[i]=a[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},385:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(3),b=a(8),r=(a(0),a(1052)),c={id:"core.connection",title:"Class: Connection",sidebar_label:"Connection",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/classes/core.connection",id:"api/classes/core.connection",isDocsHomePage:!1,title:"Class: Connection",description:"Class: Connection",source:"@site/docs/api/classes/core.connection.md",slug:"/api/classes/core.connection",permalink:"/docs/next/api/classes/core.connection",editUrl:null,version:"current",sidebar_label:"Connection",sidebar:"API",previous:{title:"Class: ConfigurationLoader",permalink:"/docs/next/api/classes/core.configurationloader"},next:{title:"Class: ConnectionException",permalink:"/docs/next/api/classes/core.connectionexception"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"client",id:"client",children:[]},{value:"config",id:"config",children:[]},{value:"metadata",id:"metadata",children:[]},{value:"options",id:"options",children:[]},{value:"platform",id:"platform",children:[]},{value:"type",id:"type",children:[]}]},{value:"Methods",id:"methods",children:[{value:"begin",id:"begin",children:[]},{value:"close",id:"close",children:[]},{value:"commit",id:"commit",children:[]},{value:"connect",id:"connect",children:[]},{value:"execute",id:"execute",children:[]},{value:"executeQuery",id:"executequery",children:[]},{value:"getClientUrl",id:"getclienturl",children:[]},{value:"getConnectionOptions",id:"getconnectionoptions",children:[]},{value:"getDefaultClientUrl",id:"getdefaultclienturl",children:[]},{value:"isConnected",id:"isconnected",children:[]},{value:"logQuery",id:"logquery",children:[]},{value:"rollback",id:"rollback",children:[]},{value:"setMetadata",id:"setmetadata",children:[]},{value:"setPlatform",id:"setplatform",children:[]},{value:"transactional",id:"transactional",children:[]}]}],i={toc:p};function m(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"class-connection"},"Class: Connection"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".Connection"),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Connection")),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/knex.abstractsqlconnection"},Object(r.b)("em",{parentName:"a"},"AbstractSqlConnection"))))),Object(r.b)("h2",{id:"constructors"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new Connection"),"(",Object(r.b)("inlineCode",{parentName:"p"},"config"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.configuration"},Object(r.b)("em",{parentName:"a"},"Configuration")),"<",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(r.b)("em",{parentName:"a"},"Connection")),">",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.connectionoptions"},Object(r.b)("em",{parentName:"a"},"ConnectionOptions")),", ",Object(r.b)("inlineCode",{parentName:"p"},"type?"),": ",Object(r.b)("em",{parentName:"p"},"read")," ","|"," ",Object(r.b)("em",{parentName:"p"},"write"),"): ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(r.b)("em",{parentName:"a"},"Connection"))),Object(r.b)("h4",{id:"parameters"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"),Object(r.b)("th",{parentName:"tr",align:"left"},"Default value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"config")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.configuration"},Object(r.b)("em",{parentName:"a"},"Configuration")),"<",Object(r.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},Object(r.b)("em",{parentName:"a"},"Connection")),">",">"),Object(r.b)("td",{parentName:"tr",align:"left"},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"options?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.connectionoptions"},Object(r.b)("em",{parentName:"a"},"ConnectionOptions"))),Object(r.b)("td",{parentName:"tr",align:"left"},"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"type")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"read")," ","|"," ",Object(r.b)("em",{parentName:"td"},"write")),Object(r.b)("td",{parentName:"tr",align:"left"},"'write'")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(r.b)("em",{parentName:"a"},"Connection"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L14"},"packages/core/src/connections/Connection.ts:14")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"client"},"client"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(r.b)("inlineCode",{parentName:"p"},"Abstract")," ",Object(r.b)("strong",{parentName:"p"},"client"),": ",Object(r.b)("em",{parentName:"p"},"any")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L14"},"packages/core/src/connections/Connection.ts:14")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"config"},"config"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"config"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.configuration"},Object(r.b)("em",{parentName:"a"},"Configuration")),"<",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},Object(r.b)("em",{parentName:"a"},"IDatabaseDriver")),"<",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},Object(r.b)("em",{parentName:"a"},"Connection")),">",">"),Object(r.b)("hr",null),Object(r.b)("h3",{id:"metadata"},"metadata"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(r.b)("strong",{parentName:"p"},"metadata"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadatastorage"},Object(r.b)("em",{parentName:"a"},"MetadataStorage"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L12"},"packages/core/src/connections/Connection.ts:12")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"options"},"options"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(r.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"options"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.connectionoptions"},Object(r.b)("em",{parentName:"a"},"ConnectionOptions"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"platform"},"platform"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(r.b)("strong",{parentName:"p"},"platform"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},Object(r.b)("em",{parentName:"a"},"Platform"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L13"},"packages/core/src/connections/Connection.ts:13")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"type"},"type"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(r.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(r.b)("strong",{parentName:"p"},"type"),": ",Object(r.b)("em",{parentName:"p"},"read")," ","|"," ",Object(r.b)("em",{parentName:"p"},"write"),"= 'write'"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"begin"},"begin"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"begin"),"(",Object(r.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(r.b)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<unknown",">"),Object(r.b)("h4",{id:"parameters-1"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"ctx?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"eventBroadcaster?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(r.b)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<unknown",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L49"},"packages/core/src/connections/Connection.ts:49")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"close"},"close"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Abstract"),Object(r.b)("strong",{parentName:"p"},"close"),"(",Object(r.b)("inlineCode",{parentName:"p"},"force?"),": ",Object(r.b)("em",{parentName:"p"},"boolean"),"): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(r.b)("p",null,"Closes the database connection (aka disconnect)"),Object(r.b)("h4",{id:"parameters-2"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"force?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"boolean"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L38"},"packages/core/src/connections/Connection.ts:38")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"commit"},"commit"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"commit"),"(",Object(r.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(r.b)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(r.b)("h4",{id:"parameters-3"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"ctx")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"eventBroadcaster?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(r.b)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L53"},"packages/core/src/connections/Connection.ts:53")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"connect"},"connect"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Abstract"),Object(r.b)("strong",{parentName:"p"},"connect"),"(): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(r.b)("p",null,"Establishes connection to database"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L28"},"packages/core/src/connections/Connection.ts:28")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"execute"},"execute"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Abstract"),Object(r.b)("strong",{parentName:"p"},"execute"),"(",Object(r.b)("inlineCode",{parentName:"p"},"query"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"params?"),": ",Object(r.b)("em",{parentName:"p"},"any"),"[], ",Object(r.b)("inlineCode",{parentName:"p"},"method?"),": ",Object(r.b)("em",{parentName:"p"},"all")," ","|"," ",Object(r.b)("em",{parentName:"p"},"get")," ","|"," ",Object(r.b)("em",{parentName:"p"},"run"),", ",Object(r.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(r.b)("em",{parentName:"p"},"any"),"): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(r.b)("h4",{id:"parameters-4"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"query")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"params?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any"),"[]")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"method?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"all")," ","|"," ",Object(r.b)("em",{parentName:"td"},"get")," ","|"," ",Object(r.b)("em",{parentName:"td"},"run"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"ctx?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<any",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L61"},"packages/core/src/connections/Connection.ts:61")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"executequery"},"executeQuery"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected"),Object(r.b)("strong",{parentName:"p"},"executeQuery"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"query"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"cb"),": () => ",Object(r.b)("em",{parentName:"p"},"Promise"),"<T",">","): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(r.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-5"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"query")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"cb")),Object(r.b)("td",{parentName:"tr",align:"left"},"() => ",Object(r.b)("em",{parentName:"td"},"Promise"),"<T",">")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L90"},"packages/core/src/connections/Connection.ts:90")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getclienturl"},"getClientUrl"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getClientUrl"),"(): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L75"},"packages/core/src/connections/Connection.ts:75")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getconnectionoptions"},"getConnectionOptions"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"getConnectionOptions"),"(): ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.connectionconfig"},Object(r.b)("em",{parentName:"a"},"ConnectionConfig"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.connectionconfig"},Object(r.b)("em",{parentName:"a"},"ConnectionConfig"))),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L63"},"packages/core/src/connections/Connection.ts:63")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"getdefaultclienturl"},"getDefaultClientUrl"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Abstract"),Object(r.b)("strong",{parentName:"p"},"getDefaultClientUrl"),"(): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Returns default client url for given driver (e.g. mongodb://127.0.0.1:27017 for mongodb)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L43"},"packages/core/src/connections/Connection.ts:43")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"isconnected"},"isConnected"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Abstract"),Object(r.b)("strong",{parentName:"p"},"isConnected"),"(): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<boolean",">"),Object(r.b)("p",null,"Are we connected to the database"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<boolean",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L33"},"packages/core/src/connections/Connection.ts:33")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"logquery"},"logQuery"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("inlineCode",{parentName:"p"},"Protected"),Object(r.b)("strong",{parentName:"p"},"logQuery"),"(",Object(r.b)("inlineCode",{parentName:"p"},"query"),": ",Object(r.b)("em",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"took?"),": ",Object(r.b)("em",{parentName:"p"},"number"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"parameters-6"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"query")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"string"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"took?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"number"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L104"},"packages/core/src/connections/Connection.ts:104")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rollback"},"rollback"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"rollback"),"(",Object(r.b)("inlineCode",{parentName:"p"},"ctx"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(r.b)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(r.b)("h4",{id:"parameters-7"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"ctx")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"eventBroadcaster?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(r.b)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L57"},"packages/core/src/connections/Connection.ts:57")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setmetadata"},"setMetadata"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setMetadata"),"(",Object(r.b)("inlineCode",{parentName:"p"},"metadata"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadatastorage"},Object(r.b)("em",{parentName:"a"},"MetadataStorage")),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"parameters-8"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"metadata")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.metadatastorage"},Object(r.b)("em",{parentName:"a"},"MetadataStorage")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L82"},"packages/core/src/connections/Connection.ts:82")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setplatform"},"setPlatform"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setPlatform"),"(",Object(r.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.platform"},Object(r.b)("em",{parentName:"a"},"Platform")),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("h4",{id:"parameters-9"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"platform")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.platform"},Object(r.b)("em",{parentName:"a"},"Platform")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L86"},"packages/core/src/connections/Connection.ts:86")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"transactional"},"transactional"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"transactional"),"<T",">","(",Object(r.b)("inlineCode",{parentName:"p"},"cb"),": (",Object(r.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(r.b)("em",{parentName:"p"},"any"),") => ",Object(r.b)("em",{parentName:"p"},"Promise"),"<T",">",", ",Object(r.b)("inlineCode",{parentName:"p"},"ctx?"),": ",Object(r.b)("em",{parentName:"p"},"any"),", ",Object(r.b)("inlineCode",{parentName:"p"},"eventBroadcaster?"),": ",Object(r.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(r.b)("em",{parentName:"a"},"TransactionEventBroadcaster")),"): ",Object(r.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(r.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"T"))))),Object(r.b)("h4",{id:"parameters-10"},"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Name"),Object(r.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"cb")),Object(r.b)("td",{parentName:"tr",align:"left"},"(",Object(r.b)("inlineCode",{parentName:"td"},"trx"),": ",Object(r.b)("em",{parentName:"td"},"any"),") => ",Object(r.b)("em",{parentName:"td"},"Promise"),"<T",">")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"ctx?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("em",{parentName:"td"},"any"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("inlineCode",{parentName:"td"},"eventBroadcaster?")),Object(r.b)("td",{parentName:"tr",align:"left"},Object(r.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.transactioneventbroadcaster"},Object(r.b)("em",{parentName:"a"},"TransactionEventBroadcaster")))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"Promise"),"<T",">"),Object(r.b)("p",null,"Defined in: ",Object(r.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/fb10fb9/packages/core/src/connections/Connection.ts#L45"},"packages/core/src/connections/Connection.ts:45")))}m.isMDXComponent=!0}}]);