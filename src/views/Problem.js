import React from 'react';
import fp from 'lodash/fp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button } from '@shopify/polaris';
import ProblemDetailPage from './ProblemDetailPage';

const ProblemDetail = ({ id, docDetails, history }) => {
  //Quick hack to prevent page from crashing. Crashes when loading before Firestore is loaded
  if (docDetails) {
    const {
      title,
      bannerImageUrl,
      location: { _lat, _long } = {},
      level
    } = docDetails;
    return (
      <ProblemDetailPage
        title={title}
        level={level}
        bannerImageUrl={bannerImageUrl}
      />
      // <div>
      //   <Button primary size="large" onClick={() => history.goBack()}>
      //     Go back
      //   </Button>
      //   <div>ID: {id}</div>
      //   <div>Description: {description}</div>
      //   {_lat && <div>Location: {`Lat:${_lat}. Long: ${_long}`}</div>}
      // </div>
    );
  }
  return <div>Oops.</div>;
};

const mapStateToProps = state => {
  const { id, type } = state.render.problems;
  return {
    id,
    docDetails: state.firestore.data[type] && state.firestore.data[type][id]
  };
};

export default fp.compose(
  connect(mapStateToProps),
  withRouter
)(ProblemDetail);
