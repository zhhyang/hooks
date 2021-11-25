"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[162],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9390:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"getting-started",title:"\u5feb\u901f\u4e0a\u624b",slug:"/"},c=void 0,u={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"\u5feb\u901f\u4e0a\u624b",description:"\u662f\u4e00\u4e2a React Hooks \u5e93\uff0c\u81f4\u529b\u63d0\u4f9b\u5e38\u7528\u4e14\u9ad8\u8d28\u91cf\u7684 Hooks\u3002",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/",permalink:"/hooks/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"\u5feb\u901f\u4e0a\u624b",slug:"/"},sidebar:"someSidebar",next:{title:"useBoolean",permalink:"/hooks/docs/useBoolean"}},s=[{value:"\u7b2c\u4e00\u4e2a\u4f8b\u5b50",id:"\u7b2c\u4e00\u4e2a\u4f8b\u5b50",children:[{value:"1. \u5b89\u88c5",id:"1-\u5b89\u88c5",children:[],level:3},{value:"2. \u5982\u4f55\u4f7f\u7528",id:"2-\u5982\u4f55\u4f7f\u7528",children:[],level:3}],level:2},{value:"\u6309\u9700\u52a0\u8f7d",id:"\u6309\u9700\u52a0\u8f7d",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u662f\u4e00\u4e2a React Hooks \u5e93\uff0c\u81f4\u529b\u63d0\u4f9b\u5e38\u7528\u4e14\u9ad8\u8d28\u91cf\u7684 Hooks\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u638c\u63e1 React \u53ca React Hooks \u57fa\u7840\u7528\u6cd5\u3002\u8bbf\u95ee",(0,a.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/hooks-intro.html"},"\u94fe\u63a5"),"\u5b66\u4e60 React Hooks \u5b98\u65b9\u6587\u6863\u3002")),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u4e2a\u4f8b\u5b50"},"\u7b2c\u4e00\u4e2a\u4f8b\u5b50"),(0,a.kt)("h3",{id:"1-\u5b89\u88c5"},"1. \u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\nyarn add @jdcfe/hooks\n\n")),(0,a.kt)("h3",{id:"2-\u5982\u4f55\u4f7f\u7528"},"2. \u5982\u4f55\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport { useBoolean } from "@jdcfe/hooks";\n\nexport default () => {\n  const { state, toggle } = useBoolean();\n\n  return (\n    <div>\n      <p>Current Boolean: {String(state)}</p>\n      <p>\n        <button onClick={() => toggle()}>Toggle</button>\n      </p>\n    </div>\n  );\n};\n')),(0,a.kt)("h2",{id:"\u6309\u9700\u52a0\u8f7d"},"\u6309\u9700\u52a0\u8f7d"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u7684\u5199\u6cd5\u6765\u6309\u9700\u52a0\u8f7d Hooks\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import useBoolean from '@jdcfe/hooks/es/useBoolean';\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u9ed8\u8ba4\u652f\u6301\u57fa\u4e8e ES module \u7684 tree shaking\uff0c\u5bf9\u4e8e js \u90e8\u5206\uff0c\u76f4\u63a5\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"import { useBoolean } from '@jdcfe/hooks'")," \u4e5f\u4f1a\u6709\u6309\u9700\u52a0\u8f7d\u7684\u6548\u679c\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u4e86 babel\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import")," \u6765\u8fdb\u884c\u6309\u9700\u52a0\u8f7d\uff0c\u52a0\u5165\u8fd9\u4e2a\u63d2\u4ef6\u540e\u3002\u4f60\u53ef\u4ee5\u4ecd\u7136\u8fd9\u4e48\u5199\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useBoolean } from '@jdcfe/hooks';\n")),(0,a.kt)("p",null,"\u63d2\u4ef6\u4f1a\u5e2e\u4f60\u8f6c\u6362\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"@jdcfe/hooks/es/useBoolean")," \u7684\u5199\u6cd5\u3002"))}d.isMDXComponent=!0}}]);