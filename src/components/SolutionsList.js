import React, { Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Heading } from '@shopify/polaris';
import Tag from './Tag';
import SolutionSummary from './SolutionSummary';
import SolutionFollower from './SolutionFollower';
import './SolutionsList.css';

import { filterItemsToInclude } from '../utils';

class Solution extends React.Component {
  constructor({ upvotes }) {
    super();
    this.state = {
      upvotes: upvotes || 238 + Math.floor(Math.random() * 100) //should be coming from redux
    };
  }

  loadMoreComments() {
    console.log('supposed to load more comments');
  }

  onUpvoteClick() {
    console.log('upvotesss+++');

    const upvotes = this.state.upvotes + 1;
    this.setState({ upvotes });
  }

  render() {
    return (
      <div className="solutions-list-item">
        <div className="upvote-container" onClick={() => this.onUpvoteClick()}>
          <div className="arrow-up" />
          {this.state.upvotes}
        </div>
        <SolutionSummary className="solutions-summary__content" />
        <SolutionFollower />
      </div>
    );
  }
}

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
