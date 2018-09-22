import React, { Component } from 'react';
import TalkingPoint from './TalkingPoint';

class TalkingPointList extends Component {
  render() {
    return (
      <div>
        <TalkingPoint />
        <TalkingPoint />
        <TalkingPoint />
      </div>
    );
  }
}

export default TalkingPointList;
