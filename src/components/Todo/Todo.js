import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import { Tasks } from '../Counters/Counter';
import TodoList from './TodoList';
import add from '../../assets/add.svg';

class Todo extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { todos } = value;
          const Todo = todos.map(todo => {
            return (
              <TodoList
                key={todo.id}
                done={todo.done}
                id={todo.id}
                todoList={todo.task}
              />
            );
          });
          return (
            <div className="Wrapper">
              <div className="TodoList">{Todo}</div>
              <div className="SideMain">
                <div>
                  <Tasks />
                  {/* <h3>Done: {(Todo.done === true).length}</h3> */}
                </div>
                <h1>TODO'S</h1>
                <Link to="/">
                  <img src={add} alt="Add" />
                </Link>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Todo;
