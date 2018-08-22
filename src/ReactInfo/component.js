import React, { Fragment } from 'react';

export default () => {
  return (
    <Fragment>
      <h1>组件</h1>
      <ol style={{ fontSize: '32px', lineHeight: '2em' }}>
        <li>
          函数式编程
          <p>
            "函数式编程"是一种"编程范式"（programming
            paradigm），也就是如何编写程序的方法论。
          </p>
          <a
            href="http://www.ruanyifeng.com/blog/2012/04/functional_programming.html"
            target="_blank"
          >
            具体看这里
          </a>
        </li>
        <li>复用</li>
        <li>有状态组件</li>
        <li>无状态组件</li>
        <li>props是啥</li>
        <li>state是啥</li>
        <li>setState方法</li>
      </ol>
    </Fragment>
  );
};
