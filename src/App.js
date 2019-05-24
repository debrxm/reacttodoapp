import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';
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
        <div className="App">
          <Sidenav />
          <Bottomnav />
          <div className="Main">
            <nav>
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
      </Router>
    </Provider>
  );
}

export default App;
