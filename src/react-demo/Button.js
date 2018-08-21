import React from 'react';

export default ({
  color,
  fontColor,
  style = {},
  onClick = v => v,
  title
}) => {
  return (
    <button
      style={{
        padding: '5px 10px',
        margin: '0 10px',
        backgroundColor: color,
        color: fontColor,
        ...style
      }}
      onClick={onClick}
    >{title}</button>
  );
};