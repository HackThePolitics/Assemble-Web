import React from 'react';
import fp from 'lodash/fp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Layout } from '@shopify/polaris';
import { Card, CardImg, CardBody } from 'reactstrap';

import renderActions from '../../actions/render';

const goToDetailsPage = (history, id, type, updateIdToRender) => {
  history.push('/problem');
  updateIdToRender(id, type);
};

const DocSummary = ({ id, type, docDetails, updateIdToRender }) => {
  const { title, bannerImageUrl } = docDetails;
  return (
    <Layout.Section secondary>
      <Card>
        <CardImg top width="100%" src={bannerImageUrl} alt="Card image cap" />
        <CardBody>
          <Link to={`/${type}`}>{title}</Link>
        </CardBody>
      </Card>
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
