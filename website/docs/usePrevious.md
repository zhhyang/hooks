---
id: usePrevious
title: usePrevious
---

获取上一次渲染的 state 值。

## 代码演示

```jsx live
function Demo() {
  const [count, setCount] = useState(0);

  const previous = usePrevious(count);

  return (
    <div>
      <p>
        Now: {count} ,Previous: {previous}
      </p>

      <Space>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          +
        </Button>

        <Button type="primary" onClick={() => setCount(count - 1)}>
          -
        </Button>
      </Space>
    </div>
  );
}
```

## API

```tsx
const previous = usePrevious<S>(value:S);
```

### Result

| 参数  | 说明           | 类型 |
| ----- | -------------- | ---- |
| previous | 上一次渲染的值 | S    |

### Params

| 参数  | 说明                     | 类型 | 默认值 |
| ----- | ------------------------ | ---- | ------ |
| value | 需要保存的上一次渲染的值 | S    | -      |
