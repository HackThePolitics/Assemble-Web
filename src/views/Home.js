import React, { Component } from "react";
import fp from "lodash/fp";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import ProblemList from "../components/ProblemList";

class Home extends Component {
  componentWillMount() {
    // if (!this.props.postalCode) {
    //   this.props.history.push("/postal");
    // }
  }

  render() {
    return (
      <div>
        This is home. Here is Problem List: <ProblemList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postalCode: state.district.postalCode
  };
};

const compose = fp.compose(
  connect(mapStateToProps),
  withRouter
);

export default compose(Home);
