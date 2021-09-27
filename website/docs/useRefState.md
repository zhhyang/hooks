---
id: useRefState
title: useRefState
---

在闭包中获取最新的 state 值。

## 代码演示

```jsx live

function Demo() {
    const [state, setState, ref] = useRefState(0);

    const [count,setCount] = useState(0)

    const onChange = useCallback(() => {
        setState(ref.current + 1);
    }, []);
    
    const onInc = useCallback(() =>{
        setCount(count+1)
    },[])
    // [count]

    return (
        <div>
            <p>
                {state}
            </p>
            <p>
                <Button type="primary" onClick={onChange}>
                    Change
                </Button>
            </p>
            <br/>
            <p>
                {count}
            </p>
            <p>
                <Button type="primary" onClick={onInc}>
                    Change onInc
                </Button>
            </p>
        </div>
    );
}
```

## API

```javascript
const [state, setState] = useSetState < S > (initialState: S | (() => S));
```

### Result

| 参数     | 说明                                                                      | 类型                                |
| -------- | ------------------------------------------------------------------------- | ----------------------------------- |
| state    | 状态值                                                                    | object                              |
| setState | 触发状态更改的函数,可以接受一个参数修改状态值或者一个返回参数修改值的函数 | `state or (state: S) => Partial<S>` |

### Params

| 参数         | 说明             | 类型   | 默认值 |
| ------------ | ---------------- | ------ | ------ |
| initialState | 传入默认的状态值 | object | -      |
