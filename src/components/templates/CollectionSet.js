import React from 'react';

import DocSummary from './DocSummary';

const CollectionSet = ({ collection, type }) => (
  <div>
    {collection &&
      collection.map((item, index) => (
        <DocSummary key={index + 1} type={type} {...item} />
      ))}
  </div>
);

export default CollectionSet;
