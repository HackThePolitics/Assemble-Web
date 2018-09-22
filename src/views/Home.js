import React, { Component } from "react";
import fp from "lodash/fp";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import IssuesList from "../components/IssuesList";
import SolutionsList from "../components/SolutionsList";

class Home extends Component {
  componentWillMount() {
    // if (!this.props.postalCode) {
    //   this.props.history.push("/postal");
    // }
  }

  render() {
    return (
      <div>
        <IssuesList headerTitle="Top Local Issues" filter="local" />
        <IssuesList headerTitle="Top Toronto Issues" filter="city" />
        <SolutionsList headerTitle="Hotly debated solutions" />
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
