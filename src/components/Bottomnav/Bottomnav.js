import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import checked from '../../assets/checked.svg';
import shop from '../../assets/shop.svg';
import settings from '../../assets/settings.svg';
import './Bottomnav.css';

class Bottomnav extends Component {
  render() {
    return (
      <div className="Bottomnav">
        <Link to="/todo" className="Link MenuItem" href="#!">
          <img src={checked} alt="checked" />
        </Link>
        <Link to="/shop" className="Link MenuItem" href="#!">
          <img src={shop} alt="shop" />
        </Link>
        <Link to="/setting" className="Link MenuItem" href="#!">
          <img src={settings} alt="settings" />
        </Link>
      </div>
    );
  }
}

export default Bottomnav;
