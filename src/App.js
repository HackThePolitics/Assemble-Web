import React, { Component } from 'react';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import Header from './components/Header';
import Home from './views/Home';
import PostalCode from './views/PostalCode';
import Problem from './views/Problem';
import Test from './views/Test';
import FirebaseTest from './views/FirebaseTest';
import SolutionDetails from './views/SolutionDetails';
import Enlightment from './views/Enlightment';
import Solutions from './views/Solutions';

import firebaseConfig from './config/firebase';

import './App.css';

class App extends Component {
  render() {
    if (!firebaseConfig) {
      return <h1>Please config firebase under config/firebase.js</h1>;
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/solutions" component={SolutionDetails} />
          {/* <Route path="/problems/:problemId/solutions" component={Solutions} /> */}
          <Route path="/problems" component={Problem} />
          <Route path="/postal" component={PostalCode} />
          <Route path="/test" component={Test} />
          <Route path="/firebase-test" component={FirebaseTest} />
          <Route path="/enlightment" component={Enlightment} />
        </Switch>
      </div>
    );
  }
}

export default compose(firestoreConnect(['problems', 'solutions']))(App);
