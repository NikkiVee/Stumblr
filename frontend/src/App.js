import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <div className="App">
        <Route component={Navbar} />

        <Switch>

          <Route path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/profile" component={Profile}/>
        </Switch>

      </div>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
