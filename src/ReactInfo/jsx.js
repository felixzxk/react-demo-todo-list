import React, { Fragment } from 'react';

export default () => {
  return (
    <Fragment>
      <h1>JSX</h1>
      <ol style={{ fontSize: '32px', lineHeight: '2em' }}>
        <li>模板语言， 跟html基本一样</li>
        <li>react渲染函数的语法糖</li>
        <li>不用也行，但是react的节点生成函数并不好用</li>
        <li>可以内嵌简单表达式</li>
        <li>标签可以自定义属性</li>
        <li>组合组件</li>
        <li>需要使用babel解析</li>
        <li>还有tsx</li>
      </ol>
    </Fragment>
  );
};
