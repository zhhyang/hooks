import React from 'react';
import * as Antd from 'antd'
import * as Hooks from '../../../../src'
const ReactLiveScope = {
    React,
    ...React,
    ...Antd,
    ...Hooks
};

export default ReactLiveScope;
