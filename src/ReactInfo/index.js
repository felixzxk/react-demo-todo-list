import React, {Fragment} from 'react';

import JSX from './jsx';
import Life from './life';
import DataFlow from './dataflow';
import Events from './events';
import Demo from './react-demo';

export { JSX, Life, DataFlow, Events, Demo };

export default props => {
  return (
    <Fragment>
      <h1>REACT</h1>
      <ol style={{ fontSize: '32px', lineHeight: '2em' }}>
        <li>数据驱动的UI框架</li>
      </ol>
    </Fragment>
  );
};
