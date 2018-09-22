import React, { Component } from 'react';
import { Layout, } from '@shopify/polaris';
import TalkingPointList from '../components/TalkingPointList';

class Solutions extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Layout.Section secondary>
            <TalkingPointList />
          </Layout.Section>
          <Layout.Section secondary>
            <TalkingPointList />
          </Layout.Section>
        </Layout>
      </div>
    );
  }
}

export default Solutions;
