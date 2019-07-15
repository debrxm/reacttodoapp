import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'THEME':
      return {
        ...state,
        theme: action.payload
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: action.payload
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: action.payload
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: action.payload
      };
    case 'ADD_ITEM':
      return {
        ...state,
        items: action.payload
      };
    case 'TODO_COUNT':
      return {
        ...state,
        todoCount: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    theme: 'default',
    todos: [],
    todoCount: 0,
    items: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    if (
      localStorage.getItem('toDos') === null &&
      localStorage.getItem('items') === null &&
      localStorage.getItem('theme') === null
    ) {
      // Initialize new empty array
      let toDos = [];
      let items = [];
      let theme = 'default';
      // Add to array
      // Set to localStorage
      localStorage.setItem('toDos', JSON.stringify(toDos));
      localStorage.setItem('items', JSON.stringify(items));
      localStorage.setItem('theme', theme);
    }
    const toDos = JSON.parse(localStorage.getItem('toDos'));
    this.setState({ todos: toDos });
    const items = JSON.parse(localStorage.getItem('items'));
    this.setState({ items: items });
    const theme = localStorage.getItem('theme');
    this.setState({ theme: theme });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
