import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import './Main.css';

const Main = () => {
  return (
    <Router>
      <div className="Main">
        <nav>
          <h2>Logo</h2>
        </nav>
        <Switch>
          <Route exact path="/" component={AddTodo} />
          <Route exact path="/todo" component={Todo} />
        </Switch>

        {/* <Shop /> */}
      </div>
    </Router>
  );
};

export default Main;
