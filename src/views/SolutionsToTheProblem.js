import React, { Component } from 'react';
import { Layout, TextContainer, Heading } from '@shopify/polaris';
import TalkingPointList from '../components/TalkingPointList';
import AddATalkingPoint from '../components/AddATalkingPoint';
import TagList from '../components/TagList';
import SolutionFollower from '../components/SolutionFollower';

class SolutionsToTheProblem extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Layout.Section>
            <TextContainer>
              <Heading>This is a problem title</Heading>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna id. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Et netus et malesuada fames ac turpis egestas integer eget. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Magna fringilla urna porttitor rhoncus dolor purus. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Urna nec tincidunt praesent semper feugiat. Urna et pharetra pharetra massa massa ultricies mi. Condimentum id venenatis a condimentum. Aliquam faucibus purus in massa tempor nec. Ac felis donec et odio pellentesque. Turpis in eu mi bibendum neque. Tellus elementum sagittis vitae et leo duis ut diam quam. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus.
              </p>
            </TextContainer>
            <br/>
            <TagList tags={['housing', 'geography', 'safety', 'people']}/>
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
