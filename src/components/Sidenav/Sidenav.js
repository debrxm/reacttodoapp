import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import menu from '../../assets/menu.svg';
import darkmenu from '../../assets/darkmenu.svg';
import checked from '../../assets/checked.svg';
import darkchecked from '../../assets/darkchecked.svg';
import shop from '../../assets/shop.svg';
import darkshop from '../../assets/darkshop.svg';
import settings from '../../assets/settings.svg';
import darksettings from '../../assets/darksettings.svg';
import './Sidenav.css';

class Sidenav extends Component {
  state = {
    show: false
  };
  ToggleMenu = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <Consumer>
        {value => {
          const { theme } = value;
          return (
            <div
              className="Sidenav"
              style={this.state.show ? { width: '230px' } : { width: '90px' }}
            >
              <div
                style={
                  theme === 'Dark'
                    ? { background: '#ececec', borderColor: '#2b2c31' }
                    : { background: '#41b0d4' }
                }
                className="Menu"
              >
                <div className="MenuItem">
                  <img
                    src={theme === 'Dark' ? darkmenu : menu}
                    alt="menu"
                    onClick={this.ToggleMenu}
                  />
                </div>
              </div>
              <div className="Action">
                <Link to="/todo" className="Link MenuItem" href="#!">
                  <img
                    src={theme === 'Dark' ? darkchecked : checked}
                    alt="checked"
                  />{' '}
                  {this.state.show ? <p>ToDo</p> : null}
                </Link>
                <Link to="/shop" className="Link MenuItem" href="#!">
                  <img src={theme === 'Dark' ? darkshop : shop} alt="shop" />{' '}
                  {this.state.show ? <p>Shopping</p> : null}
                </Link>
                <Link to="/setting" className="Span MenuItem" href="#!">
                  <img
                    src={theme === 'Dark' ? darksettings : settings}
                    alt="settings"
                  />{' '}
                  {this.state.show ? <p>Settings</p> : null}
                </Link>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Sidenav;
