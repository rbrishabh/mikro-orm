(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),o=s(a),O=n,j=o["".concat(c,".").concat(O)]||o[O]||m[O]||b;return a?r.a.createElement(j,p(p({ref:t},i),{},{components:a})):r.a.createElement(j,p({ref:t},i))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},284:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),b=(a(0),a(1253)),c={id:"biginttype",title:"Class: BigIntType",sidebar_label:"BigIntType"},p={unversionedId:"api/classes/biginttype",id:"version-4.3/api/classes/biginttype",isDocsHomePage:!1,title:"Class: BigIntType",description:"This type will automatically convert string values returned from the database to native JS bigints.",source:"@site/versioned_docs/version-4.3/api/classes/biginttype.md",slug:"/api/classes/biginttype",permalink:"/docs/4.3/api/classes/biginttype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/classes/biginttype.md",version:"4.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1612166900,sidebar_label:"BigIntType",sidebar:"version-4.3/API",previous:{title:"Class: BaseEntity<T, PK, P>",permalink:"/docs/4.3/api/classes/baseentity"},next:{title:"Class: BlobType",permalink:"/docs/4.3/api/classes/blobtype"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Methods",id:"methods",children:[{value:"compareAsType",id:"compareastype",children:[]},{value:"convertToDatabaseValue",id:"converttodatabasevalue",children:[]},{value:"convertToJSValue",id:"converttojsvalue",children:[]},{value:"getColumnType",id:"getcolumntype",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"getType",id:"gettype",children:[]}]}],i={toc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"This type will automatically convert string values returned from the database to native JS bigints."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/type"}),"Type"),"<","string ","|"," bigint ","|"," null ","|"," undefined, string ","|"," null ","|"," undefined>"),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"BigIntType")))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"compareastype"},"compareAsType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"compareAsType"),"(): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type"}),"Type"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type#compareastype"}),"compareAsType"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/Type.ts#L26"}),"packages/core/src/types/Type.ts:26"))),Object(b.b)("p",null,"How should the raw database values be compared? Used in ",Object(b.b)("inlineCode",{parentName:"p"},"EntityComparator"),".\nPossible values: string | number | boolean | date | any | buffer | array"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"converttodatabasevalue"},"convertToDatabaseValue"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"convertToDatabaseValue"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": string ","|"," bigint ","|"," null ","|"," undefined): string ","|"," null ","|"," undefined"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type"}),"Type"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type#converttodatabasevalue"}),"convertToDatabaseValue"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/BigIntType.ts#L10"}),"packages/core/src/types/BigIntType.ts:10"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string ","|"," bigint ","|"," null ","|"," undefined")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string ","|"," null ","|"," undefined"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"converttojsvalue"},"convertToJSValue"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"convertToJSValue"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": string ","|"," bigint ","|"," null ","|"," undefined): string ","|"," null ","|"," undefined"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type"}),"Type"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type#converttojsvalue"}),"convertToJSValue"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/BigIntType.ts#L18"}),"packages/core/src/types/BigIntType.ts:18"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string ","|"," bigint ","|"," null ","|"," undefined")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string ","|"," null ","|"," undefined"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getcolumntype"},"getColumnType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getColumnType"),"(",Object(b.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"),", ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/platform"}),"Platform"),"): string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Overrides ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type"}),"Type"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type#getcolumntype"}),"getColumnType"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/BigIntType.ts#L26"}),"packages/core/src/types/BigIntType.ts:26"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"prop")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/interfaces/entityproperty"}),"EntityProperty"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/platform"}),"Platform"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(",Object(b.b)("inlineCode",{parentName:"p"},"value"),": string ","|"," bigint ","|"," null ","|"," undefined, ",Object(b.b)("inlineCode",{parentName:"p"},"platform"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/platform"}),"Platform"),"): string ","|"," bigint ","|"," null ","|"," undefined ","|"," string ","|"," null ","|"," undefined"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type"}),"Type"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type#tojson"}),"toJSON"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/Type.ts#L34"}),"packages/core/src/types/Type.ts:34"))),Object(b.b)("p",null,"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default uses the runtime value."),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"value")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string ","|"," bigint ","|"," null ","|"," undefined")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"platform")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/platform"}),"Platform"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," string ","|"," bigint ","|"," null ","|"," undefined ","|"," string ","|"," null ","|"," undefined"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettype"},"getType"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("inlineCode",{parentName:"p"},"Static"),Object(b.b)("strong",{parentName:"p"},"getType"),"<","JSType, DBType>(",Object(b.b)("inlineCode",{parentName:"p"},"cls"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api#constructor"}),"Constructor"),"<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/type"}),"Type"),"<","JSType, DBType>>): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/type"}),"Type"),"<","JSType, DBType>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type"}),"Type"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.3/api/classes/type#gettype"}),"getType"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/core/src/types/Type.ts#L46"}),"packages/core/src/types/Type.ts:46"))),Object(b.b)("h4",{id:"type-parameters"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"JSType"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"DBType"))))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cls")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api#constructor"}),"Constructor"),"<",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.3/api/classes/type"}),"Type"),"<","JSType, DBType>>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.3/api/classes/type"}),"Type"),"<","JSType, DBType>"))}s.isMDXComponent=!0}}]);