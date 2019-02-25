import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Auth from './components/auth/Auth';
import Dashboard from './components/dashboard/Dashboard.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <div className="App">
        <Route component={Navbar} />

        <Switch>

          <Route exact path="/" component={Auth}/>
          <Route path="/dashboard" component={Dashboard}/>

        </Switch>

      </div>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
