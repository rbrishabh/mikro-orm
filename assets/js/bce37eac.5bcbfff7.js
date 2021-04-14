(window.webpackJsonp=window.webpackJsonp||[]).push([[751],{1110:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return j}));var r=a(0),c=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,c=function(e,t){if(null==e)return{};var a,r,c={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var i=c.a.createContext({}),o=function(e){var t=c.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=o(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=c.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,b=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=o(a),m=r,j=l["".concat(b,".").concat(m)]||l[m]||d[m]||n;return a?c.a.createElement(j,s(s({ref:t},i),{},{components:a})):c.a.createElement(j,s({ref:t},i))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,b=new Array(n);b[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,b[1]=s;for(var i=2;i<n;i++)b[i]=a[i];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},823:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return o}));var r=a(3),c=a(8),n=(a(0),a(1110)),b={id:"core.tableexistsexception",title:"Class: TableExistsException",sidebar_label:"TableExistsException",custom_edit_url:null,hide_title:!0},s={unversionedId:"api/classes/core.tableexistsexception",id:"version-4.5/api/classes/core.tableexistsexception",isDocsHomePage:!1,title:"Class: TableExistsException",description:"Class: TableExistsException",source:"@site/versioned_docs/version-4.5/api/classes/core.tableexistsexception.md",slug:"/api/classes/core.tableexistsexception",permalink:"/docs/api/classes/core.tableexistsexception",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1618443405,formattedLastUpdatedAt:"4/14/2021",sidebar_label:"TableExistsException",sidebar:"version-4.5/API",previous:{title:"Class: SyntaxErrorException",permalink:"/docs/api/classes/core.syntaxerrorexception"},next:{title:"Class: TableNotFoundException",permalink:"/docs/api/classes/core.tablenotfoundexception"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"code",id:"code",children:[]},{value:"errmsg",id:"errmsg",children:[]},{value:"errno",id:"errno",children:[]},{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"prepareStackTrace",id:"preparestacktrace",children:[]},{value:"sqlMessage",id:"sqlmessage",children:[]},{value:"sqlState",id:"sqlstate",children:[]},{value:"stack",id:"stack",children:[]},{value:"stackTraceLimit",id:"stacktracelimit",children:[]}]},{value:"Methods",id:"methods",children:[{value:"captureStackTrace",id:"capturestacktrace",children:[]}]}],i={toc:p};function o(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"class-tableexistsexception"},"Class: TableExistsException"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".TableExistsException"),Object(n.b)("p",null,"Exception for an already existing table referenced in a statement detected in the driver."),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},Object(n.b)("em",{parentName:"a"},"DatabaseObjectExistsException"))),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"TableExistsException")))),Object(n.b)("h2",{id:"constructors"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new TableExistsException"),"(",Object(n.b)("inlineCode",{parentName:"p"},"previous"),": Error): ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.tableexistsexception"},Object(n.b)("em",{parentName:"a"},"TableExistsException"))),Object(n.b)("h4",{id:"parameters"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"previous")),Object(n.b)("td",{parentName:"tr",align:"left"},"Error")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.tableexistsexception"},Object(n.b)("em",{parentName:"a"},"TableExistsException"))),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"code"},"code"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"code"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#code"},"code")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L6"},"packages/core/src/exceptions.ts:6")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"errmsg"},"errmsg"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"errmsg"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#errmsg"},"errmsg")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L10"},"packages/core/src/exceptions.ts:10")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"errno"},"errno"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"errno"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#errno"},"errno")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L7"},"packages/core/src/exceptions.ts:7")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"message"},"message"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"message"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#message"},"message")),Object(n.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:974"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"name"},"name"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"name"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#name"},"name")),Object(n.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:973"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"preparestacktrace"},"prepareStackTrace"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"prepareStackTrace"),": (",Object(n.b)("inlineCode",{parentName:"p"},"err"),": Error, ",Object(n.b)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]) => ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,"Optional override for formatting stack traces"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"see"))," ",Object(n.b)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),Object(n.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(n.b)("p",null,"\u25b8 (",Object(n.b)("inlineCode",{parentName:"p"},"err"),": Error, ",Object(n.b)("inlineCode",{parentName:"p"},"stackTraces"),": CallSite[]): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("h4",{id:"parameters-1"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"err")),Object(n.b)("td",{parentName:"tr",align:"left"},"Error")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"stackTraces")),Object(n.b)("td",{parentName:"tr",align:"left"},"CallSite[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#preparestacktrace"},"prepareStackTrace")),Object(n.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:11"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"sqlmessage"},"sqlMessage"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"sqlMessage"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#sqlmessage"},"sqlMessage")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L9"},"packages/core/src/exceptions.ts:9")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"sqlstate"},"sqlState"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"sqlState"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#sqlstate"},"sqlState")),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/exceptions.ts#L8"},"packages/core/src/exceptions.ts:8")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"stack"},"stack"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"stack"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#stack"},"stack")),Object(n.b)("p",null,"Defined in: docs/node_modules/typescript/lib/lib.es5.d.ts:975"),Object(n.b)("hr",null),Object(n.b)("h3",{id:"stacktracelimit"},"stackTraceLimit"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"stackTraceLimit"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException"),".",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception#stacktracelimit"},"stackTraceLimit")),Object(n.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:13"),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("h3",{id:"capturestacktrace"},"captureStackTrace"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"captureStackTrace"),"(",Object(n.b)("inlineCode",{parentName:"p"},"targetObject"),": ",Object(n.b)("em",{parentName:"p"},"object"),", ",Object(n.b)("inlineCode",{parentName:"p"},"constructorOpt?"),": Function): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Create .stack property on a target object"),Object(n.b)("h4",{id:"parameters-2"},"Parameters:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Name"),Object(n.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"targetObject")),Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("em",{parentName:"td"},"object"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},Object(n.b)("inlineCode",{parentName:"td"},"constructorOpt?")),Object(n.b)("td",{parentName:"tr",align:"left"},"Function")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,"Inherited from: ",Object(n.b)("a",{parentName:"p",href:"/docs/api/classes/core.databaseobjectexistsexception"},"DatabaseObjectExistsException")),Object(n.b)("p",null,"Defined in: node_modules/@types/node/globals.d.ts:4"))}o.isMDXComponent=!0}}]);