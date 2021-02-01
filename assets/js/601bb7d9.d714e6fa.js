(window.webpackJsonp=window.webpackJsonp||[]).push([[423],{1253:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var b=c.a.createContext({}),s=function(e){var t=c.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(r),d=n,m=l["".concat(a,".").concat(d)]||l[d]||u[d]||o;return r?c.a.createElement(m,i(i({ref:t},b),{},{components:r})):c.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var b=2;b<o;b++)a[b]=r[b];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},492:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),c=r(7),o=(r(0),r(1253)),a={id:"core.queryresult",title:"Interface: QueryResult",sidebar_label:"QueryResult",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/interfaces/core.queryresult",id:"api/interfaces/core.queryresult",isDocsHomePage:!1,title:"Interface: QueryResult",description:"Interface: QueryResult",source:"@site/docs/api/interfaces/core.queryresult.md",slug:"/api/interfaces/core.queryresult",permalink:"/docs/next/api/interfaces/core.queryresult",editUrl:null,version:"current",sidebar_label:"QueryResult",sidebar:"API",previous:{title:"Interface: QueryOrderMap",permalink:"/docs/next/api/interfaces/core.queryordermap"},next:{title:"Interface: ReferenceOptions<T, O>",permalink:"/docs/next/api/interfaces/core.referenceoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"affectedRows",id:"affectedrows",children:[]},{value:"insertId",id:"insertid",children:[]},{value:"row",id:"row",children:[]},{value:"rows",id:"rows",children:[]}]}],b={toc:p};function s(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interface-queryresult"},"Interface: QueryResult"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".QueryResult"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"QueryResult"))),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"affectedrows"},"affectedRows"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"affectedRows"),": ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/9f12d90/packages/core/src/connections/Connection.ts#L127"}),"packages/core/src/connections/Connection.ts:127")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"insertid"},"insertId"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"insertId"),": ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/9f12d90/packages/core/src/connections/Connection.ts#L128"}),"packages/core/src/connections/Connection.ts:128")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"row"},"row"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"row"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(o.b)("em",{parentName:"a"},"Dictionary")),"<",Object(o.b)("em",{parentName:"p"},"any"),">"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/9f12d90/packages/core/src/connections/Connection.ts#L129"}),"packages/core/src/connections/Connection.ts:129")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"rows"},"rows"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(o.b)("strong",{parentName:"p"},"rows"),": ",Object(o.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/modules/core#dictionary"}),Object(o.b)("em",{parentName:"a"},"Dictionary")),"<",Object(o.b)("em",{parentName:"p"},"any"),">","[]"),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/9f12d90/packages/core/src/connections/Connection.ts#L130"}),"packages/core/src/connections/Connection.ts:130")))}s.isMDXComponent=!0}}]);