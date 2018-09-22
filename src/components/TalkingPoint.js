import React, { Component } from 'react';
import { Card, Button} from '@shopify/polaris';

import './TalkingPoint.css';

class TalkingPoint extends Component {
  constructor() {
    super();
    this.state = {
      upvotes: 0, //should be coming from redux
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
      <div>
        <div>
          <Button icon="caretUp" onClick={() => this.onUpvoteClick()} />
          {this.state.upvotes}
        </div>
        <Card
          title="This is supposed to be a good talking point"
          sectioned
        >
          <p className="talking-point-comment">This is the first comment</p>
          <Button onClick={ () => this.loadMoreComments() }>View more comments</Button>
        </Card>
      </div>
    );
  }
}

export default TalkingPoint;
