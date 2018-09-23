import React, { Component } from 'react';
import { Button } from '@shopify/polaris';

class SolutionFollower extends Component {
  constructor() {
    super();
    this.state = {
      isFollowed: false,
    };
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <span style={{ marginRight: '15px'}}>
            {this.props.followers ? this.props.followers : 253} Followers
          </span>
          <span>
            <Button
              size="slim"
              primary={!this.state.isFollowed}
              onClick={() => this.setState({isFollowed: !this.state.isFollowed})}
            >
              {this.state.isFollowed ? 'Unfollow' : 'Follow'}
            </Button>
          </span>
        </div>
        <div style={{ textAlign: 'right', paddingTop: '10px'}}>Owner: Paige Sun</div>
        <div style={{ textAlign: 'right', paddingTop: '5px'}}>Created: 18 days ago</div>
      </div>
    );
  }
}

export default SolutionFollower;
