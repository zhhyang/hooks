"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[844],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4847:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"useSetState",title:"useSetState"},u=void 0,p={unversionedId:"useSetState",id:"useSetState",isDocsHomePage:!1,title:"useSetState",description:"\u6a21\u62df\u4f20\u7edfsetState\u3002",source:"@site/docs/useSetState.md",sourceDirName:".",slug:"/useSetState",permalink:"/hooks/docs/useSetState",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/useSetState.md",tags:[],version:"current",frontMatter:{id:"useSetState",title:"useSetState"},sidebar:"someSidebar",previous:{title:"useToggle",permalink:"/hooks/docs/useToggle"},next:{title:"useForceUpdate",permalink:"/hooks/docs/useForceUpdate"}},s=[{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",children:[]},{value:"API",id:"api",children:[{value:"Result",id:"result",children:[]},{value:"Params",id:"params",children:[]}]}],c={toc:s};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6a21\u62df\u4f20\u7edfsetState\u3002"),(0,l.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"\nfunction Demo  ()  {\n  const [ state, setState ] = useSetState({\n      name:'foo',\n      age:18\n  })\n    \n    const onChange = () => {\n      setState({age:88})\n    }\n  return (\n    <div>\n      <p>\n        \n          {state.name}:{state.age}\n      </p>\n      <p>\n        <Button type=\"primary\" onClick={onChange}>\n          Change\n        </Button>\n      </p>\n    </div>\n  );\n}\n\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const [ state, setState ] = useSetState<S>(\n    initialState: S | (() => S)\n);\n")),(0,l.kt)("h3",{id:"result"},"Result"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"state"),(0,l.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"object")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"setState"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u72b6\u6001\u66f4\u6539\u7684\u51fd\u6570,\u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\u4fee\u6539\u72b6\u6001\u503c\u6216\u8005\u4e00\u4e2a\u8fd4\u56de\u53c2\u6570\u4fee\u6539\u503c\u7684\u51fd\u6570"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"state or (state: S) => Partial<S>"))))),(0,l.kt)("h3",{id:"params"},"Params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initialState"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f20\u5165\u9ed8\u8ba4\u7684\u72b6\u6001\u503c"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))}m.isMDXComponent=!0}}]);