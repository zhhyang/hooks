"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[960],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9796:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),u=["components"],l={id:"usePrevious",title:"usePrevious"},i=void 0,s={unversionedId:"usePrevious",id:"usePrevious",isDocsHomePage:!1,title:"usePrevious",description:"\u83b7\u53d6\u4e0a\u4e00\u6b21\u6e32\u67d3\u7684 state \u503c\u3002",source:"@site/docs/usePrevious.md",sourceDirName:".",slug:"/usePrevious",permalink:"/hooks/docs/usePrevious",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/usePrevious.md",tags:[],version:"current",frontMatter:{id:"usePrevious",title:"usePrevious"},sidebar:"someSidebar",previous:{title:"useRefState",permalink:"/hooks/docs/useRefState"},next:{title:"useMount",permalink:"/hooks/docs/useMount"}},c=[{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",children:[],level:2},{value:"API",id:"api",children:[{value:"Result",id:"result",children:[],level:3},{value:"Params",id:"params",children:[],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u83b7\u53d6\u4e0a\u4e00\u6b21\u6e32\u67d3\u7684 state \u503c\u3002"),(0,o.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Demo() {\n  const [count, setCount] = useState(0);\n\n  const previous = usePrevious(count);\n\n  return (\n    <div>\n      <p>\n        Now: {count} ,Previous: {previous}\n      </p>\n\n      <Space>\n        <Button type="primary" onClick={() => setCount(count + 1)}>\n          +\n        </Button>\n\n        <Button type="primary" onClick={() => setCount(count - 1)}>\n          -\n        </Button>\n      </Space>\n    </div>\n  );\n}\n')),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const previous = usePrevious<S>(value:S);\n")),(0,o.kt)("h3",{id:"result"},"Result"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"previous"),(0,o.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4e00\u6b21\u6e32\u67d3\u7684\u503c"),(0,o.kt)("td",{parentName:"tr",align:null},"S")))),(0,o.kt)("h3",{id:"params"},"Params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"value"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u4fdd\u5b58\u7684\u4e0a\u4e00\u6b21\u6e32\u67d3\u7684\u503c"),(0,o.kt)("td",{parentName:"tr",align:null},"S"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))))}m.isMDXComponent=!0}}]);