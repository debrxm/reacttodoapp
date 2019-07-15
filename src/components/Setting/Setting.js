import React, { Component } from 'react';
import { Consumer } from '../../context';
import './Setting.css';
class Setting extends Component {
  handleTheme(theme, dispatch) {
    let Theme = localStorage.getItem('theme');
    const newTheme = theme;
    Theme = newTheme;
    localStorage.setItem('theme', Theme);
    Theme = localStorage.getItem('theme');
    dispatch({ type: 'THEME', payload: Theme });
  }
  handleDefaultTheme = dispatch => {
    this.handleTheme('Default', dispatch);
  };
  handleDarkTheme = dispatch => {
    this.handleTheme('Dark', dispatch);
  };
  // handleMixTheme = dispatch => {
  //   this.handleTheme('Mix', dispatch);
  // };
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, theme } = value;
          return (
            <div className="Setting">
              <h2
                style={
                  theme === 'Dark' ? { color: '#fff' } : { color: '#707070' }
                }
              >
                Themes
              </h2>
              <span
                style={
                  theme === 'Default'
                    ? { borderColor: '#707070' }
                    : { borderColor: 'transparent' }
                }
                onClick={this.handleDefaultTheme.bind(this, dispatch)}
                className="Default"
              >
                Default
              </span>{' '}
              <span
                style={
                  theme === 'Dark'
                    ? { borderColor: '#ececec' }
                    : { borderColor: 'transparent' }
                }
                onClick={this.handleDarkTheme.bind(this, dispatch)}
                className="Dark"
              >
                Dark
              </span>{' '}
              <span
                style={
                  theme === 'Mix'
                    ? { borderColor: ' #ececec' }
                    : { borderColor: 'transparent' }
                }
                className="Mix"
              >
                Mix
              </span>
              <div className="About">
                <h3
                  style={
                    theme === 'Dark' ? { color: '#fff' } : { color: '#707070' }
                  }
                >
                  Version <span>1.3</span>{' '}
                </h3>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Setting;
