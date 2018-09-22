import React from "react";
import fp from "lodash/fp";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const ProblemList = ({ problems }) => (
  <div>
    {problems.map(problem => (
      <div>{JSON.stringify(problem, null, 3)}</div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  problems: state.problems
});

const compose = fp.compose(
  connect(mapStateToProps),
  withRouter
);

export default compose(ProblemList);
