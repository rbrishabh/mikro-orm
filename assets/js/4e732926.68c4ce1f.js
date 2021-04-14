(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=i,m=b["".concat(r,".").concat(u)]||b[u]||d[u]||a;return n?o.a.createElement(m,l(l({ref:t},s),{},{components:n})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},386:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var i=n(3),o=n(8),a=(n(0),n(1110)),r={title:"Usage with MongoDB"},l={unversionedId:"usage-with-mongo",id:"version-4.0/usage-with-mongo",isDocsHomePage:!1,title:"Usage with MongoDB",description:"To use mikro-orm with mongo database, do not forget to install mongodb dependency. As MongoDriver",source:"@site/versioned_docs/version-4.0/usage-with-mongo.md",slug:"/usage-with-mongo",permalink:"/docs/4.0/usage-with-mongo",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.0/usage-with-mongo.md",version:"4.0",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1618443405,formattedLastUpdatedAt:"4/14/2021",sidebar:"version-4.0/docs",previous:{title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",permalink:"/docs/4.0/usage-with-sql"},next:{title:"Quick Start",permalink:"/docs/4.0/quick-start"}},c=[{value:"Defining entity",id:"defining-entity",children:[]},{value:"ObjectId and string id duality",id:"objectid-and-string-id-duality",children:[]},{value:"ManyToMany collections with inlined pivot array",id:"manytomany-collections-with-inlined-pivot-array",children:[]},{value:"Transactions",id:"transactions",children:[]},{value:"Indexes",id:"indexes",children:[]},{value:"Native collection methods",id:"native-collection-methods",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To use ",Object(a.b)("inlineCode",{parentName:"p"},"mikro-orm")," with mongo database, do not forget to install ",Object(a.b)("inlineCode",{parentName:"p"},"mongodb")," dependency. As ",Object(a.b)("inlineCode",{parentName:"p"},"MongoDriver"),"\nis the default one, you do not need to provide it."),Object(a.b)("p",null,"Then call ",Object(a.b)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: [Author, Book, ...],\n  dbName: 'my-db-name',\n  clientUrl: '...',\n  type: 'mongo',\n});\n")),Object(a.b)("h2",{id:"defining-entity"},"Defining entity"),Object(a.b)("p",null,"When defining entity, do not forget to define primary key like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"@PrimaryKey()\n_id: ObjectId;\n\n@SerializedPrimaryKey()\nid!: string; // won't be saved in the database\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Only ",Object(a.b)("inlineCode",{parentName:"p"},"_id: ObjectId")," will be saved in the database. ",Object(a.b)("inlineCode",{parentName:"p"},"id: string")," is virtual and is\nalso optional. ")),Object(a.b)("h2",{id:"objectid-and-string-id-duality"},"ObjectId and string id duality"),Object(a.b)("p",null,"Every entity has both ",Object(a.b)("inlineCode",{parentName:"p"},"ObjectId")," and ",Object(a.b)("inlineCode",{parentName:"p"},"string")," id available, also all methods of ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager"),"\nand ",Object(a.b)("inlineCode",{parentName:"p"},"EntityRepository")," supports querying by both of them. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const author = orm.em.getReference('...id...');\nconsole.log(author.id);  // returns '...id...'\nconsole.log(author._id); // returns ObjectId('...id...')\n\n// all of those will return the same results\nconst article = '...article id...'; // string id\nconst book = '...book id...'; // string id\nconst repo = orm.em.getRepository(Author);\nconst foo1 = await repo.find({ id: { $in: [article] }, favouriteBook: book });\nconst bar1 = await repo.find({ id: { $in: [new ObjectId(article)] }, favouriteBook: new ObjectId(book) });\nconst foo2 = await repo.find({ _id: { $in: [article] }, favouriteBook: book });\nconst bar2 = await repo.find({ _id: { $in: [new ObjectId(article)] }, favouriteBook: new ObjectId(book) });\n")),Object(a.b)("h2",{id:"manytomany-collections-with-inlined-pivot-array"},"ManyToMany collections with inlined pivot array"),Object(a.b)("p",null,"As opposed to SQL drivers that use pivot tables, in mongo we can leverage available array type\nto store array of collection items (identifiers). This approach has two main benefits:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Collection is stored on owning side entity, so we know how many items are there even before\ninitializing the collection."),Object(a.b)("li",{parentName:"ol"},"As there are no pivot tables, resulting database queries are much simpler.")),Object(a.b)("h2",{id:"transactions"},"Transactions"),Object(a.b)("p",null,"Starting with v3.4, MongoDB driver supports transactions. To use transactions, there\nare several things you need to respect:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"you need to use replica set (see ",Object(a.b)("a",{parentName:"li",href:"https://github.com/vkarpov15/run-rs"},"run-rs"),")"),Object(a.b)("li",{parentName:"ul"},"implicit transactions are disabled by default",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"use ",Object(a.b)("inlineCode",{parentName:"li"},"implicitTransactions: true")," to enable them globally"),Object(a.b)("li",{parentName:"ul"},"or use explicit transaction demarcation via ",Object(a.b)("inlineCode",{parentName:"li"},"em.transactional()")))),Object(a.b)("li",{parentName:"ul"},"you need to explicitly create all collections before working with them",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"use ",Object(a.b)("inlineCode",{parentName:"li"},"em.getDriver().createCollections()")," method to do so")))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-sh"},"# first create replica set\n$ run-rs -v 4.2.3\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"import { MikroORM } from '@mikro-orm/core';\nimport { MongoDriver } from '@mikro-orm/mongodb';\n\n// make sure to provide the MongoDriver type hint\nconst orm = await MikroORM.init<MongoDriver>({\n  entities: [Author, Book, ...],\n  clientUrl: 'mongodb://localhost:27017,localhost:27018,localhost:27019/my-db-name?replicaSet=rs0',\n  type: 'mongo',\n  implicitTransactions: true, // defaults to false\n});\n\nawait orm.em.getDriver().createCollections();\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"createCollections")," method is present on the ",Object(a.b)("inlineCode",{parentName:"p"},"MongoDriver")," class only. You need\nto have the entity manager correctly typed (as ",Object(a.b)("inlineCode",{parentName:"p"},"EntityManager<MongoDriver>"),").")),Object(a.b)("h2",{id:"indexes"},"Indexes"),Object(a.b)("p",null,"Starting with v3.4, MongoDB driver supports indexes and unique constraints. You can\nuse ",Object(a.b)("inlineCode",{parentName:"p"},"@Index()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"@Unique()")," as described in ",Object(a.b)("a",{parentName:"p",href:"/docs/4.0/defining-entities#indexes"},"Defining Entities section"),".\nTo automatically create new indexes when initializing the ORM, you need to enable\n",Object(a.b)("inlineCode",{parentName:"p"},"ensureIndexes")," option. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: [Author, Book, ...],\n  dbName: 'my-db-name',\n  type: 'mongo',\n  ensureIndexes: true, // defaults to false\n});\n")),Object(a.b)("p",null,"Alternatively you can call ",Object(a.b)("inlineCode",{parentName:"p"},"ensureIndexes()")," method on the ",Object(a.b)("inlineCode",{parentName:"p"},"MongoDriver"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"await orm.em.getDriver().ensureIndexes();\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can pass additional index/unique options via ",Object(a.b)("inlineCode",{parentName:"p"},"options")," parameter:"),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"@Unique({ options: { partialFilterExpression: { name: { $exists: true } } }})"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can also create text indexes by passing ",Object(a.b)("inlineCode",{parentName:"p"},"type")," parameter:"),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"@Index({ properties: ['name', 'caption'], type: 'text' })"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"If you provide only ",Object(a.b)("inlineCode",{parentName:"p"},"options")," in the index definition, it will be used as is,\nthis allows to define any kind of index:"),Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("inlineCode",{parentName:"p"},"@Index({ options: { point: '2dsphere', title: -1 } })")," ")),Object(a.b)("h2",{id:"native-collection-methods"},"Native collection methods"),Object(a.b)("p",null,"Sometimes you need to perform some bulk operation, or you just want to populate your\ndatabase with initial fixtures. Using ORM for such operations can bring unnecessary\nboilerplate code. In this case, you can use one of ",Object(a.b)("inlineCode",{parentName:"p"},"nativeInsert/nativeUpdate/nativeDelete"),"\nmethods:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"em.nativeInsert<T extends AnyEntity>(entityName: string, data: any): Promise<IPrimaryKey>;\nem.nativeUpdate<T extends AnyEntity>(entityName: string, where: FilterQuery<T>, data: any): Promise<number>;\nem.nativeDelete<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | any): Promise<number>;\n")),Object(a.b)("p",null,"Those methods execute native driver methods like Mongo's ",Object(a.b)("inlineCode",{parentName:"p"},"insertOne/updateMany/deleteMany")," collection methods respectively.\nThis is common interface for all drivers, so for MySQL driver, it will fire native SQL queries.\nKeep in mind that they do not hydrate results to entities, and they do not trigger lifecycle hooks. "),Object(a.b)("p",null,"They are also available as ",Object(a.b)("inlineCode",{parentName:"p"},"EntityRepository")," shortcuts:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"EntityRepository.nativeInsert(data: any): Promise<IPrimaryKey>;\nEntityRepository.nativeUpdate(where: FilterQuery<T>, data: any): Promise<number>;\nEntityRepository.nativeDelete(where: FilterQuery<T> | any): Promise<number>;\n")),Object(a.b)("p",null,"There is also shortcut for calling ",Object(a.b)("inlineCode",{parentName:"p"},"aggregate")," method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"em.aggregate(entityName: string, pipeline: any[]): Promise<any[]>;\nEntityRepository.aggregate(pipeline: any[]): Promise<any[]>;\n")))}p.isMDXComponent=!0}}]);