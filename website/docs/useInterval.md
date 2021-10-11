---
id: useInterval
title: useInterval
---

处理 setInterval

## 代码演示

```jsx live
function Basic() {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(count + 1);
  }, 1000);
  return <div>{count}</div>;
}
```

```jsx live
function Basic() {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  useInterval(() => {
    setCount(count + 1);
  }, delay);
  return (
    <div>
      {count}
      <br />
      <Space>
        <Button onClick={() => setDelay(undefined)}>点击停止</Button>
        <Button onClick={() => setDelay(1000)}>点击启动</Button>
      </Space>
    </div>
  );
}
```

## API

```javascript
useInterval(fn:() => {}, (ms: number | undefined | null));
```

### Params

| 参数  | 说明                                                | 类型                              | 默认值 |
| ----- | --------------------------------------------------- | --------------------------------- | ------ |
| fn    | 每`ms`执行的函数                              | `() => void`                      | -      |
| ms | 间隔时间，设置为`null`或者 `undefined` 会停止定时器 | `number` \| `undefined` \| `null` | -      |
