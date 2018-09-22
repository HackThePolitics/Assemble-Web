import React from "react";
import fp from "lodash/fp";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button } from "@shopify/polaris";

import renderActions from "../../actions/render";

const goToDetailsPage = (history, docDetails, loadDocDetailsToRender) => {
  history.push("/problem");
  loadDocDetailsToRender(docDetails);
};

const DocSummary = ({ docDetails, history, loadDocDetailsToRender }) => {
  const { id, description, location: { _lat, _long } = {} } = docDetails;
  return (
    <div>
      <div>ID: {id}</div>
      <div>Description: {description}</div>
      {_lat && <div>Location: {`Lat:${_lat}. Long: ${_long}`}</div>}
      <Button
        primary
        size="large"
        onClick={() =>
          goToDetailsPage(history, docDetails, loadDocDetailsToRender)
        }
      >
        See Details
      </Button>
    </div>
  );
};

const mapDispatchToProps = {
  loadDocDetailsToRender: renderActions.loadProblemContent
};

export default fp.compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withRouter
)(DocSummary);

//compose(withRouter)(DocSummary);
