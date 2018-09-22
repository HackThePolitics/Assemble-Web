import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import CollectionSet from './templates/CollectionSet';
import { filterItemsToInclude } from '../utils';
import { PROBLEMS } from '../constants';

import './Base.css';

// Blank filter will default to show all
const IssuesList = ({ headerTitle, problems, filter = undefined }) => (
  <div className="collection-container">
    <h1>{headerTitle}</h1>
    {problems && (
      <CollectionSet
        collection={filterItemsToInclude(problems, filter)}
        type={PROBLEMS}
      />
    )}
  </div>
);

export default compose(
  connect((state, _) => ({
    problems: state.firestore.ordered.problems
  }))
)(IssuesList);
