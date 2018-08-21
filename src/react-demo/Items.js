import React from 'react';
import Item from './Item';
import styles from './styles.less';

const Btn = props => {
  return <input type="button" onClick={props.onClick} value={props.title} />;
};

export default class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
      data: props.data
    };
  }
  componentWillReceiveProps(next) {
    this.setState({
      current: next.current,
      data: next.data
    });
  }
  getTargets = type => {
    const all = document.getElementsByName(type);
    const res = [];
    if (all.length > 0) {
      for (let item of all) {
        if (item.checked) {
          res.push(item.value);
        }
      }
    }
    return res;
  };
  operate = (type) => {
    const target = this.getTargets(this.state.current);
    if (target.length > 0) {
      this.props.operate(target, type);
    }
  };
  filterData = (current, item) => {
    switch (current) {
      case 'todos': {
        return !item.complated;
      }
      case 'complated': {
        return item.complated;
      }
    }
  };
  list = data => {
    const res = [];
    data.map((item, index) => {
      if (this.filterData(this.state.current, item)) {
        res.push(
          <Item
            key={`${this.state.current}-${index}`}
            item={item}
            type={this.state.current}
            index={index}
          />
        );
      }
    });
    return res;
  };
  render() {
    if (this.list(this.state.data).length < 1) {
      return <div>暂无数据</div>;
    }
    return (
      <div className={styles.items}>
        {this.list(this.state.data)}
        {this.state.current === 'todos' ?
          <Btn onClick={this.operate.bind(null, 1)} title="完成" /> :
          <Btn onClick={this.operate.bind(null, 2)} title="重置" /> 
        }
        <Btn onClick={this.operate.bind(null, 0)} title="删除" />
      </div>
    );
  }
}
