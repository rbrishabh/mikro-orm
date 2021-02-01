(window.webpackJsonp=window.webpackJsonp||[]).push([[1120],{1190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(3),a=n(7),r=(n(0),n(1253)),i={title:"EntityHelper and Decorated Entities",sidebar_label:"Updating Entity Values"},p={unversionedId:"entity-helper",id:"version-3.6/entity-helper",isDocsHomePage:!1,title:"EntityHelper and Decorated Entities",description:"Updating Entity Values with entity.assign()",source:"@site/versioned_docs/version-3.6/entity-helper.md",slug:"/entity-helper",permalink:"/docs/3.6/entity-helper",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/entity-helper.md",version:"3.6",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612166900,sidebar_label:"Updating Entity Values",sidebar:"version-3.6/docs",previous:{title:"Serializing",permalink:"/docs/3.6/serializing"},next:{title:"Property Validation",permalink:"/docs/3.6/property-validation"}},l=[{value:"Updating Entity Values with <code>entity.assign()</code>",id:"updating-entity-values-with-entityassign",children:[]},{value:"<code>WrappedEntity</code> and <code>wrap()</code> helper",id:"wrappedentity-and-wrap-helper",children:[]}],c={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"updating-entity-values-with-entityassign"},"Updating Entity Values with ",Object(r.b)("inlineCode",{parentName:"h2"},"entity.assign()")),Object(r.b)("p",null,"When you want to update entity based on user input, you will usually have just plain\nstring ids of entity relations as user input. Normally you would need to use\n",Object(r.b)("inlineCode",{parentName:"p"},"em.getReference()")," to create references from each id first, and then\nuse those references to update entity relations:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"const jon = new Author('Jon Snow', 'snow@wall.st');\nconst book = new Book('Book', jon);\nbook.author = orm.em.getReference<Author>(Author, '...id...');\n")),Object(r.b)("p",null,"Same result can be easily achieved with ",Object(r.b)("inlineCode",{parentName:"p"},"entity.assign()"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { wrap } from 'mikro-orm';\n\nwrap(book).assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n});\nconsole.log(book.title); // 'Better Book 1'\nconsole.log(book.author); // instance of Author with id: '...id...'\nconsole.log(book.author.id); // '...id...'\n")),Object(r.b)("p",null,"To use ",Object(r.b)("inlineCode",{parentName:"p"},"entity.assign()")," on not managed entities, you need to provide ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager"),"\ninstance explicitly: "),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { wrap } from 'mikro-orm';\n\nconst book = new Book();\nwrap(book).assign({ \n  title: 'Better Book 1', \n  author: '...id...',\n}, { em: orm.em });\n")),Object(r.b)("p",null,"By default, ",Object(r.b)("inlineCode",{parentName:"p"},"entity.assign(data)")," behaves same way as ",Object(r.b)("inlineCode",{parentName:"p"},"Object.assign(entity, data)"),",\ne.g. it does not merge things recursively. To enable deep merging of object properties,\nuse second parameter to enable ",Object(r.b)("inlineCode",{parentName:"p"},"mergeObjects")," flag:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"import { wrap } from 'mikro-orm';\n\nbook.meta = { foo: 1, bar: 2 };\n\nwrap(book).assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n\nwrap(book).assign({ meta: { foo: 4 } });\nconsole.log(book.meta); // { foo: 4 }\n")),Object(r.b)("h2",{id:"wrappedentity-and-wrap-helper"},Object(r.b)("inlineCode",{parentName:"h2"},"WrappedEntity")," and ",Object(r.b)("inlineCode",{parentName:"h2"},"wrap()")," helper"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"IWrappedEntity")," is interface that defines helper methods as well as some internal\nproperties provided by the ORM:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"interface IWrappedEntity<T, PK extends keyof T> {\n  isInitialized(): boolean;\n  populated(populated?: boolean): void;\n  init(populated?: boolean, lockMode?: LockMode): Promise<this>;\n  toReference(): IdentifiedReference<T, PK>;\n  toObject(ignoreFields?: string[]): Dictionary;\n  toJSON(...args: any[]): Dictionary;\n  assign(data: any, options?: AssignOptions | boolean): this;\n  __uuid: string;\n  __meta: EntityMetadata;\n  __em: EntityManager;\n  __initialized?: boolean;\n  __populated: boolean;\n  __lazyInitialized: boolean;\n  __primaryKey: T[PK] & Primary<T>;\n  __serializedPrimaryKey: string & keyof T;\n}\n")),Object(r.b)("p",null,"Users can choose whether they are fine with polluting the entity interface with\nthose additional methods and properties, or they want to keep the interface clean\nand use the ",Object(r.b)("inlineCode",{parentName:"p"},"wrap(entity)")," helper method instead to access them. "),Object(r.b)("p",null,"To keep all methods available on the entity, you can use interface merging with\n",Object(r.b)("inlineCode",{parentName:"p"},"WrappedEntity<T, PK>")," that both extends ",Object(r.b)("inlineCode",{parentName:"p"},"AnyEntity<T, PK>")," and defines all those methods."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"@Entity()\nexport class Book { ... }\nexport interface Book extends WrappedEntity<Book, 'id'> { }\n")),Object(r.b)("p",null,"Then you can work with those methods directly:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-typescript"}),"book.meta = { foo: 1, bar: 2 };\nbook.assign({ meta: { foo: 3 } }, { mergeObjects: true });\nconsole.log(book.meta); // { foo: 3, bar: 2 }\n")))}s.isMDXComponent=!0},1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||r;return n?a.a.createElement(m,p(p({ref:t},c),{},{components:n})):a.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);