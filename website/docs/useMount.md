---
id: useMount
title: useMount
---

组件 mount 时执行

## Examples

import { Button, Switch,message } from 'antd';
import { useMount,useBoolean } from '../../src/index';

export const Mount = () => {
useMount(() => {
message.info('mount');
});
return <div>Hello World</div>
}

export const Basic = () => {
const { state, toggle} = useBoolean(false);
return (
<div>
Effects：
<Switch checked={state} onChange={toggle}></Switch>
{state && <p><Mount /></p>}
</div>)
};

<Basic />

## API

```javascript
 useMount(() => {});
```

### Params

| 参数         | 说明                     | 类型                                     | 默认值 |
| ------------ | ------------------------ | ---------------------------------------- | ------ |
| fn | 组件mount的时候调用的函数 | () => void  | -  |
