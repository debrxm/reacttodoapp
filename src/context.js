import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    doneCount: [],
    todos: [],
    items: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    if (
      localStorage.getItem('toDos') === null &&
      localStorage.getItem('items') === null
    ) {
      // Initialize new empty array
      let toDos = [];
      let items = [];
      // Add to array
      // Set to localStorage
      localStorage.setItem('toDos', JSON.stringify(toDos));
      localStorage.setItem('items', JSON.stringify(items));
    }
    const toDos = JSON.parse(localStorage.getItem('toDos'));
    this.setState({ todos: toDos });
    const items = JSON.parse(localStorage.getItem('items'));
    this.setState({ items: items });
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
