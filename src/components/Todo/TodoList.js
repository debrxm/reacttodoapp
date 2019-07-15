import React, { Component } from 'react';
import { Consumer } from '../../context';
import outline from '../../assets/outline.svg';
import darkoutline from '../../assets/darkoutline.svg';
import checked from '../../assets/checked.svg';
import darkchecked from '../../assets/darkchecked.svg';
// import edit from '../../assets/edit.svg';
import bin from '../../assets/bin.svg';

class Todo extends Component {
  Ref = React.createRef();
  editable = () => {
    this.Ref.current.contentEditable = true;
  };
  handleEdit = (dispatch, id) => {
    const List = document.querySelectorAll('#p');

    let toDos = JSON.parse(localStorage.getItem('toDos'));

    for (let i = 0; i < List.length; i++) {
      for (let i = 0; i < toDos.length; i++) {
        if (toDos[i].id === id) {
          let todo = toDos[i];
          todo.task = List[i].textContent;
        }
      }
    }
    localStorage.setItem('toDos', JSON.stringify(toDos));
    toDos = JSON.parse(localStorage.getItem('toDos'));
    dispatch({ type: 'ADD_TODO', payload: toDos });
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

    let todoCount = 0;
    let count = [];
    let Tcount = [];
    for (let i = 0; i < toDos.length; i++) {
      count.push(toDos[i].done);
    }
    localStorage.setItem('tCount', JSON.stringify(count));
    Tcount = JSON.parse(localStorage.getItem('tCount'));
    let ont = Tcount;
    console.log(Tcount);
    const FinalTodoCount = ont.filter(tdcount => console.log(tdcount));
    console.log(FinalTodoCount);
    dispatch({ type: 'TODO_COUNT', payload: todoCount });
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
              className="List TodoL"
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
