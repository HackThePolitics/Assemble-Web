import React, { Component } from 'react';
import TalkingPoint from './TalkingPoint';

class TalkingPointList extends Component {
  render() {
    return (
      <div>
        {this.props.userProfiles.map(user => (
          <TalkingPoint user={user} />
        ))}
      </div>
    );
  }
}

export default TalkingPointList;
