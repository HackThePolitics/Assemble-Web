import React, { Component } from 'react';
import { Stack } from '@shopify/polaris';
import Tag from './Tag';

// const options = {
//   safety: 'warning',
//   housing: 'info',
//   people: 'attention',
//   geography: 'new',
// }

class TagList extends Component {
  render() {
    if (!Array.isArray(this.props.tags)) {
      return <div></div>;
    }

    return (
      <Stack>
        {
          this.props.tags.map(tag => <Tag category={tag}/>)
        }
      </Stack>
    );
  }
}

export default TagList;
