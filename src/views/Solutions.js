import React, { Component } from 'react';
import { Layout, Card, FormLayout, TextField, Button } from '@shopify/polaris';
import TalkingPointList from '../components/TalkingPointList';
import AddATalkingPoint from '../components/AddATalkingPoint';

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
        <br/>
        <AddATalkingPoint/>
      </div>
    );
  }
}

export default Solutions;
