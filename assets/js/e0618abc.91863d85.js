(window.webpackJsonp=window.webpackJsonp||[]).push([[844],{1052:function(e,r,t){"use strict";t.d(r,"a",(function(){return c})),t.d(r,"b",(function(){return f}));var n=t(0),i=t.n(n);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),d=function(e){var r=i.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=d(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},p=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,u=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(t),p=n,f=c["".concat(a,".").concat(p)]||c[p]||y[p]||u;return t?i.a.createElement(f,o(o({ref:r},s),{},{components:t})):i.a.createElement(f,o({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var u=t.length,a=new Array(u);a[0]=p;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var s=2;s<u;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},917:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return o})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return d}));var n=t(3),i=t(8),u=(t(0),t(1052)),a={title:"Query Builder API"},o={unversionedId:"query-builder-api",id:"query-builder-api",isDocsHomePage:!1,title:"Query Builder API",description:"QueryBuilder provides fluent interface with these methods:",source:"@site/docs/query-builder-api.md",slug:"/query-builder-api",permalink:"/docs/next/query-builder-api",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/query-builder-api.md",version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1615917834,formattedLastUpdatedAt:"3/16/2021",sidebar:"docs",previous:{title:"EntityRepository API",permalink:"/docs/next/repositories-api"},next:{title:"Decorators",permalink:"/docs/next/decorators"}},l=[],s={toc:l};function d(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(u.b)("p",null,Object(u.b)("inlineCode",{parentName:"p"},"QueryBuilder")," provides fluent interface with these methods:"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-typescript"},"select(fields: Field<T> | Field<T>[], distinct?: boolean): QueryBuilder;\naddSelect(fields: string | string[]): QueryBuilder;\ninsert(data: any): QueryBuilder;\nupdate(data: any): QueryBuilder;\ndelete(cond?: QBFilterQuery): QueryBuilder;\ntruncate(): QueryBuilder;\ncount(field?: string | string[], distinct?: boolean): QueryBuilder;\njoin(field: string, alias: string, cond?: QBFilterQuery, type?: 'leftJoin' | 'innerJoin' | 'pivotJoin', path?: string): QueryBuilder;\nleftJoin(field: string, alias: string, cond?: QBFilterQuery): QueryBuilder;\nwithSubQuery(subQuery: KnexQueryBuilder, alias: string): QueryBuilder;\nwhere(cond: QBFilterQuery<T>, operator?: keyof typeof GroupOperator): QueryBuilder;\nwhere(cond: string, params?: any[], operator?: keyof typeof GroupOperator): QueryBuilder;\nandWhere(cond: QBFilterQuery<T>): QueryBuilder;\nandWhere(cond: string, params?: any[]): QueryBuilder;\norWhere(cond: QBFilterQuery<T>): QueryBuilder;\norWhere(cond: string, params?: any[]): QueryBuilder;\norderBy(orderBy: QueryOrderMap): QueryBuilder;\ngroupBy(fields: (string | keyof T) | (string | keyof T)[]): QueryBuilder;\nhaving(cond?: QBFilterQuery | string, params?: any[]): QueryBuilder;\nraw(sql: string): Raw;\nlimit(limit?: number, offset?: number): QueryBuilder;\noffset(offset?: number): QueryBuilder;\nwithSchema(schema?: string): QueryBuilder;\nsetLockMode(mode?: LockMode): QueryBuilder;\nsetFlag(flag: QueryFlag): QueryBuilder;\nunsetFlag(flag: QueryFlag): QueryBuilder;\ngetKnexQuery(): KnexQueryBuilder;\ngetQuery(): string;\ngetParams(): readonly Value[];\ngetAliasForJoinPath(path: string): string | undefined;\ngetNextAlias(prefix?: string): string;\nexecute<U = any>(method?: 'all' | 'get' | 'run', mapResults?: boolean): Promise<U>;\ngetResult(): Promise<T[]>;\ngetResultList(): Promise<T[]>;\ngetSingleResult(): Promise<T | null>;\n/**\n * Returns knex instance with sub-query aliased with given alias.\n * You can provide `EntityName.propName` as alias, then the field name will be used based on the metadata\n */\nas(alias: string): KnexQueryBuilder;\nclone(): QueryBuilder<T>;\ngetKnex(): KnexQueryBuilder;\n")))}d.isMDXComponent=!0}}]);