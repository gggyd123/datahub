"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9232],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98448:function(t,e,n){var a=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},37358:function(t,e,n){n.d(e,{Z:function(){return c}});var a=n(87462),r=n(67294),l=n(51048),i=n(22713);var o=function(){var t=(0,r.useContext)(i.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},s=n(12613),u=n(86010),d="tabItem_1uMI";function p(t){var e,n,a,l=t.lazy,i=t.block,p=t.defaultValue,c=t.values,m=t.groupId,g=t.className,k=r.Children.map(t.children,(function(t){if((0,r.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=c?c:k.map((function(t){var e=t.props;return{value:e.value,label:e.label}})),f=(0,s.lx)(b,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(e=null!=p?p:null==(n=k.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=k[0])?void 0:a.props.value;if(null!==h&&!b.some((function(t){return t.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=o(),y=N.tabGroupChoices,v=N.setTabGroupChoices,w=(0,r.useState)(h),_=w[0],A=w[1],x=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==_&&b.some((function(t){return t.value===C}))&&A(C)}var T=function(t){var e=t.currentTarget,n=x.indexOf(e),a=b[n].value;a!==_&&(S(e),A(a),null!=m&&v(m,a))},O=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=x.indexOf(t.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(t.currentTarget)-1;n=x[r]||x[x.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},g)},b.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":_===e}),key:e,ref:function(t){return x.push(t)},onKeyDown:O,onFocus:T,onClick:T},null!=n?n:e)}))),l?(0,r.cloneElement)(k.filter((function(t){return t.props.value===_}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==_})}))))}function c(t){var e=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(e)},t))}},22713:function(t,e,n){var a=(0,n(67294).createContext)(void 0);e.Z=a},46671:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=n(37358),o=n(98448),s=["components"],u={title:"SageMaker",sidebar_label:"SageMaker",slug:"/generated/ingestion/sources/sagemaker",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/sagemaker.md"},d="SageMaker",p={unversionedId:"docs/generated/ingestion/sources/sagemaker",id:"docs/generated/ingestion/sources/sagemaker",isDocsHomePage:!1,title:"SageMaker",description:"Module sagemaker",source:"@site/genDocs/docs/generated/ingestion/sources/sagemaker.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/sagemaker",permalink:"/docs/generated/ingestion/sources/sagemaker",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/sagemaker.md",tags:[],version:"current",frontMatter:{title:"SageMaker",sidebar_label:"SageMaker",slug:"/generated/ingestion/sources/sagemaker",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/sagemaker.md"},sidebar:"overviewSidebar",previous:{title:"S3 Data Lake",permalink:"/docs/generated/ingestion/sources/s3"},next:{title:"Salesforce",permalink:"/docs/generated/ingestion/sources/salesforce"}},c=[{value:"Module <code>sagemaker</code>",id:"module-sagemaker",children:[{value:"Important Capabilities",id:"important-capabilities",children:[],level:3},{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Quickstart Recipe",id:"quickstart-recipe",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3},{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],m={toc:c};function g(t){var e=t.components,n=(0,r.Z)(t,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sagemaker"},"SageMaker"),(0,l.kt)("h2",{id:"module-sagemaker"},"Module ",(0,l.kt)("inlineCode",{parentName:"h2"},"sagemaker")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,l.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table-Level Lineage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,l.kt)("p",null,"This plugin extracts the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Feature groups"),(0,l.kt)("li",{parentName:"ul"},"Models, jobs, and lineage between the two (e.g. when jobs output a model or a model is used by a job)")),(0,l.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[sagemaker]'\n")),(0,l.kt)("h3",{id:"quickstart-recipe"},"Quickstart Recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: sagemaker\n  config:\n    # Coordinates\n    aws_region: "my-aws-region"\n\nsink:\n  # sink configs\n')),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,"View All Configuration Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_access_key_id"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_secret_access_key"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_session_token"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_role"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Generic dict"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_profile"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Named AWS profile to use, if not set the default will be used"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_region"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"AWS region code."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_endpoint_url"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html")),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws_proxy"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Autodetected. See ",(0,l.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,l.kt)("td",{parentName:"tr",align:null},"PROD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extract_feature_groups"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to extract feature groups."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extract_models"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to extract models."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extract_jobs"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Generic dict"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to extract AutoML jobs."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database_pattern"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null},"regex patterns for databases to filter in ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True, 'alphabet': '","[A-Za-z0-9 _.-]","'}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database_pattern.allow"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to include in ingestion"),(0,l.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database_pattern.deny"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to exclude from ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database_pattern.ignoreCase"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database_pattern.alphabet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Allowed alphabets pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"[A-Za-z0-9 _.-]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,l.kt)("td",{parentName:"tr",align:null},"regex patterns for tables to filter in ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True, 'alphabet': '","[A-Za-z0-9 _.-]","'}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.allow"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to include in ingestion"),(0,l.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.deny"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to exclude from ingestion."),(0,l.kt)("td",{parentName:"tr",align:null},"[]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.ignoreCase"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_pattern.alphabet"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Allowed alphabets pattern"),(0,l.kt)("td",{parentName:"tr",align:null},"[A-Za-z0-9 _.-]")))))),(0,l.kt)(o.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "SagemakerSourceConfig",\n  "description": "Common AWS credentials config.\\n\\nCurrently used by:\\n    - Glue source\\n    - SageMaker source",\n  "type": "object",\n  "properties": {\n    "aws_access_key_id": {\n      "title": "Aws Access Key Id",\n      "description": "Autodetected. See https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html",\n      "type": "string"\n    },\n    "aws_secret_access_key": {\n      "title": "Aws Secret Access Key",\n      "description": "Autodetected. See https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html",\n      "type": "string"\n    },\n    "aws_session_token": {\n      "title": "Aws Session Token",\n      "description": "Autodetected. See https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html",\n      "type": "string"\n    },\n    "aws_role": {\n      "title": "Aws Role",\n      "description": "Autodetected. See https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html",\n      "anyOf": [\n        {\n          "type": "string"\n        },\n        {\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        }\n      ]\n    },\n    "aws_profile": {\n      "title": "Aws Profile",\n      "description": "Named AWS profile to use, if not set the default will be used",\n      "type": "string"\n    },\n    "aws_region": {\n      "title": "Aws Region",\n      "description": "AWS region code.",\n      "type": "string"\n    },\n    "aws_endpoint_url": {\n      "title": "Aws Endpoint Url",\n      "description": "Autodetected. See https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html",\n      "type": "string"\n    },\n    "aws_proxy": {\n      "title": "Aws Proxy",\n      "description": "Autodetected. See https://boto3.amazonaws.com/v1/documentation/api/latest/reference/core/session.html",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "database_pattern": {\n      "title": "Database Pattern",\n      "description": "regex patterns for databases to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true,\n        "alphabet": "[A-Za-z0-9 _.-]"\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "table_pattern": {\n      "title": "Table Pattern",\n      "description": "regex patterns for tables to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [],\n        "ignoreCase": true,\n        "alphabet": "[A-Za-z0-9 _.-]"\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "extract_feature_groups": {\n      "title": "Extract Feature Groups",\n      "description": "Whether to extract feature groups.",\n      "default": true,\n      "type": "boolean"\n    },\n    "extract_models": {\n      "title": "Extract Models",\n      "description": "Whether to extract models.",\n      "default": true,\n      "type": "boolean"\n    },\n    "extract_jobs": {\n      "title": "Extract Jobs",\n      "description": "Whether to extract AutoML jobs.",\n      "default": true,\n      "anyOf": [\n        {\n          "type": "object",\n          "additionalProperties": {\n            "type": "string"\n          }\n        },\n        {\n          "type": "boolean"\n        }\n      ]\n    }\n  },\n  "required": [\n    "aws_region"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns for process groups to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns for process groups to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        },\n        "alphabet": {\n          "title": "Alphabet",\n          "description": "Allowed alphabets pattern",\n          "default": "[A-Za-z0-9 _.-]",\n          "type": "string"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.aws.sagemaker.SagemakerSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/aws/sagemaker.py"},"GitHub"))),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for SageMaker, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}g.isMDXComponent=!0}}]);