(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8536],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98742:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(74034),i=n(79973),o=(n(67294),n(3905)),a={title:"Lifecycle Hooks"},l={unversionedId:"lifecycle-hooks",id:"version-3.6/lifecycle-hooks",isDocsHomePage:!1,title:"Lifecycle Hooks",description:"You can use lifecycle hooks to run some code when entity gets persisted. You can mark any of",source:"@site/versioned_docs/version-3.6/lifecycle-hooks.md",sourceDirName:".",slug:"/lifecycle-hooks",permalink:"/docs/3.6/lifecycle-hooks",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/lifecycle-hooks.md",version:"3.6",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1622024604,formattedLastUpdatedAt:"5/26/2021",frontMatter:{title:"Lifecycle Hooks"},sidebar:"version-3.6/docs",previous:{title:"Property Validation",permalink:"/docs/3.6/property-validation"},next:{title:"Naming Strategy",permalink:"/docs/3.6/naming-strategy"}},c=[{value:"Limitations of lifecycle hooks",id:"limitations-of-lifecycle-hooks",children:[]}],s={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use lifecycle hooks to run some code when entity gets persisted. You can mark any of\nentity methods with them, you can also mark multiple methods with same hook."),(0,o.kt)("p",null,"All hooks support async methods with one exception - ",(0,o.kt)("inlineCode",{parentName:"p"},"@OnInit"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"@OnInit")," is fired when new instance of entity is created, either manually ",(0,o.kt)("inlineCode",{parentName:"p"},"em.create()"),", or\nautomatically when new entities are loaded from database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"@BeforeCreate()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@BeforeUpdate()")," is fired right before we persist the entity in database")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"@AfterCreate()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@AfterUpdate()")," is fired right after the entity is updated in database and\nmerged to identity map. Since this event entity will have reference to ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," and will be\nenabled to call ",(0,o.kt)("inlineCode",{parentName:"p"},"entity.init()")," method (including all entity references and collections).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"@BeforeDelete()")," is fired right before we delete the record from database. It is fired only when\nremoving entity or entity reference, not when deleting records by query. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"@AfterDelete()")," is fired right after the record gets deleted from database and it is unset from\nthe identity map."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"@OnInit")," is not fired when you create the entity manually via its constructor (",(0,o.kt)("inlineCode",{parentName:"p"},"new MyEntity()"),")")),(0,o.kt)("h2",{id:"limitations-of-lifecycle-hooks"},"Limitations of lifecycle hooks"),(0,o.kt)("p",null,"Hooks are executed inside the commit action of unit of work, after all change\nsets are computed. This means that it is not possible to create new entities as\nusual from inside the hook. Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"em.flush()")," from hooks will result in\nvalidation error. Calling ",(0,o.kt)("inlineCode",{parentName:"p"},"em.persist()")," can result in undefined behaviour like\nlocking errors. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("strong",{parentName:"p"},"internal")," instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," accessible under ",(0,o.kt)("inlineCode",{parentName:"p"},"wrap(this).__em")," is\nnot meant for public usage.")))}p.isMDXComponent=!0}}]);