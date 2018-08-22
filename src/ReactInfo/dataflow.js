import React, { Fragment } from 'react';

export default () => {
  return (
    <Fragment>
      <h1>组件数据流</h1>
      <img src={require('./dataflow.png')} />
      <ol style={{ fontSize: '32px', lineHeight: '2em' }}>
        <li>父组件将数据（或者方法）通过props的形式传递给子组件</li>
        <li>子组件根据来自父组件的数据，渲染UI或者定义自身state</li>
        <li>这时进入组件的存在期</li>
        <li>子组件内部的某个元素出发了某个事件，这个事件回调了父组件的方法（callback）</li>
        <li>并以参数的形式将子组件内部的计算值（经过加工的数据）通过回调方法（callback）传递给父组件</li>
        <li>父组件内部的回调拿到数据后可以进行后续处理</li>
      </ol>
    </Fragment>
  );
};
