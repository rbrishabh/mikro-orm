(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,s=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?a.a.createElement(s,c(c({ref:t},p),{},{components:n})):a.a.createElement(s,c({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},258:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),i=(n(0),n(1110)),o={id:"knex.knex-1.migration",title:"Interface: Migration",sidebar_label:"Migration",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/interfaces/knex.knex-1.migration",id:"version-4.5/api/interfaces/knex.knex-1.migration",isDocsHomePage:!1,title:"Interface: Migration",description:"Interface: Migration",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.migration.md",slug:"/api/interfaces/knex.knex-1.migration",permalink:"/docs/api/interfaces/knex.knex-1.migration",editUrl:null,version:"4.5",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1618443405,formattedLastUpdatedAt:"4/14/2021",sidebar_label:"Migration",sidebar:"version-4.5/API",previous:{title:"Interface: MariaSslConfiguration",permalink:"/docs/api/interfaces/knex.knex-1.mariasslconfiguration"},next:{title:"Interface: MigrationSource<TMigrationSpec>",permalink:"/docs/api/interfaces/knex.knex-1.migrationsource"}},b=[{value:"Properties",id:"properties",children:[{value:"down",id:"down",children:[]},{value:"up",id:"up",children:[]}]}],p={toc:b};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-migration"},"Interface: Migration"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Migration"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"down"},"down"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"down"),": (",Object(i.b)("inlineCode",{parentName:"p"},"kenx"),": ",Object(i.b)("em",{parentName:"p"},"Knex"),"<any, unknown[]",">",") => ",Object(i.b)("em",{parentName:"p"},"PromiseLike"),"<any",">"),Object(i.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(i.b)("p",null,"\u25b8 (",Object(i.b)("inlineCode",{parentName:"p"},"kenx"),": ",Object(i.b)("em",{parentName:"p"},"Knex"),"<any, unknown[]",">","): ",Object(i.b)("em",{parentName:"p"},"PromiseLike"),"<any",">"),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"kenx")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"Knex"),"<any, unknown[]",">")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"PromiseLike"),"<any",">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2111"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2111"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"up"},"up"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("strong",{parentName:"p"},"up"),": (",Object(i.b)("inlineCode",{parentName:"p"},"knex"),": ",Object(i.b)("em",{parentName:"p"},"Knex"),"<any, unknown[]",">",") => ",Object(i.b)("em",{parentName:"p"},"PromiseLike"),"<any",">"),Object(i.b)("h4",{id:"type-declaration-1"},"Type declaration:"),Object(i.b)("p",null,"\u25b8 (",Object(i.b)("inlineCode",{parentName:"p"},"knex"),": ",Object(i.b)("em",{parentName:"p"},"Knex"),"<any, unknown[]",">","): ",Object(i.b)("em",{parentName:"p"},"PromiseLike"),"<any",">"),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"left"},"Name"),Object(i.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("inlineCode",{parentName:"td"},"knex")),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("em",{parentName:"td"},"Knex"),"<any, unknown[]",">")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"PromiseLike"),"<any",">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2110"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2110"))}l.isMDXComponent=!0}}]);