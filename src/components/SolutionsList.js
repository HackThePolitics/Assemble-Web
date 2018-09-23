import React, { Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Heading } from '@shopify/polaris';
import Tag from './Tag';
import SolutionSummary from './SolutionSummary';
import SolutionFollower from './SolutionFollower';
import './SolutionsList.css';

import { filterItemsToInclude } from '../utils';

const Solution = ({ upvotes = 1049, title }) => (
  <div className="solutions-list-item">
    <div className="solutions-summary__upvotes">
      <div className="arrow-up" />
      <p>{upvotes}</p>
    </div>
    <SolutionSummary className="solutions-summary__content" />
    <SolutionFollower />
  </div>
);

// Blank filter will default to show all

const SolutionsSummaryList = ({ solutions, filter }) => (
  <div className="solutions-summary-section">
    {solutions
      ? filterItemsToInclude(solutions, filter).map(
          ({ title, level }, index) => (
            <Solution key={index} title={title} level={level} />
          )
        )
      : null}
    {/* <Solution title="Relocate Homeless Shelter to Jones St. and First Ave." />
    <Solution title="Relocate Homeless Shelter to Jones St. and First Ave." /> */}
  </div>
);

// export default SolutionsSummaryList;

export default compose(
  connect((state, _) => ({
    solutions: state.firestore.ordered.solutions
  }))
)(SolutionsSummaryList);
