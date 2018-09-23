import React from 'react';
import fp from 'lodash/fp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Layout } from '@shopify/polaris';
import { Card, CardImg, CardBody } from 'reactstrap';

import renderActions from '../../actions/render';

const goToDetailsPage = (history, id, type, updateIdToRender) => {
  history.push(`/${type}`);
  updateIdToRender(id, type);
};

const DocSummary = ({ id, type, docDetails, history, updateIdToRender }) => {
  const { title, bannerImageUrl } = docDetails;
  return (
    <Layout.Section secondary>
      <div
        className="card"
        style={{ cursor: 'pointer' }}
        onClick={() => goToDetailsPage(history, id, type, updateIdToRender)}
      >
        <div
          className="card-img-top doc-summary-image"
          style={{
            backgroundImage: `url("${bannerImageUrl}")`
          }}
          alt="Card image cap"
        />
        <div className="card-body" style={{ height: '63px' }}>
          <div>{title}</div>
        </div>
      </div>
    </Layout.Section>
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
