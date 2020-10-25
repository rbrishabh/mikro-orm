(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{584:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return b}));var n=t(1),o=t(6),a=(t(0),t(804)),i={id:"edge",title:"Interface: Edge",sidebar_label:"Edge"},c={unversionedId:"api/interfaces/edge",id:"version-4.2/api/interfaces/edge",isDocsHomePage:!1,title:"Interface: Edge",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/interfaces/edge.md",slug:"/api/interfaces/edge",permalink:"/docs/api/interfaces/edge",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/interfaces/edge.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1603661699,sidebar_label:"Edge",sidebar:"version-4.2/API",previous:{title:"Interface: DeleteOptions<T>",permalink:"/docs/api/interfaces/deleteoptions"},next:{title:"Interface: EntityProperty<T>",permalink:"/docs/api/interfaces/entityproperty"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"from",id:"from",children:[]},{value:"to",id:"to",children:[]},{value:"weight",id:"weight",children:[]}]}],l={rightToc:p};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Edge"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"from"},"from"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"from"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L16"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:16"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"to"},"to"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"to"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L17"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:17"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"weight"},"weight"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"weight"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L18"}),"packages/core/src/unit-of-work/CommitOrderCalculator.ts:18"))))}b.isMDXComponent=!0},804:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=b(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(t),m=n,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||a;return t?o.a.createElement(d,c(c({ref:r},l),{},{components:t})):o.a.createElement(d,c({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);