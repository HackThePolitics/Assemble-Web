import React from "react";
import fp from "lodash/fp";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button } from "@shopify/polaris";

const ProblemDetail = ({ problemDoc, history }) => {
  const { id, description, location: { _lat, _long } = {} } = problemDoc;

  return (
    <div>
      <Button primary size="large" onClick={() => history.goBack()}>
        Go back
      </Button>
      <div>ID: {id}</div>
      <div>Description: {description}</div>
      {_lat && <div>Location: {`Lat:${_lat}. Long: ${_long}`}</div>}
    </div>
  );
};

const mapStateToProps = state => ({
  problemDoc: state.render.problem
});

export default fp.compose(
  connect(mapStateToProps),
  withRouter
)(ProblemDetail);
