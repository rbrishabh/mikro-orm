(window.webpackJsonp=window.webpackJsonp||[]).push([[979],{1052:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),a=(n(0),n(1110)),i={title:"Debugging"},c={unversionedId:"debugging",id:"version-2.7/debugging",isDocsHomePage:!1,title:"Debugging",description:"For development purposes it might come handy to enable logging and debug mode:",source:"@site/versioned_docs/version-2.7/debugging.md",slug:"/debugging",permalink:"/docs/2.7/debugging",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/debugging.md",version:"2.7",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1618443405,formattedLastUpdatedAt:"4/14/2021",sidebar:"version-2.7/docs",previous:{title:"Metadata cache",permalink:"/docs/2.7/metadata-cache"},next:{title:"Schema generator",permalink:"/docs/2.7/schema-generator"}},u=[],s={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For development purposes it might come handy to enable logging and debug mode:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  logger: console.log.bind(console),\n  debug: true,\n});\n")),Object(a.b)("p",null,"By doing this ",Object(a.b)("inlineCode",{parentName:"p"},"MikroORM")," will start using provided logger function to dump all queries:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"[query-logger] SELECT `e0`.* FROM `author` AS `e0` WHERE `e0`.`name` = ? LIMIT ? [took 2 ms]\n[query-logger] START TRANSACTION [took 1 ms]\n[query-logger] INSERT INTO `author` (`name`, `email`, `created_at`, `updated_at`, `terms_accepted`) VALUES (?, ?, ?, ?, ?) [took 2 ms]\n[query-logger] COMMIT [took 2 ms]\n")),Object(a.b)("p",null,"It is also useful for debugging problems with entity discovery, as you will see information\nabout every processed entity:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"ORM entity discovery started\n- processing entity Author\n- using cached metadata for entity Author\n- processing entity Book\n- processing entity BookTag\n- entity discovery finished after 13 ms\n")))}l.isMDXComponent=!0},1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,m=p["".concat(i,".").concat(g)]||p[g]||d[g]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);