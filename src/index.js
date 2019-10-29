import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import UserDetails from './UserDetails';
import User from './User';

const routing = (
    <Router>
      <div>
        <div className="header">
      <Link to="/user">User</Link>
      <Link to="/userdetails">UserDetails</Link>
      </div>
        <Switch>
          <Route path="/" component={User} />
          <Route path="/user" component={User} />
          <Route path="/userdetails" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));


