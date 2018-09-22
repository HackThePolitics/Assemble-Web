import React, { Component } from 'react';
import { Button } from '@shopify/polaris';

class SolutionFollower extends Component {
  render() {
    return (
      <div>
        <span>{this.props.followers ? this.props.followers : 253} Followers</span>
        <Button primary>Follow</Button>
        <div>Owner: Paige Sun</div>
        <div>Created: 18 days ago</div>
      </div>
    );
  }
}

export default SolutionFollower;
