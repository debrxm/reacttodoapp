import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menu from '../../assets/menu.svg';
import checked from '../../assets/checked.svg';
import shop from '../../assets/shop.svg';
import settings from '../../assets/settings.svg';
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
      <div
        className="Sidenav"
        style={this.state.show ? { width: '230px' } : { width: '90px' }}
      >
        <div className="Menu">
          <div className="MenuItem">
            <img src={menu} alt="menu" onClick={this.ToggleMenu} />
          </div>
        </div>
        <div className="Action">
          <Link to="/todo" className="Link MenuItem" href="#!">
            <img src={checked} alt="checked" />{' '}
            {this.state.show ? <p>ToDo</p> : null}
          </Link>
          <Link to="/shop" className="Link MenuItem" href="#!">
            <img src={shop} alt="shop" />{' '}
            {this.state.show ? <p>Shopping</p> : null}
          </Link>
          <Link to="/setting" className="Span MenuItem" href="#!">
            <img src={settings} alt="settings" />{' '}
            {this.state.show ? <p>Settings</p> : null}
          </Link>
        </div>
      </div>
    );
  }
}

export default Sidenav;
