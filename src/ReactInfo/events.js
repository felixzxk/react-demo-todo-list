import React, { Fragment } from 'react';

export default () => {
  return (
    <Fragment>
      <h1>事件处理</h1>
      <ol style={{ fontSize: '32px', lineHeight: '2em' }}>
        <li>
          事件名称必须驼峰命名，react内部会根据这种命名规则解析节点的事件监听器，例如：onClick，onFocus
        </li>
        <li>节点上事件监听器属性的值必须是个函数</li>
        <li>尽量使用箭头函数，省得再次绑定作用域</li>
        <li>
          普通函数的变更作用域
          <ol>
            <li>call</li>
            <li>apply</li>
            <li>bind, es6里这个常用</li>
          </ol>
        </li>
        <li>需要再回调函数里传参数的时候，可能会用到bind</li>
      </ol>
    </Fragment>
  );
};
