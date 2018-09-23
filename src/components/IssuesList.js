import React, { Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import CollectionSet from './templates/CollectionSet';
import { filterItemsToInclude } from '../utils';
import { PROBLEMS } from '../constants';

// Blank filter will default to show all
const IssuesList = ({ headerTitle, problems, filter = undefined, max = undefined}) => (
  <Fragment>
    {problems && (
      <CollectionSet
        collection={filterItemsToInclude(problems, filter, max)}
        type={PROBLEMS}
      />
    )}
  </Fragment>
);

export default compose(
  connect((state, _) => ({
    problems: state.firestore.ordered.problems
  }))
)(IssuesList);
