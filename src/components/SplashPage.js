import React, { Component } from 'react';
import SplashPageImages from './SplashPageImages';
import { withRouter } from 'react-router';

class SplashPage extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <SplashPageImages />
        </div>
        <h2> Reimagined Disco launched 🚀</h2>
        <button className="btn btn-primary">
          Login
        </button>
      </div>
    )
  }
}

export default withRouter(SplashPage)