import React from 'react';
import * as Antd from 'antd'
import * as Hooks from '@jdcfe/hooks'
const ReactLiveScope = {
    React,
    ...React,
    ...Antd,
    ...Hooks
};

export default ReactLiveScope;
