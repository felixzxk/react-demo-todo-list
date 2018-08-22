import React from 'react';
import styles from './styles.less';

export default ({item, index, type}) => {
  return (
    <div className={styles.item}>
      <input type="checkbox" name={type} value={index} />
      <div className={styles.itemName}>{item.name}</div>
      <div className={styles.createTime}>{item.createTime}</div>
    </div>
  );
};
