import React, { Component } from 'react';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(e) {
    // called destructruing, equivalent to const value = e.target.value
    const {value} = e.target;
    this.setState({newTodo: value});
  }

  handleClick(e) {
    e.preventDefault();
    //method #1
    // const todos = [...this.state.todos, this.state.newTodo]
    // this.setState({todos, newTodo: ''}); // todos equiv todos: todos
    // <input onChange={this.handleChange.bind(this)} value={this.state.newTodo} type="text" placeholder="new todo"/>


    // method #2
    const todos = [...this.state.todos, this.input.value];
    this.input.value = '';
    this.setState({todos});
    // replace input in render to:
      // <input
      //   ref={node => this.input = node}
      //   type="text" placeholder="new todo"/>
  }

  removeTodo(i) {
    const todos = [...this.state.todos.slice(0, i), ...this.state.todos.slice(i + 1)];
    this.setState({todos});
  }
  // rerenders entire template every time state changes
  // render has to return only one JSX component
  render() {
    return (
      <div>
        <form>
          <input
            ref={node => this.input = node}
            type="text" placeholder="new todo"/>
          <button onClick={this.handleClick.bind(this)}>create</button>
        </form>
        <ul>
          {this.state.todos.map((todo, i) => (
            <li onClick={() => this.removeTodo.call(this, i)}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}
