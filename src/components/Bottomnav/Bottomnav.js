import React from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import checked from '../../assets/checked.svg';
import darkchecked from '../../assets/darkchecked.svg';
import shop from '../../assets/shop.svg';
import darkshop from '../../assets/darkshop.svg';
import settings from '../../assets/settings.svg';
import darksettings from '../../assets/darksettings.svg';
import './Bottomnav.css';

const Bottomnav = () => {
  return (
    <Consumer>
      {value => {
        const { theme } = value;
        return (
          <div className="Bottomnav">
            <Link to="/todo" className="Link MenuItem" href="#!">
              <img
                src={theme === 'Dark' ? darkchecked : checked}
                alt="checked"
              />
            </Link>
            <Link to="/shop" className="Link MenuItem" href="#!">
              <img src={theme === 'Dark' ? darkshop : shop} alt="shop" />
            </Link>
            <Link to="/setting" className="Link MenuItem" href="#!">
              <img
                src={theme === 'Dark' ? darksettings : settings}
                alt="settings"
              />
            </Link>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Bottomnav;
