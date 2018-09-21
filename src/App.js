import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Headers';
import Home from './views/Home';
import PostalCode from './views/PostalCode';
import Solutions from './views/Solutions';
import Test from './views/Test';

import firebaseConfig from './config/firebase';

import './App.css';

class App extends Component {
  render() {
    if (!firebaseConfig) {
      return <h1>Please config firebase under config/firebase.js</h1>;
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/problems/:problemId/solutions" component={Solutions} />
          <Route path="/postal" component={PostalCode} />
          <Route path="/test" component={Test} />
        </Switch>
      </div>
    );
  }
}

export default App;
