import React, {Fragment} from 'react';

import ReduxInfo from './redux';
import Dvajs from './dvajs';

export { ReduxInfo, Dvajs };

export default props => {
  return (
    <Fragment>
      <h1>FLUX</h1>
      <ol style={{ fontSize: '32px', lineHeight: '2em' }}>
        <li>一种架构思想</li>
        <li>单向数据流</li>
        <li><a href="http://www.ruanyifeng.com/blog/2016/01/flux.html" target="_blank">具体看这里</a></li>
      </ol>
    </Fragment>
  );
};
