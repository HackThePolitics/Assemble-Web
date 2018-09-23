import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const EachProblem = ({ id, description }) => (
  <div>
    <div>ID: {id}</div>
    <div>Description: {description}</div>
  </div>
);

const FirebaseTest = ({ problems }) => (
  <div>
    <h1>This is a test page for firebase connection</h1>
    {problems &&
      problems.map((problem, index) => (
        <div key={index + 1}>
          <EachProblem {...problem} />
        </div>
      ))}
  </div>
);

export default compose(
  firestoreConnect(["problems"]),
  connect((state, _) => ({
    problems: state.firestore.ordered.problems
  }))
)(FirebaseTest);
