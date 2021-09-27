---
id: useUnmount
title: useUnmount
---

组件 unmount 时执行

## 代码演示

```jsx live
function Basic() {
  function Unmount() {
    useUnmount(() => {
      message.info("Unmount");
    });
    return <div>Hello World</div>;
  }
  const { state, toggle } = useBoolean(true);
  return (
    <div>
      Effects：
      <Switch checked={state} onChange={toggle}></Switch>
      {state && (
        <p>
          <Unmount />
        </p>
      )}
    </div>
  );
}
```

## API

```javascript
useUnmount(() => {});
```

### Params

| 参数 | 说明                          | 类型       | 默认值 |
| ---- | ----------------------------- | ---------- | ------ |
| fn   | 组件 unmount 的时候调用的函数 | () => void | -      |
