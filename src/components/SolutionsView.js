import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Heading } from '@shopify/polaris';
import classnames from 'classnames';

import SolutionsList from './SolutionsList';

const SolutionsView = ({
  headerTitle = 'The Closing of Riverdale Homeless Shelter',
  solutions,
  filter = undefined
}) => (
  <div className="collection-container">
    <div className="problem-title">
      <Heading>{headerTitle}</Heading>
    </div>
    <Heading>SOLUTIONS</Heading>
    <SolutionsList />
  </div>
);

export default compose(
  connect((state, _) => ({
    solutions: state.firestore.ordered.solutions
  }))
)(SolutionsView);
