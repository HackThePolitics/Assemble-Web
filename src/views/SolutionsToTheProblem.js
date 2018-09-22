import React, { Component } from 'react';
import { Layout, TextContainer, Heading } from '@shopify/polaris';
import TalkingPointList from '../components/TalkingPointList';
import AddATalkingPoint from '../components/AddATalkingPoint';
import SolutionFollower from '../components/SolutionFollower';
import SolutionSummary from '../components/SolutionSummary';

class SolutionsToTheProblem extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Layout.Section>
            <SolutionSummary />
          </Layout.Section>
          <Layout.Section secondary>     
            <SolutionFollower />
          </Layout.Section>
        </Layout>

        <br/>
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

export default SolutionsToTheProblem;
