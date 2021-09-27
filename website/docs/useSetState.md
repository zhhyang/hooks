---
id: useSetState
title: useSetState
---

模拟传统setState。

## 代码演示
```jsx live

function Demo  ()  {
  const [ state, setState ] = useSetState({
      name:'foo',
      age:18
  })
    
    const onChange = () => {
      setState({age:88})
    }
  return (
    <div>
      <p>
        
          {state.name}:{state.age}
      </p>
      <p>
        <Button type="primary" onClick={onChange}>
          Change
        </Button>
      </p>
    </div>
  );
}

```

## API

```javascript
const [ state, setState ] = useSetState<S>(
    initialState: S | (() => S)
);
```

### Result

| 参数     | 说明                                 | 类型                 |
|----------|--------------------------------------|----------------------|
| state  | 状态值                         | object              |
| setState | 触发状态更改的函数,可以接受一个参数修改状态值或者一个返回参数修改值的函数 | `state or (state: S) => Partial<S>` |


### Params

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| initialState | 传入默认的状态值  | object | -      |
