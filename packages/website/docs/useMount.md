---
id: useMount
title: useMount
---

组件 mount 时执行

## 代码演示

```jsx live
function Basic() {
  function Mount() {
    useMount(() => {
      message.info("mount");
    });
    return <div>Hello World</div>;
  }
  const { state, toggle } = useBoolean(false);
  return (
    <div>
      Effects：
      <Switch checked={state} onChange={toggle}></Switch>
      {state && (
        <p>
          <Mount />
        </p>
      )}
    </div>
  );
}
```

## API

```javascript
useMount(() => {});
```

### Params

| 参数 | 说明                        | 类型       | 默认值 |
| ---- | --------------------------- | ---------- | ------ |
| fn   | 组件 mount 的时候调用的函数 | () => void | -      |
