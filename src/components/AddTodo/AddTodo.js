import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Tasks, Shopping } from '../Counters/Counter';
import './AddTodo.css';

class AddTodo extends Component {
  state = {
    input: ''
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  addTodo = dispatch => {
    const { input } = this.state;
    const random = Math.random() * 99999;
    if (input === '' || input === ' ') {
      return;
    }

    const newTodo = {
      id: random,
      done: false,
      task: input
    };
    let toDos = JSON.parse(localStorage.getItem('toDos'));
    // Add todoList to array
    toDos.push(newTodo);
    // Re-set back to localStorage
    localStorage.setItem('toDos', JSON.stringify(toDos));

    toDos = JSON.parse(localStorage.getItem('toDos'));
    dispatch({ type: 'ADD_TODO', payload: toDos });
    this.setState({
      input: ''
    });
  };
  addShop = dispatch => {
    const { input } = this.state;
    if (input === '' || input === ' ') {
      return;
    }
    const random = Math.random() * 99999;
    const newItem = {
      id: random,
      done: false,
      item: input
    };
    let items = JSON.parse(localStorage.getItem('items'));
    // Add todoList to array
    items.push(newItem);
    // Re-set back to localStorage
    localStorage.setItem('items', JSON.stringify(items));
    items = JSON.parse(localStorage.getItem('items'));
    dispatch({ type: 'ADD_ITEM', payload: items });
    this.setState({
      input: ''
    });
  };
  render() {
    const { input } = this.state;
    const todo = {
      borderRadius: '30px 0 0 30px',
      marginRight: '5px'
    };
    const shop = {
      borderRadius: '0 30px 30px 0',
      marginLeft: '5px'
    };
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="AddTodo">
              <div className="Form">
                <div>
                  <input
                    name="input"
                    value={input}
                    autoFocus
                    placeholder="Add Todo / Shopping List"
                    type="text"
                    onChange={this.handleChange}
                  />
                  <div>
                    <span
                      className="Btn"
                      style={todo}
                      onClick={this.addTodo.bind(this, dispatch)}
                    >
                      <span>Todo</span> <i className="fa fa-plus" />
                    </span>
                    <span
                      className="Btn"
                      style={shop}
                      onClick={this.addShop.bind(this, dispatch)}
                    >
                      <span>Shop</span> <i className="fa fa-plus" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="AddtodoSideMain">
                <div className="Flex-item">
                  <Tasks />
                  <Shopping />
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddTodo;
