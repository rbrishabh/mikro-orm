(window.webpackJsonp=window.webpackJsonp||[]).push([[653],{711:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(1),a=n(6),r=(n(0),n(804)),o={title:"Usage with MongoDB"},l={unversionedId:"usage-with-mongo",id:"version-3.6/usage-with-mongo",isDocsHomePage:!1,title:"Usage with MongoDB",description:"To use mikro-orm with mongo database, do not forget to install mongodb dependency. As MongoDriver",source:"@site/versioned_docs/version-3.6/usage-with-mongo.md",slug:"/usage-with-mongo",permalink:"/docs/3.6/usage-with-mongo",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/usage-with-mongo.md",version:"3.6",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1603661699,sidebar:"version-3.6/docs",previous:{title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",permalink:"/docs/3.6/usage-with-sql"},next:{title:"Using MikroORM with NestJS framework",permalink:"/docs/3.6/usage-with-nestjs"}},s=[{value:"Defining entity",id:"defining-entity",children:[]},{value:"ObjectId and string id duality",id:"objectid-and-string-id-duality",children:[]},{value:"ManyToMany collections with inlined pivot array",id:"manytomany-collections-with-inlined-pivot-array",children:[]},{value:"Transactions",id:"transactions",children:[]},{value:"Indexes",id:"indexes",children:[]},{value:"Native collection methods",id:"native-collection-methods",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To use ",Object(r.b)("inlineCode",{parentName:"p"},"mikro-orm")," with mongo database, do not forget to install ",Object(r.b)("inlineCode",{parentName:"p"},"mongodb")," dependency. As ",Object(r.b)("inlineCode",{parentName:"p"},"MongoDriver"),"\nis the default one, you do not need to provide it."),Object(r.b)("p",null,"Then call ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entitiesDirs: ['entities'], // relative to `baseDir`\n  dbName: 'my-db-name',\n  clientUrl: '...',\n  type: 'mongo',\n});\n")),Object(r.b)("h2",{id:"defining-entity"},"Defining entity"),Object(r.b)("p",null,"When defining entity, do not forget to define primary key like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"@PrimaryKey()\n_id: ObjectId;\n\n@SerializedPrimaryKey()\nid!: string; // won't be saved in the database\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Only ",Object(r.b)("inlineCode",{parentName:"p"},"_id: ObjectId")," will be saved in the database. ",Object(r.b)("inlineCode",{parentName:"p"},"id: string")," is virtual and is\nalso optional. ")),Object(r.b)("h2",{id:"objectid-and-string-id-duality"},"ObjectId and string id duality"),Object(r.b)("p",null,"Every entity has both ",Object(r.b)("inlineCode",{parentName:"p"},"ObjectId")," and ",Object(r.b)("inlineCode",{parentName:"p"},"string")," id available, also all methods of ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager"),"\nand ",Object(r.b)("inlineCode",{parentName:"p"},"EntityRepository")," supports querying by both of them. "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const author = orm.em.getReference('...id...');\nconsole.log(author.id);  // returns '...id...'\nconsole.log(author._id); // returns ObjectId('...id...')\n\n// all of those will return the same results\nconst article = '...article id...'; // string id\nconst book = '...book id...'; // string id\nconst repo = orm.em.getRepository(Author);\nconst foo1 = await repo.find({ id: { $in: [article] }, favouriteBook: book });\nconst bar1 = await repo.find({ id: { $in: [new ObjectId(article)] }, favouriteBook: new ObjectId(book) });\nconst foo2 = await repo.find({ _id: { $in: [article] }, favouriteBook: book });\nconst bar2 = await repo.find({ _id: { $in: [new ObjectId(article)] }, favouriteBook: new ObjectId(book) });\n")),Object(r.b)("h2",{id:"manytomany-collections-with-inlined-pivot-array"},"ManyToMany collections with inlined pivot array"),Object(r.b)("p",null,"As opposed to SQL drivers that use pivot tables, in mongo we can leverage available array type\nto store array of collection items (identifiers). This approach has two main benefits:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Collection is stored on owning side entity, so we know how many items are there even before\ninitializing the collection."),Object(r.b)("li",{parentName:"ol"},"As there are no pivot tables, resulting database queries are much simpler.")),Object(r.b)("h2",{id:"transactions"},"Transactions"),Object(r.b)("p",null,"Starting with v3.4, MongoDB driver supports transactions. To use transactions, there\nare several things you need to respect:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"you need to use replica set (see ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"https://github.com/vkarpov15/run-rs"}),"run-rs"),")"),Object(r.b)("li",{parentName:"ul"},"implicit transactions are disabled by default",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"use ",Object(r.b)("inlineCode",{parentName:"li"},"implicitTransactions: true")," to enable them globally"),Object(r.b)("li",{parentName:"ul"},"or use explicit transaction demarcation via ",Object(r.b)("inlineCode",{parentName:"li"},"em.transactional()")))),Object(r.b)("li",{parentName:"ul"},"you need to explicitly create all collections before working with them",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"use ",Object(r.b)("inlineCode",{parentName:"li"},"em.getDriver().createCollections()")," method to do so")))),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-sh"}),"# first create replica set\n$ run-rs -v 4.2.3\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"import { MikroORM } from 'mikro-orm';\nimport { MongoDriver } from 'mikro-orm/dist/drivers/MongoDriver';\n\n// make sure to provide the MongoDriver type hint\nconst orm = await MikroORM.init<MongoDriver>({\n  entitiesDirs: ['entities'], // relative to `baseDir`\n  clientUrl: 'mongodb://localhost:27017,localhost:27018,localhost:27019/my-db-name?replicaSet=rs0',\n  type: 'mongo',\n  implicitTransactions: true, // defaults to false\n});\n\nawait orm.em.getDriver().createCollections();\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"createCollections")," method is present on the ",Object(r.b)("inlineCode",{parentName:"p"},"MongoDriver")," class only. You need\nto have the entity manager correctly typed (as ",Object(r.b)("inlineCode",{parentName:"p"},"EntityManager<MongoDriver>"),").")),Object(r.b)("h2",{id:"indexes"},"Indexes"),Object(r.b)("p",null,"Starting with v3.4, MongoDB driver supports indexes and unique constraints. You can\nuse ",Object(r.b)("inlineCode",{parentName:"p"},"@Index()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"@Unique()")," as described in ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/3.6/defining-entities#indexes"}),"Defining Entities section"),".\nTo automatically create new indexes when initializing the ORM, you need to enable\n",Object(r.b)("inlineCode",{parentName:"p"},"ensureIndexes")," option. "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"const orm = await MikroORM.init({\n  entitiesDirs: ['entities'], // relative to `baseDir`\n  dbName: 'my-db-name',\n  type: 'mongo',\n  ensureIndexes: true, // defaults to false\n});\n")),Object(r.b)("p",null,"Alternatively you can call ",Object(r.b)("inlineCode",{parentName:"p"},"ensureIndexes()")," method on the ",Object(r.b)("inlineCode",{parentName:"p"},"MongoDriver"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"await orm.em.getDriver().ensureIndexes();\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can pass additional index/unique options via ",Object(r.b)("inlineCode",{parentName:"p"},"options")," parameter:"),Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("inlineCode",{parentName:"p"},"@Unique({ options: { partialFilterExpression: { name: { $exists: true } } }})"))),Object(r.b)("h2",{id:"native-collection-methods"},"Native collection methods"),Object(r.b)("p",null,"Sometimes you need to perform some bulk operation, or you just want to populate your\ndatabase with initial fixtures. Using ORM for such operations can bring unnecessary\nboilerplate code. In this case, you can use one of ",Object(r.b)("inlineCode",{parentName:"p"},"nativeInsert/nativeUpdate/nativeDelete"),"\nmethods:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"em.nativeInsert<T extends AnyEntity>(entityName: string, data: any): Promise<IPrimaryKey>;\nem.nativeUpdate<T extends AnyEntity>(entityName: string, where: FilterQuery<T>, data: any): Promise<number>;\nem.nativeDelete<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | any): Promise<number>;\n")),Object(r.b)("p",null,"Those methods execute native driver methods like Mongo's ",Object(r.b)("inlineCode",{parentName:"p"},"insertOne/updateMany/deleteMany")," collection methods respectively.\nThis is common interface for all drivers, so for MySQL driver, it will fire native SQL queries.\nKeep in mind that they do not hydrate results to entities, and they do not trigger lifecycle hooks. "),Object(r.b)("p",null,"They are also available as ",Object(r.b)("inlineCode",{parentName:"p"},"EntityRepository")," shortcuts:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"EntityRepository.nativeInsert(data: any): Promise<IPrimaryKey>;\nEntityRepository.nativeUpdate(where: FilterQuery<T>, data: any): Promise<number>;\nEntityRepository.nativeDelete(where: FilterQuery<T> | any): Promise<number>;\n")),Object(r.b)("p",null,"There is also shortcut for calling ",Object(r.b)("inlineCode",{parentName:"p"},"aggregate")," method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-typescript"}),"em.aggregate(entityName: string, pipeline: any[]): Promise<any[]>;\nEntityRepository.aggregate(pipeline: any[]): Promise<any[]>;\n")))}b.isMDXComponent=!0},804:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=i,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);