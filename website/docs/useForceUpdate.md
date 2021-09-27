---
id: useForceUpdate
title: useForceUpdate
---

模拟传统 forceUpdate。

## 代码演示

```jsx live
function Demo() {
  const forceUpdate = useForceUpdate();

  const onClick = () => {
    forceUpdate();
  };
  console.log("render");
  return (
    <div>
      <p>
        <Button type="primary" onClick={onClick}>
          点我
        </Button>
      </p>
    </div>
  );
}
```

## API

```javascript
const forceUpdate = useForceUpdate();
```

### Result

| 参数     | 说明                                                                      | 类型                                |
| -------- | ------------------------------------------------------------------------- | ----------------------------------- |
| forceUpdate    | forceUpdate函数                                                                    | function                              |

### Params

无
