---
id: useLatest
title: useLatest
---

在闭包中获取最新的 state 值。

## 代码演示

```jsx live

function Demo() {

  const [count, setCount] = React.useState(0);
  const latestCount = useLatest(count);

  function handleAlertClick() {
    setTimeout(() => {
      alert(`Latest count value: ${latestCount.current}`);
    }, 3000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
}
```

## API

```ts
const ref = useLatest<T>(initialState: T);
```

### Result

| 参数     | 说明                                                                      | 类型                                |
| -------- | ------------------------------------------------------------------------- | ----------------------------------- |
| ref | ref |  |

### Params

| 参数         | 说明             | 类型  | 默认值 |
| ------------ | ---------------- |-----| ------ |
| initialState | 传入的最新的状态值 | T   | -      |
