import React from 'react';
import { Layout } from '@shopify/polaris';

import DocSummary from './DocSummary';

const CollectionSet = ({ collection, type }) => (
  <Layout>
    {collection &&
      collection.map((item, index) => (
        <DocSummary key={index + 1} type={type} {...item} />
      ))}
  </Layout>
);

export default CollectionSet;
