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
      return <div />;
    }

    return (
      <div className="tag-list">
        <Stack>
          {this.props.tags.map(tag => (
            <Tag category={tag} />
          ))}
        </Stack>
      </div>
    );
  }
}

export default TagList;
