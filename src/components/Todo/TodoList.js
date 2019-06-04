import React, { Component } from 'react';
import { Consumer } from '../../context';
import outline from '../../assets/outline.svg';
import darkoutline from '../../assets/darkoutline.svg';
import checked from '../../assets/checked.svg';
import darkchecked from '../../assets/darkchecked.svg';
// import edit from '../../assets/edit.svg';
import bin from '../../assets/bin.svg';

class Todo extends Component {
  handleDone = (dispatch, id) => {
    let toDos = JSON.parse(localStorage.getItem('toDos'));
    for (let i = 0; i < toDos.length; i++) {
      if (toDos[i].id === id) {
        let todo = toDos[i];
        todo.done = !todo.done;
      }
    }

    localStorage.setItem('toDos', JSON.stringify(toDos));
    toDos = JSON.parse(localStorage.getItem('toDos'));
    dispatch({ type: 'ADD_TODO', payload: toDos });
  };
  handleDelete = (id, dispatch) => {
    let toDos = JSON.parse(localStorage.getItem('toDos'));
    for (let i = 0; i < toDos.length; i++) {
      if (toDos[i].id === id) {
        toDos.splice(i, 1);
      }
    }
    localStorage.setItem('toDos', JSON.stringify(toDos));
    toDos = JSON.parse(localStorage.getItem('toDos'));
    dispatch({ type: 'DELETE_TODO', payload: toDos });
  };
  render() {
    const { id, todoList, done } = this.props;
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
                className="TodoP"
                style={done ? { color: '#b3b0b0' } : { coloor: '#ececec' }}
              >
                {todoList}
              </p>
              <span className="Eddit">
                {/* <img src={edit} alt="edit" /> */}
                <img
                  src={bin}
                  alt="bin"
                  onClick={this.handleDelete.bind(this, id, dispatch)}
                />
              </span>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Todo;
