---
id: useToggle
title: useToggle
---

用于在两个状态值间切换的 Hook。

## 代码演示

### Default usage

```jsx live
function Basic() {
  const { state, toggle } = useToggle();
  return (
    <div>
      <p>
        Effects：
        <Switch checked={state} onChange={toggle} />
      </p>
      <p>
        <Button type="default" onClick={() => toggle()}>
          Toggle
        </Button>
        <Button
          type="danger"
          onClick={() => toggle(false)}
          style={{ margin: "0 16px" }}
        >
          Toggle False
        </Button>
        <Button type="primary" onClick={() => toggle(true)}>
          Toggle True
        </Button>
      </p>
    </div>
  );
}
```

### Advanced usage

```jsx live
function Advanced() {
  const { state, toggle, setLeft, setRight } = useToggle("Hello", "World");
  return (
    <div>
      <p>Effects：{state}</p>
      <p>
        <Button type="default" onClick={() => toggle()}>
          Toggle
        </Button>
        <Button
          type="danger"
          onClick={() => toggle("Hello")}
          style={{ margin: "0 16px" }}
        >
          Toggle Hello
        </Button>
        <Button type="primary" onClick={() => toggle("World")}>
          Toggle World
        </Button>
        <Button type="danger" onClick={setLeft} style={{ margin: "0 16px" }}>
          Set Hello
        </Button>
        <Button type="primary" onClick={setRight}>
          Set World
        </Button>
      </p>
    </div>
  );
}
```

## API

```javascript
const {
  state,
  toggle,
  setLeft,
  setRight
} = useToggle(
  defaultValue?: boolean,
);

const {
  state,
  toggle,
  setLeft,
  setRight
} = useToggle(
  defaultValue: any = false,
  reverseValue?: any,
);
```

### Result

| 参数     | 说明                                              | 类型                                                    |
| -------- | ------------------------------------------------- | ------------------------------------------------------- |
| state    | 状态值                                            | boolean                                                 |
| toggle   | 触发状态更改的函数,可以接受两个可选参数修改状态值 | (defaultValue: any = false, reverseValue?: any) => void |
| setLeft  | 设置为默认值                                      | () => void                                              |
| setRight | 设置为相反值                                      | () => void                                              |

### Params

| 参数         | 说明                     | 类型                                     | 默认值 |
| ------------ | ------------------------ | ---------------------------------------- | ------ |
| defaultValue | 可选项，传入默认的状态值 | number \| string \| boolean \| undefined | false  |
| reverseValue | 可选项，传入取反的状态值 | number \| string \| boolean \| undefined | -      |
