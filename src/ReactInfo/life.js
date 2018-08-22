import React, { Fragment } from 'react';

export default () => {
  return (
    <Fragment>
      <h1>生命周期</h1>
      <img
        style={{ margin: 'auto' }}
        src={require('./life.jpg')}
      />
      <ol style={{ fontSize: '32px', lineHeight: '2em' }}>
        <li>
          初始化
          <ol>
            <li>设置默认props：defaultProps: Object， propsTypes: Object</li>
            <li>执行构造函数</li>
            <li>即将插入组件： componentWillMount: void</li>
            <li>
              渲染成虚拟dom： render: ReactElement， 这个方法会在存在期多次执行
            </li>
            <li>插入文本流： componentDidMount: void</li>
          </ol>
        </li>
        <li>
          存在期
          <ol>
            <li>
              外部将新的props数据传入：componentWillReceiveProps(nextProps:
              Object): viod
            </li>
            <li>
              决定是否更新组件：shouldComponentUpdate(nextProps: Object,
              nextState: Object): Bealoon
            </li>
            <li>即将插入组件： componentWillUpdate(): void</li>
            <li>渲染成虚拟dom： render: ReactElement</li>
            <li>即将插入组件： componentDidUpdate(): void</li>
          </ol>
        </li>
        <li>
          销毁期
          <ol>
            <li>组件即将移出文本流：componentWillUnmount(): viod</li>
          </ol>
        </li>
        <li>
          虚拟dom
          <ol>
            <li>内存里的数据操作， 比真实dom快</li>
            <li>本质是对dom节点的描述对象</li>
            <li>diff算法，比较新旧两棵dom数据的差异，并对真实dom树做最小程度的修改</li>
          </ol>
        </li>
      </ol>
    </Fragment>
  );
};
