---
id: useUnmount
title: useUnmount
---

组件 unmount 时执行

## Examples

import { Button, Switch,message } from 'antd';
import { useUnmount,useBoolean } from '../../src/index';

export const Unmount = () => {
useUnmount(() => {
message.info('Unmount');
});
return <div>Hello World</div>
}

export const Basic = () => {
const { state, toggle} = useBoolean(true);
return (
<div>
Effects：
<Switch checked={state} onChange={toggle}></Switch>
{state && <p><Unmount /></p>}
</div>)
};

<Basic />

## API


```javascript
 useUnmount(() => {});
```

### Params

| 参数         | 说明                     | 类型                                     | 默认值 |
| ------------ | ------------------------ | ---------------------------------------- | ------ |
| fn | 组件unmount的时候调用的函数 | () => void  | -  |
