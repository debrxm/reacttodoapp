import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import { Tasks } from '../Counters/Counter';
import TodoList from './TodoList';
import add from '../../assets/add.svg';
import darkadd from '../../assets/darkadd.svg';

class Todo extends Component {
  render() {
    const Dark = {
      color: '#f2f2f2'
    };
    return (
      <Consumer>
        {value => {
          const { todos, theme } = value;
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
                  <Tasks theme={theme} />
                  {/* <h3>Done: {(Todo.done === true).length}</h3> */}
                </div>
                <h1 style={theme === 'Dark' ? Dark : { color: '#707070' }}>
                  TODO'S
                </h1>
                <Link to="/">
                  <img src={theme === 'Dark' ? darkadd : add} alt="Add" />
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
