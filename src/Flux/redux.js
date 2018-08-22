import React, { Fragment } from 'react';

export default () => {
  return (
    <Fragment>
      <h1>REDUX</h1>
      <img
        style={{ margin: 'auto', width: '80%' }}
        src={require('./flux.png')}
      />
      <ol style={{ fontSize: '32px', lineHeight: '2em' }} />
    </Fragment>
  );
};
