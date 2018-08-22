import React, { Fragment } from 'react';

export default () => {
  return (
    <Fragment>
      <h1>Dvajs</h1>
      <ol style={{ fontSize: '32px', lineHeight: '2em' }}>
        <li>公司目前几乎所有项目前端框架都用的它</li>
        <li>封装了Redux，并提供更简单的api</li>
        <li>配合Roadhog简化前端工程化的操作</li>
        <li><a href="https://dvajs.com/guide/concepts.html" target="_blank">八个概念</a></li>
        <li><a href="https://dvajs.com/api/" target="_blank">APIs</a></li>
        <li><a href="https://dvajs.com/knowledgemap/" target="_blank">知识图谱</a></li>
      </ol>
    </Fragment>
  );
};
