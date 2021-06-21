(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68583],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77177:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i={id:"core.nodestate",title:"Enumeration: NodeState",sidebar_label:"NodeState",custom_edit_url:null},c={unversionedId:"api/enums/core.nodestate",id:"api/enums/core.nodestate",isDocsHomePage:!1,title:"Enumeration: NodeState",description:"core.NodeState",source:"@site/docs/api/enums/core.nodestate.md",sourceDirName:"api/enums",slug:"/api/enums/core.nodestate",permalink:"/docs/next/api/enums/core.nodestate",editUrl:null,version:"current",sidebar_label:"NodeState",frontMatter:{id:"core.nodestate",title:"Enumeration: NodeState",sidebar_label:"NodeState",custom_edit_url:null},sidebar:"API",previous:{title:"Enumeration: LockMode",permalink:"/docs/next/api/enums/core.lockmode"},next:{title:"Enumeration: QueryFlag",permalink:"/docs/next/api/enums/core.queryflag"}},u=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"IN_PROGRESS",id:"in_progress",children:[]},{value:"NOT_VISITED",id:"not_visited",children:[]},{value:"VISITED",id:"visited",children:[]}]}],l={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".NodeState"),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,a.kt)("h3",{id:"in_progress"},"IN","_","PROGRESS"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"IN","_","PROGRESS")," = 1"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c0a1c76/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L6"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:6")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"not_visited"},"NOT","_","VISITED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"NOT","_","VISITED")," = 0"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c0a1c76/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L5"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:5")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"visited"},"VISITED"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"VISITED")," = 2"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/c0a1c76/packages/core/src/unit-of-work/CommitOrderCalculator.ts#L7"},"packages/core/src/unit-of-work/CommitOrderCalculator.ts:7")))}s.isMDXComponent=!0}}]);