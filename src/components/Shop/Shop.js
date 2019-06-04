import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import { Shopping } from '../Counters/Counter';
import ShoppingLists from './ShoppingLists';
import add from '../../assets/add.svg';
import darkadd from '../../assets/darkadd.svg';

class Shop extends Component {
  render() {
    const Dark = {
      color: '#f2f2f2'
    };
    return (
      <Consumer>
        {value => {
          const { items, theme } = value;
          const Items = items.map(item => (
            <ShoppingLists
              key={item.id}
              id={item.id}
              done={item.done}
              shoppingList={item.item}
            />
          ));
          return (
            <div className="Wrapper">
              <div className="ShoppingList">{Items}</div>
              <div className="SideMain">
                <div>
                  <Shopping theme={theme} />
                </div>
                <h1 style={theme === 'Dark' ? Dark : { color: '#707070' }}>
                  Shopping Lists
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

export default Shop;
