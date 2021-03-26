(window.webpackJsonp=window.webpackJsonp||[]).push([[625],{1110:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return O}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),s=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},l=function(e){var t=s(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),l=s(r),d=a,O=l["".concat(p,".").concat(d)]||l[d]||m[d]||c;return r?n.a.createElement(O,b(b({ref:t},o),{},{components:r})):n.a.createElement(O,b({ref:t},o))}));function O(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,p=new Array(c);p[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,p[1]=b;for(var o=2;o<c;o++)p[o]=r[o];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},698:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return b})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(8),c=(r(0),r(1110)),p={id:"core.serverexception",title:"Class: ServerException",sidebar_label:"ServerException",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/classes/core.serverexception",id:"api/classes/core.serverexception",isDocsHomePage:!1,title:"Class: ServerException",description:"Class: ServerException",source:"@site/docs/api/classes/core.serverexception.md",slug:"/api/classes/core.serverexception",permalink:"/docs/next/api/classes/core.serverexception",editUrl:null,version:"current",sidebar_label:"ServerException",sidebar:"API",previous:{title:"Class: SerializationContext<T>",permalink:"/docs/next/api/classes/core.serializationcontext"},next:{title:"Class: SyntaxErrorException",permalink:"/docs/next/api/classes/core.syntaxerrorexception"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],o={toc:i};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-serverexception"},"Class: ServerException"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".ServerException"),Object(c.b)("p",null,"Base class for all server related errors detected in the driver."),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},Object(c.b)("em",{parentName:"a"},"DriverException"))),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"ServerException")),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.constraintviolationexception"},Object(c.b)("em",{parentName:"a"},"ConstraintViolationException"))),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.databaseobjectexistsexception"},Object(c.b)("em",{parentName:"a"},"DatabaseObjectExistsException"))),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.databaseobjectnotfoundexception"},Object(c.b)("em",{parentName:"a"},"DatabaseObjectNotFoundException"))),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.deadlockexception"},Object(c.b)("em",{parentName:"a"},"DeadlockException"))),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.invalidfieldnameexception"},Object(c.b)("em",{parentName:"a"},"InvalidFieldNameException"))),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.lockwaittimeoutexception"},Object(c.b)("em",{parentName:"a"},"LockWaitTimeoutException"))),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.nonuniquefieldnameexception"},Object(c.b)("em",{parentName:"a"},"NonUniqueFieldNameException"))),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.readonlyexception"},Object(c.b)("em",{parentName:"a"},"ReadOnlyException"))),Object(c.b)("p",{parentName:"li"},"\u21b3\u21b3 ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.syntaxerrorexception"},Object(c.b)("em",{parentName:"a"},"SyntaxErrorException"))))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new ServerException"),"(",Object(c.b)("inlineCode",{parentName:"p"},"previous"),": Error): ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.serverexception"},Object(c.b)("em",{parentName:"a"},"ServerException"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"previous")),Object(c.b)("td",{parentName:"tr",align:"left"},"Error")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.serverexception"},Object(c.b)("em",{parentName:"a"},"ServerException"))),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},"DriverException")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/27e4dd2/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"code"},"code"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"code"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},"DriverException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception#code"},"code")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/27e4dd2/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errmsg"},"errmsg"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errmsg"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},"DriverException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception#errmsg"},"errmsg")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/27e4dd2/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"errno"},"errno"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"errno"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},"DriverException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception#errno"},"errno")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/27e4dd2/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"message"},"message"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"message"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},"DriverException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception#message"},"message")),Object(c.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},"DriverException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception#name"},"name")),Object(c.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlMessage"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},"DriverException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception#sqlmessage"},"sqlMessage")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/27e4dd2/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"sqlstate"},"sqlState"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"sqlState"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},"DriverException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception#sqlstate"},"sqlState")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/27e4dd2/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stack"},"stack"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"stack"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},"DriverException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception#stack"},"stack")),Object(c.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"preparestacktrace"},"prepareStackTrace"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("inlineCode",{parentName:"p"},"Static")," ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"prepareStackTrace"),": (",Object(c.b)("inlineCode",{parentName:"p"},"err"),": Error, ",Object(c.b)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Optional override for formatting stack traces"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(c.b)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),Object(c.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(c.b)("p",null,"\u25b8 (",Object(c.b)("inlineCode",{parentName:"p"},"err"),": Error, ",Object(c.b)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"err")),Object(c.b)("td",{parentName:"tr",align:"left"},"Error")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"stackTraces")),Object(c.b)("td",{parentName:"tr",align:"left"},"CallSite[]")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},"DriverException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception#preparestacktrace"},"prepareStackTrace")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"stacktracelimit"},"stackTraceLimit"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("inlineCode",{parentName:"p"},"Static")," ",Object(c.b)("strong",{parentName:"p"},"stackTraceLimit"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},"DriverException"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception#stacktracelimit"},"stackTraceLimit")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"capturestacktrace"},"captureStackTrace"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Static"),Object(c.b)("strong",{parentName:"p"},"captureStackTrace"),"(",Object(c.b)("inlineCode",{parentName:"p"},"targetObject"),": ",Object(c.b)("em",{parentName:"p"},"object"),", ",Object(c.b)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Create .stack property on a target object"),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"targetObject")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"object"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"constructorOpt?")),Object(c.b)("td",{parentName:"tr",align:"left"},"Function")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.driverexception"},"DriverException")),Object(c.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}s.isMDXComponent=!0}}]);