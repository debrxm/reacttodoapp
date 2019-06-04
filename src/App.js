import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider, Consumer } from './context';
import Sidenav from './components/Sidenav/Sidenav';
import Bottomnav from './components/Bottomnav/Bottomnav';
import AddTodo from './components/AddTodo/AddTodo';
import Todo from './components/Todo/Todo';
import Shop from './components/Shop/Shop';
import Setting from './components/Setting/Setting';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <Consumer>
          {value => {
            const { theme } = value;
            return (
              <div className="App">
                <Sidenav />
                <Bottomnav />
                <div
                  style={
                    theme === 'Dark'
                      ? { background: '#2b2c31' }
                      : { background: '#41b0d4' }
                  }
                  className="Main"
                >
                  <nav
                    style={
                      theme === 'Dark'
                        ? {
                            backgroundImage:
                              'linear-gradient(to right, #ececec 0%, #16171a 100%)',
                            borderColor: '#2b2c31',
                            color: '#ececec'
                          }
                        : {
                            backgroundImage:
                              'linear-gradient(to right, #41b0d4 0%, #21586a 100%)'
                          }
                    }
                  >
                    <h2>Task Manager</h2>
                  </nav>
                  <Switch>
                    <Route exact path="/" component={AddTodo} />
                    <Route exact path="/todo" component={Todo} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/setting" component={Setting} />
                  </Switch>
                </div>
              </div>
            );
          }}
        </Consumer>
      </Router>
    </Provider>
  );
}

export default App;
