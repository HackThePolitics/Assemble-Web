import React from 'react';
import fp from 'lodash/fp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button } from '@shopify/polaris';

import renderActions from '../../actions/render';

const goToDetailsPage = (history, id, type, updateIdToRender) => {
  history.push('/problem');
  updateIdToRender(id, type);
};

const DocSummary = ({ id, type, docDetails, history, updateIdToRender }) => {
  const { description, location: { _lat, _long } = {} } = docDetails;
  return (
    <div>
      <div>ID: {id}</div>
      <div>Description: {description}</div>
      {_lat && <div>Location: {`Lat:${_lat}. Long: ${_long}`}</div>}
      <Button
        primary
        size="large"
        onClick={() => goToDetailsPage(history, id, type, updateIdToRender)}
      >
        See Details
      </Button>
    </div>
  );
};

const mapStateToProps = (state, { id, type }) => {
  return {
    docDetails: state.firestore.data[type] && state.firestore.data[type][id],
    id,
    type
  };
};

const mapDispatchToProps = {
  updateIdToRender: renderActions.loadIdForRender
};

export default fp.compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(DocSummary);
