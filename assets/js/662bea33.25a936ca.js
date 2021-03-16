(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{1052:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),b=r,y=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?a.a.createElement(y,l(l({ref:t},u),{},{components:n})):a.a.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},454:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),a=n(8),i=(n(0),n(1052)),o={title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",sidebar_label:"Usage with SQL Drivers"},l={unversionedId:"usage-with-sql",id:"version-4.4/usage-with-sql",isDocsHomePage:!1,title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",description:"To use mikro-orm with MySQL database, do not forget to install mysql2 dependency and set",source:"@site/versioned_docs/version-4.4/usage-with-sql.md",slug:"/usage-with-sql",permalink:"/docs/usage-with-sql",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/usage-with-sql.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1615917834,formattedLastUpdatedAt:"3/16/2021",sidebar_label:"Usage with SQL Drivers",sidebar:"version-4.4/docs",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Usage with MongoDB",permalink:"/docs/usage-with-mongo"}},s=[{value:"Custom driver",id:"custom-driver",children:[]},{value:"Schema",id:"schema",children:[]},{value:"ManyToMany collections with pivot tables",id:"manytomany-collections-with-pivot-tables",children:[]},{value:"Using QueryBuilder to execute native SQL queries",id:"using-querybuilder-to-execute-native-sql-queries",children:[]},{value:"Transactions",id:"transactions",children:[]},{value:"LIKE Queries",id:"like-queries",children:[]},{value:"Native Collection Methods",id:"native-collection-methods",children:[]}],u={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To use ",Object(i.b)("inlineCode",{parentName:"p"},"mikro-orm")," with MySQL database, do not forget to install ",Object(i.b)("inlineCode",{parentName:"p"},"mysql2")," dependency and set\nthe type option to ",Object(i.b)("inlineCode",{parentName:"p"},"mysql")," when initializing ORM."),Object(i.b)("p",null,"Similarly for SQLite install ",Object(i.b)("inlineCode",{parentName:"p"},"sqlite")," dependency and provide ",Object(i.b)("inlineCode",{parentName:"p"},"sqlite")," database type. For\nPostgreSQL install ",Object(i.b)("inlineCode",{parentName:"p"},"pg")," and provide ",Object(i.b)("inlineCode",{parentName:"p"},"postgresql")," type."),Object(i.b)("p",null,"Then call ",Object(i.b)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: [Author, Book, ...],\n  dbName: 'my-db-name',\n  type: 'mysql', // or 'sqlite' or 'postgresql' or 'mariadb'\n});\n")),Object(i.b)("h2",{id:"custom-driver"},"Custom driver"),Object(i.b)("p",null,"If you want to use database that is not currently supported, you can implement your own driver.\nMore information about how to create one can be ",Object(i.b)("a",{parentName:"p",href:"/docs/custom-driver"},"found here"),". Then provide the\ndriver class via ",Object(i.b)("inlineCode",{parentName:"p"},"driver")," configuration option: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { MyCustomDriver } from './MyCustomDriver.ts';\n\nconst orm = await MikroORM.init({\n  entities: [Author, Book, ...],\n  dbName: 'my-db-name',\n  driver: MyCustomDriver, // provide the class, not just its name\n});\n")),Object(i.b)("h2",{id:"schema"},"Schema"),Object(i.b)("p",null,"Currently you will need to maintain the database schema yourself. For initial dump, you can\nuse ",Object(i.b)("a",{parentName:"p",href:"/docs/schema-generator"},Object(i.b)("inlineCode",{parentName:"a"},"SchemaGenerator")," helper"),".  "),Object(i.b)("h2",{id:"manytomany-collections-with-pivot-tables"},"ManyToMany collections with pivot tables"),Object(i.b)("p",null,"As opposed to ",Object(i.b)("inlineCode",{parentName:"p"},"MongoDriver"),", in MySQL we use pivot tables to handle ",Object(i.b)("inlineCode",{parentName:"p"},"ManyToMany")," relations:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `publisher_to_test` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `publisher_id` int(11) DEFAULT NULL,\n  `test_id` int(11) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),Object(i.b)("p",null,"You can adjust the name of pivot table via ",Object(i.b)("inlineCode",{parentName:"p"},"pivotTable")," option in ",Object(i.b)("inlineCode",{parentName:"p"},"@ManyToMany")," decorator\ndefined on owning side: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"// for unidirectional\n@ManyToMany({ entity: () => Test, owner: true, pivotTable: 'publisher2test' })\ntests = new Collection<Test>(this);\n\n// for bidirectional\n@ManyToMany({ entity: () => BookTag, inversedBy: 'books', pivotTable: 'book2tag' })\ntags = new Collection<BookTag>(this);\n")),Object(i.b)("h2",{id:"using-querybuilder-to-execute-native-sql-queries"},"Using QueryBuilder to execute native SQL queries"),Object(i.b)("p",null,"When you need to execute some SQL query without all the ORM stuff involved, you can either\ncompose the query yourself, or use the ",Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder")," helper to construct the query for you:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Author);\nqb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });\n\nconsole.log(qb.getQuery());\n// 'UPDATE `publisher2` SET `name` = ?, `type` = ? WHERE `id` = ? AND `type` = ?'\n\nconsole.log(qb.getParams());\n// ['test 123', PublisherType.GLOBAL, 123, PublisherType.LOCAL]\n\n// run the query\nconst res1 = await qb.execute();\n\n// or run query without using QueryBuilder\nconst driver = orm.em.getDriver();\nconst res2 = await driver.execute('SELECT ? + ?', [1, 2]);\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder")," provides fluent interface with these methods:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"QueryBuilder.select(fields: string | string[], distinct?: boolean): QueryBuilder;\nQueryBuilder.insert(data: any): QueryBuilder;\nQueryBuilder.update(data: any): QueryBuilder;\nQueryBuilder.delete(cond: any): QueryBuilder;\nQueryBuilder.count(fields: string | string[], distinct?: boolean): QueryBuilder;\nQueryBuilder.join(field: string, alias?: string): QueryBuilder;\nQueryBuilder.leftJoin(field: string, alias?: string): QueryBuilder;\nQueryBuilder.where(cond: any, operator: '$and' | '$or'): QueryBuilder;\nQueryBuilder.andWhere(cond: any): QueryBuilder;\nQueryBuilder.orWhere(cond: any): QueryBuilder;\nQueryBuilder.groupBy(fields: string | string[]): QueryBuilder;\nQueryBuilder.having(cond: any): QueryBuilder;\nQueryBuilder.populate(populate: string[]): QueryBuilder;\nQueryBuilder.limit(limit: number, offset?: number): QueryBuilder;\nQueryBuilder.offset(offset: number): QueryBuilder;\nQueryBuilder.getQuery(): string;\nQueryBuilder.getParams(): any;\nQueryBuilder.clone(): QueryBuilder;\n")),Object(i.b)("p",null,"For more examples of how to work with ",Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder"),", take a look at ",Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder")," tests in\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/QueryBuilder.test.ts"},Object(i.b)("inlineCode",{parentName:"a"},"tests/QueryBuilder.test.ts")),"."),Object(i.b)("h2",{id:"transactions"},"Transactions"),Object(i.b)("p",null,"When you call ",Object(i.b)("inlineCode",{parentName:"p"},"em.flush()"),", all computed changes are queried ",Object(i.b)("a",{parentName:"p",href:"/docs/unit-of-work"},"inside a database\ntransaction")," by default, so you do not have to handle transactions manually. "),Object(i.b)("p",null,"When you need to explicitly handle the transaction, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"em.transactional(cb)"),"\nto run callback in transaction. It will provide forked ",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager")," as a parameter\nwith clear isolated identity map - please use that to make changes. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"// if an error occurs inside the callback, all db queries from inside the callback will be rolled back\nawait orm.em.transactional(async (em: EntityManager) => {\n  const god = new Author('God', 'hello@heaven.god');\n  await em.persistAndFlush(god);\n});\n")),Object(i.b)("h2",{id:"like-queries"},"LIKE Queries"),Object(i.b)("p",null,"SQL supports LIKE queries via native JS regular expressions:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"const author1 = new Author2('Author 1', 'a1@example.com');\nconst author2 = new Author2('Author 2', 'a2@example.com');\nconst author3 = new Author2('Author 3', 'a3@example.com');\nawait orm.em.persistAndFlush([author1, author2, author3]);\n\n// finds authors with email like '%exa%le.c_m'\nconst authors = await orm.em.find(Author2, { email: /exa.*le\\.c.m$/ }); \nconsole.log(authors); // all 3 authors found\n")),Object(i.b)("h2",{id:"native-collection-methods"},"Native Collection Methods"),Object(i.b)("p",null,"Sometimes you need to perform some bulk operation, or you just want to populate your\ndatabase with initial fixtures. Using ORM for such operations can bring unnecessary\nboilerplate code. In this case, you can use one of ",Object(i.b)("inlineCode",{parentName:"p"},"nativeInsert/nativeUpdate/nativeDelete"),"\nmethods:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"em.nativeInsert<T extends AnyEntity>(entityName: string, data: any): Promise<IPrimaryKey>;\nem.nativeUpdate<T extends AnyEntity>(entityName: string, where: FilterQuery<T>, data: any): Promise<number>;\nem.nativeDelete<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | any): Promise<number>;\n")),Object(i.b)("p",null,"Those methods execute native SQL queries generated via ",Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder")," based on entity\nmetadata. Keep in mind that they do not hydrate results to entities, and they do not\ntrigger lifecycle hooks. "),Object(i.b)("p",null,"They are also available as ",Object(i.b)("inlineCode",{parentName:"p"},"EntityRepository")," shortcuts:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"EntityRepository.nativeInsert(data: any): Promise<IPrimaryKey>;\nEntityRepository.nativeUpdate(where: FilterQuery<T>, data: any): Promise<number>;\nEntityRepository.nativeDelete(where: FilterQuery<T> | any): Promise<number>;\n")),Object(i.b)("p",null,"Additionally there is ",Object(i.b)("inlineCode",{parentName:"p"},"execute()")," method that supports executing raw SQL queries or ",Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder"),"\ninstances. To create ",Object(i.b)("inlineCode",{parentName:"p"},"QueryBuilder"),", you can use ",Object(i.b)("inlineCode",{parentName:"p"},"createQueryBuilder()")," factory method on both\n",Object(i.b)("inlineCode",{parentName:"p"},"EntityManager")," and ",Object(i.b)("inlineCode",{parentName:"p"},"EntityRepository")," classes: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"const qb = em.createQueryBuilder('Author');\nqb.select('*').where({ id: { $in: [...] } });\nconst res = await em.getDriver().execute(qb);\nconsole.log(res); // unprocessed result of underlying database driver\n")))}c.isMDXComponent=!0}}]);