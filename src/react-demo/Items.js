import React from 'react';
import Item from './Item';
import styles from './styles.less';

const Btn = props => {
  return <input type="button" onClick={props.onClick} value={props.title} />;
};

export default class Items extends React.Component {
  getTargets = type => {
    const all = document.getElementsByName(type);
    const res = [];
    if (all.length > 0) {
      for (let item of all) {
        if (item.checked) {
          console.log(item);
          res.push(item.value);
        }
      }
    }
    return res;
  };
  complate = () => {
    const target = this.getTargets(this.props.current);
    if (target.length > 0) {
      this.props.complate(target);
    }
  };
  remove = () => {};
  // filterData = (current, data) => {
  //   switch(current) {
  //     case 'todos': {
  //       return data.filter(d => !d.complated)
  //     }
  //     case 'complated': {
  //       return data.filter(d => d.complated)
  //     }
  //   }
  // }
  filterData = (current, item) => {
    switch (current) {
      case 'todos': {
        return !item.complated;
      }
      case 'complated': {
        console.log('complated',item)
        return item.complated;
      }
    }
  };
  render() {
    console.log('this.props.current', this.props.current)
    return (
      <div className={styles.items}>
        {this.props.data.map(
          (item, index) =>
            this.filterData(this.props.current, item) && (
              <Item
                key={`${this.props.current}-${index}`}
                item={item}
                type={this.props.current}
                index={index}
              />
            )
        )}
        <Btn onClick={this.complate} title="完成" />
        <Btn onClick={this.remove} title="删除" />
      </div>
    );
  }
}
