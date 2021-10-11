"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[258],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1608:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],u={id:"useBoolean",title:"useBoolean"},i=void 0,p={unversionedId:"useBoolean",id:"useBoolean",isDocsHomePage:!1,title:"useBoolean",description:"\u4f18\u96c5\u7684\u7ba1\u7406 boolean \u503c\u7684 Hook\u3002",source:"@site/docs/useBoolean.md",sourceDirName:".",slug:"/useBoolean",permalink:"/hooks/docs/useBoolean",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/useBoolean.md",tags:[],version:"current",frontMatter:{id:"useBoolean",title:"useBoolean"},sidebar:"someSidebar",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/hooks/docs/"},next:{title:"useToggle",permalink:"/hooks/docs/useToggle"}},s=[{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",children:[]},{value:"API",id:"api",children:[{value:"Result",id:"result",children:[]},{value:"Params",id:"params",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4f18\u96c5\u7684\u7ba1\u7406 boolean \u503c\u7684 Hook\u3002"),(0,l.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'\nfunction Demo  ()  {\n  const { state, toggle, setTrue, setFalse } = useBoolean(true)\n  return (\n    <div>\n      <p>\n        Effects\uff1a\n        <Switch checked={state} onChange={toggle} />\n      </p>\n      <p>\n        <Button type="default" onClick={() => toggle()}>\n          Toggle\n        </Button>\n        <Button type="danger" onClick={setFalse} style={{ margin: \'0 16px\' }}>\n          Set false\n        </Button>\n        <Button type="primary" onClick={setTrue}>\n          Set true\n        </Button>\n      </p>\n    </div>\n  );\n}\n\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  state, \n  toggle,\n  setTrue,\n  setFalse\n} = useBoolean(\n  defaultValue?: boolean,\n);\n")),(0,l.kt)("h3",{id:"result"},"Result"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toggle"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u72b6\u6001\u66f4\u6539\u7684\u51fd\u6570,\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u53ef\u9009\u53c2\u6570\u4fee\u6539\u72b6\u6001\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"(value?: any) => void")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setTrue"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u72b6\u6001\u503c\u4e3a true"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setFalse"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u72b6\u6001\u503c\u4e3a false"),(0,l.kt)("td",{parentName:"tr",align:null},"() => void")))),(0,l.kt)("h3",{id:"params"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\u9879\uff0c\u4f20\u5165\u9ed8\u8ba4\u7684\u72b6\u6001\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean ","|"," undefined"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))))}d.isMDXComponent=!0}}]);