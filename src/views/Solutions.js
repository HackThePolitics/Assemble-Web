import React, { Component } from 'react';
import { Layout, Heading } from '@shopify/polaris';
import SolutionsView from '../components/SolutionsView';
import TalkingPointList from '../components/TalkingPointList';
import AddATalkingPoint from '../components/AddATalkingPoint';
import ActionItemsList from '../components/ActionItemsList';
import TagList from '../components/TagList';
class Solutions extends Component {
  render() {
    return (
      <div className="app-container">
        <Layout>
          <Layout.Section>
            <Heading>The Closing of Riverdale Homeless Shelter</Heading>
            <span className="location-tag">MUNICIPAL</span>
          </Layout.Section>
          <Layout.Section>
            <div className="problem-title">
              {/* <Heading>{headerTitle}</Heading> */}
            </div>
          </Layout.Section>
          <Layout.Section>
            <SolutionsView />
          </Layout.Section>
        </Layout>
        <br />
        <AddATalkingPoint />
      </div>
    );
  }
}

export default Solutions;
