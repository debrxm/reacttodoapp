import React, { Component } from 'react';
import { Consumer } from '../../context';
import outline from '../../assets/outline.svg';
import darkoutline from '../../assets/darkoutline.svg';
import checked from '../../assets/checked.svg';
import darkchecked from '../../assets/darkchecked.svg';
// import edit from '../../assets/edit.svg';

class Todo extends Component {
  handleDone = (dispatch, id) => {
    let items = JSON.parse(localStorage.getItem('items'));
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        let item = items[i];
        item.done = !item.done;
      }
    }
    localStorage.setItem('items', JSON.stringify(items));
    items = JSON.parse(localStorage.getItem('items'));
    dispatch({ type: 'ADD_ITEM', payload: items });
  };
  handleDelete = (id, dispatch) => {
    let items = JSON.parse(localStorage.getItem('items'));
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items.splice(i, 1);
      }
    }
    localStorage.setItem('items', JSON.stringify(items));
    items = JSON.parse(localStorage.getItem('items'));
    dispatch({ type: 'DELETE_ITEM', payload: items });
  };
  render() {
    const { id, shoppingList, done } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch, theme } = value;
          return (
            <div
              style={
                theme === 'Dark'
                  ? { background: '#cecece', color: '#222222' }
                  : { coloor: '#f2f2f2' }
              }
              className="List"
              onDoubleClick={this.handleDelete.bind(this, id, dispatch)}
            >
              <span onClick={this.handleDone.bind(this, dispatch, id)}>
                {done ? (
                  <img
                    className="Check"
                    src={theme === 'Dark' ? darkchecked : checked}
                    alt="outline"
                  />
                ) : (
                  <img
                    className="Check"
                    src={theme === 'Dark' ? darkoutline : outline}
                    alt="outline"
                  />
                )}
              </span>{' '}
              <p style={done ? { color: '#b3b0b0' } : { coloor: '#ececec' }}>
                {shoppingList}
              </p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Todo;
