import React from 'react';
import { Consumer } from '../../context';

const Dark = {
  color: '#f2f2f2'
};

export const Tasks = ({ theme }) => {
  return (
    <Consumer>
      {value => {
        const { todos } = value;
        const Todo = todos.map(todo => todo);
        return (
          <div>
            <h3
              className="Counterh3"
              style={theme === 'Dark' ? Dark : { color: '#707070' }}
            >
              Tasks: {Todo.length}
            </h3>
          </div>
        );
      }}
    </Consumer>
  );
};
export const Shopping = ({ theme }) => {
  // const Dark = {
  //   color: '#fff'
  // };
  return (
    <Consumer>
      {value => {
        const { items } = value;
        const Items = items.map(item => item);
        return (
          <div>
            <h3
              className="Counterh3"
              style={theme === 'Dark' ? Dark : { color: '#707070' }}
            >
              Shopping: {Items.length}
            </h3>
          </div>
        );
      }}
    </Consumer>
  );
};
export const Done = () => {
  return (
    <Consumer>
      {value => {
        const { todoCount } = value;
        return (
          <div>
            <h3 className="Counterh3">Done: {todoCount}</h3>
          </div>
        );
      }}
    </Consumer>
  );
};
