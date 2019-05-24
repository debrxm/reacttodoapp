import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import { Shopping } from '../Counters/Counter';
import ShoppingLists from './ShoppingLists';
import add from '../../assets/add.svg';
import './Shop.css';

class Shop extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { items } = value;
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
                  <Shopping />
                  {/* <h3>Checked: {0}</h3> */}
                </div>
                <h1>Shopping Lists</h1>
                <Link to="/">
                  <img src={add} alt="Add" />
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
