import React, { Component } from 'react';
import './style/App.css';
import SplashPage from './SplashPage';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={SplashPage}/>
      </Switch>
    );
  }
}

export default App;
