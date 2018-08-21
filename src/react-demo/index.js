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
  }
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
      todos.push({
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
    } else {
      alert('输入内容不能全是空格！')
      target.value = '';
    }
  };
  operate = (items, type) => {
    switch (type) {
      case 1:
        this.complate(items, true);
        break;
      case 2:
        this.complate(items, false);
        break;
      case 0:
        this.remove(items);
        break;
    }
  };
  clearAll = () => {
    const res = confirm('是否删除所有任务？');
    if (res) {
      this.setState({
        todos: []
      });
    }
  };
  complate = (items, status) => {
    const todos = this.state.todos;
    items.map(index => {
      todos[index].complated = status;
    });
    this.setState({
      todos: [...todos]
    });
  };
  remove = items => {
    const todos = this.state.todos;
    items.map(index => {
      todos.splice(index, 1);
    });
    this.setState({
      todos: [...todos]
    });
  };
  render() {
    return (
      <div>
        <Header
          data={TITLE}
          onClick={this.changeTag}
          current={this.state.current}
        />
        <Items
          data={this.state.todos}
          current={this.state.current}
          operate={this.operate}
        />
        <input type="text" id="newItemName" placeholder="请输入新任务的名称" />
        <input
          type="button"
          name="add"
          value="添加任务"
          onClick={this.addItem}
        />
        {this.state.todos.length > 0 ? (
          <input
            type="button"
            name="add"
            value="删除所有任务"
            onClick={this.clearAll}
          />
        ) : null}
      </div>
    );
  }
}
