import React, { Component } from 'react';
import Header from './Header';
import Item from './Item';
import Items from './Items';

const TITLE = [
  {
    code: 'todos',
    name: '待办任务'
  },
  {
    code: 'complated',
    name: '已完成任务'
  },
];
String.prototype.Trim = function() {
  return this.replace(/(^\s*)|(\s*$)/g, '');
};

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      complated: [],
      current: 'todos'
    };
  }
  getCategory = current => {
    const target = TITLE.find(({ code }) => code === current);
    if (target) {
      return target.name;
    }
    return '你选中的是什么类型，不要坑老子！';
  };
  changeTag = current => {
    this.setState({
      current
    });
  };
  addItem = () => {
    const target = document.getElementById('newItemName');
    if (target.value.Trim()) {
      const { todos } = this.state;
      todos.unshift({
        name: target.value,
        complated: false
      });
      this.setState(
        {
          todos: [...todos]
        },
        () => {
          target.value = '';
        }
      );
    }
  };
  onComplate = (items) => {
    const todos = this.state.todos;
    items.map(index => {
      todos[index].complated = true
    })
    this.setState({
      todos: [...todos]
    })
  };
  render() {
    return (
      <div>
        <Header
          data={TITLE}
          onClick={this.changeTag}
          current={this.state.current}
        />
        {this.state[this.state.current].length < 1 ? (
          <div>当前没有 {this.getCategory(this.state.current)}</div>
        ) : (
          <Items
            data={this.state.todos}
            current={this.state.current}
            complate={this.onComplate}
          />
        )}

        <input type="text" id="newItemName" placeholder="请输入新任务的名称" />
        <input
          type="button"
          name="add"
          value="添加任务"
          onClick={this.addItem}
        />
      </div>
    );
  }
}
