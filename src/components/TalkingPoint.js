import React, { Component } from 'react';

import './TalkingPoint.css';

class TalkingPoint extends Component {
  constructor() {
    super();
    this.state = {
      upvotes: 238 + Math.floor(Math.random() * 100) //should be coming from redux
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
      <div className="talking-points-container">
        <div className="upvote-container" onClick={() => this.onUpvoteClick()}>
          <div className="arrow-up" />
          {this.state.upvotes}
        </div>
        <div className="user-profile-container">
          <img className="user-profile-image" src={this.props.user.image} />
          <div className="user-profile-name">{this.props.user.name}</div>
        </div>
        <div className="talking-point-card">
          <div className="talking-point-header">
            {this.props.user.talkingpoint}
          </div>
          <p className="talking-point-comment">
              This is a great idea!
          </p>
          <div
            className="talking-point-comment"
            onClick={() => this.loadMoreComments()}
          >
            View more comments
          </div>
        </div>
      </div>
    );
  }
}

export default TalkingPoint;
