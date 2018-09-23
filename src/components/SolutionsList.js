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
          <div className="solutions-list__arrow-up" />
          {this.state.upvotes}
        </div>
        <SolutionSummary
          className="solutions-summary__content"
          {...this.props.item}
        />
        <SolutionFollower />
      </div>
    );
  }
}

// Blank filter will default to show all

const SolutionsSummaryList = ({ solutions, filter }) => (
  <div className="solutions-summary-section">
    {solutions
      ? filterItemsToInclude(solutions, filter).map((item, index) => (
          <Solution key={index} item={item} />
        ))
      : null}
  </div>
);

const findRelatedSolutions = (currentProblemId, allSolutions) =>
  allSolutions.filter(solution => solution.problemId === currentProblemId);

export default compose(
  connect((state, _) => {
    const currentProblemId = state.render.problems.id;
    const allSolutions = state.firestore.ordered.solutions;
    findRelatedSolutions(currentProblemId, allSolutions);
    return {
      solutions: findRelatedSolutions(currentProblemId, allSolutions)
    };
  })
)(SolutionsSummaryList);
