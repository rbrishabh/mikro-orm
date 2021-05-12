(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54656],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(k,c(c({ref:t},l),{},{components:r})):n.createElement(k,c({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1569:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return s},default:function(){return l}});var n=r(74034),o=r(79973),i=(r(67294),r(3905)),c={id:"core.lockmode",title:"Enumeration: LockMode",sidebar_label:"LockMode",custom_edit_url:null},a={unversionedId:"api/enums/core.lockmode",id:"api/enums/core.lockmode",isDocsHomePage:!1,title:"Enumeration: LockMode",description:"core.LockMode",source:"@site/docs/api/enums/core.lockmode.md",sourceDirName:"api/enums",slug:"/api/enums/core.lockmode",permalink:"/docs/next/api/enums/core.lockmode",editUrl:null,version:"current",sidebar_label:"LockMode",frontMatter:{id:"core.lockmode",title:"Enumeration: LockMode",sidebar_label:"LockMode",custom_edit_url:null},sidebar:"API",previous:{title:"Enumeration: LoadStrategy",permalink:"/docs/next/api/enums/core.loadstrategy"},next:{title:"Enumeration: NodeState",permalink:"/docs/next/api/enums/core.nodestate"}},s=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"NONE",id:"none",children:[]},{value:"OPTIMISTIC",id:"optimistic",children:[]},{value:"PESSIMISTIC_READ",id:"pessimistic_read",children:[]},{value:"PESSIMISTIC_WRITE",id:"pessimistic_write",children:[]}]}],u={toc:s};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".LockMode"),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,i.kt)("h3",{id:"none"},"NONE"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"NONE"),": = 0"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/558952b/packages/core/src/enums.ts#L91"},"packages/core/src/enums.ts:91")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"optimistic"},"OPTIMISTIC"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"OPTIMISTIC"),": = 1"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/558952b/packages/core/src/enums.ts#L92"},"packages/core/src/enums.ts:92")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pessimistic_read"},"PESSIMISTIC","_","READ"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"PESSIMISTIC","_","READ"),": = 2"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/558952b/packages/core/src/enums.ts#L93"},"packages/core/src/enums.ts:93")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pessimistic_write"},"PESSIMISTIC","_","WRITE"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"PESSIMISTIC","_","WRITE"),": = 3"),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/558952b/packages/core/src/enums.ts#L94"},"packages/core/src/enums.ts:94")))}l.isMDXComponent=!0}}]);