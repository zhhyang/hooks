---
id: useBoolean
title: useBoolean
---

优雅的管理 boolean 值的 Hook。

## 代码演示

import { Button, Switch } from 'antd';
import { useBoolean } from '../../src/index';

export const Demo =  () => {
  const { state, toggle, setTrue, setFalse } = useBoolean(true)
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
        <Button type="danger" onClick={setFalse} style={{ margin: '0 16px' }}>
          Set false
        </Button>
        <Button type="primary" onClick={setTrue}>
          Set true
        </Button>
      </p>
    </div>
  );
}

<Demo />


## API

```javascript
const {
  state, 
  toggle,
  setTrue,
  setFalse
} = useBoolean(
  defaultValue?: boolean,
);
```

### Result

| 参数     | 说明                                 | 类型                 |
|----------|--------------------------------------|----------------------|
| state  | 状态值                         | boolean              |
| toggle | 触发状态更改的函数,可以接受一个可选参数修改状态值 | (value?: any) => void |
| setTrue | 设置状态值为 true | () => void |
| setFalse | 设置状态值为 false | () => void |

### Params

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| defaultValue | 可选项，传入默认的状态值  | boolean \| undefined | false      |
