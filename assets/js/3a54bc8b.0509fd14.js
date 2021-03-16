(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1052:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,d=u["".concat(i,".").concat(b)]||u[b]||m[b]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},285:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(1052)),i={title:"Using Multiple Schemas"},c={unversionedId:"multiple-schemas",id:"version-4.3/multiple-schemas",isDocsHomePage:!1,title:"Using Multiple Schemas",description:"In MySQL and PostgreSQL is is possible to define your entities in multiple schemas. In MySQL",source:"@site/versioned_docs/version-4.3/multiple-schemas.md",slug:"/multiple-schemas",permalink:"/docs/4.3/multiple-schemas",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/multiple-schemas.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1615917834,formattedLastUpdatedAt:"3/16/2021",sidebar:"version-4.3/docs",previous:{title:"Using Entity Constructors",permalink:"/docs/4.3/entity-constructors"},next:{title:"Using native BigInt PKs (MySQL and PostgreSQL)",permalink:"/docs/4.3/using-bigint-pks"}},s=[],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In MySQL and PostgreSQL is is possible to define your entities in multiple schemas. In MySQL\nterminology, it is called database, but from implementation point of view, it is a schema. "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"To use multiple schemas, your connection needs to have access to all of them (multiple\nconnections are not supported).")),Object(a.b)("p",null,"All you need to do is simply define the table name including schema name in ",Object(a.b)("inlineCode",{parentName:"p"},"collection")," option:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity({ tableName: 'first_schema.foo' })\nexport class Foo { ... }\n\n@Entity({ tableName: 'second_schema.bar' })\nexport class Bar { ... }\n")),Object(a.b)("p",null,"Then use those entities as usual. Resulting SQL queries will use this ",Object(a.b)("inlineCode",{parentName:"p"},"tableName")," value as a\ntable name so as long as your connection has access to given schema, everything should work\nas expected."),Object(a.b)("p",null,"You can also query for entity in specific schema via ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager"),", ",Object(a.b)("inlineCode",{parentName:"p"},"EntityRepository")," or\n",Object(a.b)("inlineCode",{parentName:"p"},"QueryBuilder"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const user = await em.findOne(User, { ... }, { schema: 'client-123' });\n")),Object(a.b)("p",null,"To create entity in specific schema, you will need to use ",Object(a.b)("inlineCode",{parentName:"p"},"QueryBuilder"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = em.createQueryBuilder(User);\nawait qb.insert({ email: 'foo@bar.com' }).withSchema('client-123');\n")))}p.isMDXComponent=!0}}]);