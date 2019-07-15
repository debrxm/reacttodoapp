import React, { Component } from 'react';
import { Consumer } from '../../context';
import outline from '../../assets/outline.svg';
import darkoutline from '../../assets/darkoutline.svg';
import checked from '../../assets/checked.svg';
import darkchecked from '../../assets/darkchecked.svg';

class Todo extends Component {
  Ref = React.createRef();
  editable = () => {
    this.Ref.current.contentEditable = true;
  };
  handleEdit = (dispatch, id) => {
    const List = document.querySelectorAll('#p');

    let items = JSON.parse(localStorage.getItem('items'));

    for (let i = 0; i < List.length; i++) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === id) {
          let item = items[i];
          item.item = List[i].textContent;
        }
      }
    }
    localStorage.setItem('items', JSON.stringify(items));
    items = JSON.parse(localStorage.getItem('items'));
    dispatch({ type: 'ADD_ITEM', payload: items });
  };
  handleKeyPress = event => {
    const List = document.querySelectorAll('#p');
    for (let i = 0; i < List.length; i++) {
      if (event.which === 13 || event.keyCode === 13) {
        List[i].blur();
      }
    }
  };
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
              className="List Hint"
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
              <p
                id="p"
                ref={this.Ref}
                onMouseEnter={this.editable}
                onBlur={this.handleEdit.bind(this, dispatch, id)}
                onKeyPress={this.handleKeyPress}
                style={done ? { color: '#b3b0b0' } : { coloor: '#ececec' }}
              >
                {shoppingList}
              </p>
              <span className="ShowHint">Tap twice to delete</span>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Todo;
