import React, { Component } from 'react';
import { Badge } from '@shopify/polaris';

const options = {
  safety: 'warning',
  housing: 'info',
  people: 'attention',
  geography: 'new',
}

class Tag extends Component {
  render() {
    const color = options[this.props.category.toLowerCase()];
    return (
      <Badge status={color}>{this.props.category.toUpperCase()}</Badge>
    );
  }
}

export default Tag;
