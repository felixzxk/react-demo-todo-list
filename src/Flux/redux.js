import React, { Fragment } from 'react';

export default () => {
  return (
    <Fragment>
      <h1>REDUX</h1>
      <img
        style={{ margin: 'auto', width: '80%' }}
        src={require('./flux.png')}
      />
      <ol style={{ fontSize: '32px', lineHeight: '2em' }}>
        <li>状态机</li>
        <li>store存储数据， 使ui和数据分离</li>
        <li>数据不可直接被修改</li>
        <li>必须通过action，修改store里的数据</li>
        <li>监听数据变更</li>
        <li>通过connect将数据绑定至ui</li>
        <li>暴漏actions给ui层</li>
        <li>ui通过分发（dispatch）actions到store，修改数据</li>
        <li><a href="http://www.ruanyifeng.com/blog/2016/01/flux.html" target="_blank">具体看这里</a></li>
      </ol>
    </Fragment>
  );
};
