import React from 'react';
import { Consumer } from '../../context';

export function Tasks() {
  return (
    <Consumer>
      {value => {
        const { todos } = value;
        const Todo = todos.map(todo => todo);
        return (
          <div>
            <h3>Tasks: {Todo.length}</h3>
          </div>
        );
      }}
    </Consumer>
  );
}
export function Shopping() {
  return (
    <Consumer>
      {value => {
        const { items } = value;
        const Items = items.map(item => item);
        return (
          <div>
            <h3>Shopping: {Items.length}</h3>
          </div>
        );
      }}
    </Consumer>
  );
}
export function Done() {
  return (
    <div>
      <h3>Done: {0}</h3>
    </div>
  );
}
