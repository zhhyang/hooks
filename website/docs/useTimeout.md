---
id: useTimeout
title: useTimeout
---

处理 setTimeout

## 代码演示

```jsx live
function Basic() {
  const [count, setCount] = useState(0);
  useTimeout(() => {
    setCount(count + 1);
  }, 5000);
  return <div>{count}</div>;
}
```

## API

```javascript
useTimeout(fn:() => {}, (delay: number | undefined | null));
```

### Params

| 参数  | 说明                                                | 类型                              | 默认值 |
| ----- | --------------------------------------------------- | --------------------------------- | ------ |
| fn    | delay 到期后执行的函数                              | `() => void`                      | -      |
| delay | 延时时间，设置为`null`或者 `undefined` 会停止定时器 | `number` \| `undefined` \| `null` | -      |
