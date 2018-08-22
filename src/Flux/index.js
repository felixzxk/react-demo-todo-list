import React, {Fragment} from 'react';

import ReduxInfo from './redux';

export { ReduxInfo };

export default props => {
  return (
    <Fragment>
      <h1>FLUX</h1>
      <ol style={{ fontSize: '32px', lineHeight: '2em' }}>
        <li>Flux 是一种架构思想，专门解决软件的结构问题</li>
        <li>单向数据流</li>
        <li><a href="http://www.ruanyifeng.com/blog/2016/01/flux.html" target="_blank">具体看这里</a></li>
      </ol>
    </Fragment>
  );
};
