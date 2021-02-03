---
id: getting-started
title: 快速上手
---

是一个 React Hooks 库，致力提供常用且高质量的 Hooks。

> 在开始之前，你需要掌握 React 及 React Hooks 基础用法。访问[链接](https://zh-hans.reactjs.org/docs/hooks-intro.html)学习 React Hooks 官方文档。

## 第一个例子

### 1. 安装

```bash

yarn add @jdcfe/hooks

```

### 2. 如何使用


```jsx
import React from "react";
import { useBoolean } from "@jdcfe/hooks";

export default () => {
  const { state, toggle } = useBoolean();

  return (
    <div>
      <p>Current Boolean: {String(state)}</p>
      <p>
        <button onClick={() => toggle()}>Toggle</button>
      </p>
    </div>
  );
};
```

## 按需加载

可以通过以下的写法来按需加载 Hooks。

```javascript
import useBoolean from '@jdcfe/hooks/es/useBoolean';
```

> 注意：默认支持基于 ES module 的 tree shaking，对于 js 部分，直接引入 `import { useBoolean } from '@jdcfe/hooks'` 也会有按需加载的效果。

如果你使用了 babel，那么可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载，加入这个插件后。你可以仍然这么写：

```javascript
import { useBoolean } from '@jdcfe/hooks';
```

插件会帮你转换成 `@jdcfe/hooks/es/useBoolean` 的写法。
