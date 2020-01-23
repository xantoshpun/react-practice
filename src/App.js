import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import User from './containers/user';
import Others from './components/others';
import SingleUser from './components/singleuser';
import SignUp from './components/signup';
import { Route, NavLink, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <div className="App ">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <NavLink class="nav-link" to="/user">View</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/others">Others</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/signup">Signup</NavLink>
              </li>
            </ul>
          </div>
        </nav>


        <h1> Welcome to the site</h1>
        <Switch>
          <Route path="/singleuser/:id" component={SingleUser} />
          <Route path="/user" component={User} />
          <Route path="/others" component={Others} />
          <Route path="/signup" component={SignUp} />
        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default App;
