import React from 'react';
import styles from './styles.less';

export default props => {
  return (
    <div className={styles.header}>
      {props.data.map(({name, code}) => (
        <a
          className={props.current === code ? styles.current : ''}
          key={`header-item-${code}`}
          onClick={() => props.onClick(code)}
        >
          {name}
        </a>
      ))}
    </div>
  );
};