import React, { Component } from 'react';
import fp from "lodash/fp";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';


class FirebaseTest extends Component {
  render() {
    return (
      <div>
        <h1>This is a test page for firebase connection</h1>
        <div>{JSON.stringify(this.props.firestore)}</div>
      </div>
    );
  }
}

// const compose = fp.compose;

export default compose(
  firestoreConnect(['problems']),
  connect((state, props) => ({
    firestore: state.firestore,
  })),
 )(FirebaseTest);
