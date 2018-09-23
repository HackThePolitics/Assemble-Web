import React, { Component } from 'react';
import { Layout, TextContainer, Heading } from '@shopify/polaris';
import TalkingPointList from '../components/TalkingPointList';
import AddATalkingPoint from '../components/AddATalkingPoint';
import ActionItemsList from '../components/ActionItemsList';
import SolutionFollower from '../components/SolutionFollower';
import SolutionSummary from '../components/SolutionSummary';
import RidingsMap from '../components/RidingsMap';
import UserImage1 from '../assets/user1.jpg';
import UserImage2 from '../assets/user2.jpg';
import UserImage3 from '../assets/user3.jpg';
import UserImage4 from '../assets/user4.jpg';
import UserImage5 from '../assets/user5.jpg';
import UserImage6 from '../assets/user6.jpg';

const userProfiles = [
  {
    name: 'Tara A.',
    image: UserImage1,
    talkingpoint:
      'The wealth of a society can be measured by how well it looks after its poor.'
  },
  {
    name: 'Zainab T.',
    image: UserImage2,
    talkingpoint:
      'We need a place to provide the services offered by the city. '
  },
  {
    name: 'Reema S.',
    image: UserImage3,
    talkingpoint:
      'This has positively impacted crime in the past https://source.com/reliable'
  },
  {
    name: 'Cole Y.',
    image: UserImage4,
    talkingpoint:
      'The wealth of a society can be measured by how well it looks after its poor.'
  },
  {
    name: 'Marco D.',
    image: UserImage5,
    talkingpoint:
      'We need a place to provide the services offered by the city. '
  },
  {
    name: 'Max R.',
    image: UserImage6,
    talkingpoint:
      'This has positively impacted crime in the past https://source.com/reliable'
  }
];

class SolutionDetails extends Component {
  render() {
    return (
      <div className="app-container generic-bottom-padding">
        <Layout>
          <Layout.Section>
            <SolutionSummary />
          </Layout.Section>
          <Layout.Section secondary>
            <SolutionFollower />
          </Layout.Section>
        </Layout>
        <br />
        <Layout>
          <Layout.Section>
            <ActionItemsList />
          </Layout.Section>
        </Layout>
        <br />
        <RidingsMap />
        <br />
        <Layout>
          <Layout.Section secondary>
            <h2 class="Polaris-Heading" style={{ color: '#08bd21' }}>
              PROS
            </h2>
            <TalkingPointList userProfiles={userProfiles.slice(0, 3)} />
          </Layout.Section>
          <Layout.Section secondary>
            <h2 class="Polaris-Heading" style={{ color: '#f20303' }}>
              CONS
            </h2>
            <TalkingPointList userProfiles={userProfiles.slice(3, 6)} />
          </Layout.Section>
        </Layout>
        <br />
        <AddATalkingPoint />
      </div>
    );
  }
}

export default SolutionDetails;
