import React, { Component } from 'react';
import './Setting.css';
class Setting extends Component {
  defaultTheme() {
    console.log('Default');
  }
  darkTheme() {
    console.log('Dark');
  }
  mixTheme() {
    console.log('Mix');
  }
  render() {
    return (
      <div className="Setting">
        <div className="Theme">
          <h2>
            Themes:
            <span className="Default" onClick={this.defaultTheme}>
              Default
            </span>
            <span className="Dark" onClick={this.darkTheme}>
              Dark
            </span>
            <span className="Mix" onClick={this.mixTheme}>
              Mix
            </span>{' '}
          </h2>
        </div>
      </div>
    );
  }
}

export default Setting;
