import React, { Component } from 'react';
import { Layout, Card, FormLayout, TextField, Button } from '@shopify/polaris';
import TalkingPointList from '../components/TalkingPointList';
import AddATalkingPoint from '../components/AddATalkingPoint';
import ActionItemsList from '../components/ActionItemsList';
import TagList from '../components/TagList';

class Solutions extends Component {
  render() {
    return (
      <div>
        <TagList tags={['housing', 'geography', 'safety', 'people']} />
        <Layout>
          <Layout.Section>
            <ActionItemsList />
          </Layout.Section>
        </Layout>
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
