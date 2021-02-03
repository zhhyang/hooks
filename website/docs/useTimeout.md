---
id: useTimeout
title: useTimeout
---

组件 mount 时执行

## Examples
import {useState} from 'react'
import { Button, Switch,message } from 'antd';
import { useTimeout } from '../../src/index';

export const Basic = () => {
const [ count, setCount] = useState(0);
useTimeout(() =>{setCount(count+1)},5000)
return (<div>{count}</div>)
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
