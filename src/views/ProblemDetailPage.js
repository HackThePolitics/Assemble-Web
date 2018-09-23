import React, { Component } from 'react';
import fp from 'lodash/fp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button, Heading, Layout, Card } from '@shopify/polaris';
import TagList from '../components/TagList';
import oneRiding from '../assets/one-riding.png'

import '../components/SolutionSummary.css';

class ProblemDetailPage extends Component {
  render() {
    return (
      <div className="app-container">
        <Layout>
          <Layout.Section>
            <Heading element="h1">The Closing of Riverdale Homeless Shelter <span className="location-tag">MUNICIPAL</span></Heading>
            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
              <span style={{paddingRight: '10px'}}>1835 Followers</span>
              <Button primary size="slim">Follow</Button>
            </div>
            <br/>
            <TagList tags={['housing', 'geography', 'safety', 'people']} />
          </Layout.Section>
        </Layout>
        <br/>
        <Card sectioned subdued>
          <Layout>
            <Layout.Section>
              <Heading element="h1">SUMMARY</Heading>
              <br/>
              <Heading>The Story</Heading>
              <p style={{marginTop: '8px', marginBottom: '8px'}}>The Homeless Shelter at Broadview and Ossington will be closed on November 15th, 2018. This is due to cuts to funding.</p>
              <Button size="slim">View more</Button>
              <br/>
              <br/>
              <Heading>What’s That?</Heading>
              <p style={{marginTop: '8px', marginBottom: '8px'}}>The homeless shelter provides a bed and clean shower to over 150 Torontonians everyday. It has been in service since 2002.</p>
              <Button size="slim">View more</Button>
              <br/>
              <br/>
              <Heading>Why Should I Care?</Heading>
              <p style={{marginTop: '8px', marginBottom: '8px'}}>There is no other shelter for 3.3km. Many of these are already at capacity leaving individuals with nowhere else to go.</p>
              <Button size="slim">View more</Button>
              <br/>
              <br/>
              <Heading>Who’s Talking About This?</Heading>
              <p style={{marginTop: '8px', marginBottom: '8px'}}>City council announced the closure on August 28th, 2018 .City counsilor, Judy Smith, is spearheading the appeal.</p>
              <Button size="slim">View more</Button>
              <br/>
              <br/>
            </Layout.Section>
            <Layout.Section secondary>
              <img width="100%" height="240px" src={oneRiding} />
              <br/>
              <br/>
              <div>Location: Riverdale</div>
              <div>Created: 27 days ago</div>
            </Layout.Section>
          </Layout>
        </Card>
        <br/>
        <Heading element="h1">TOP SOLUTIONS</Heading>
        <br/>
        <br/>
        <Layout>
          <Layout.Section>
            dsfa
          </Layout.Section>
        </Layout>
      </div>
    );
  }
}

export default ProblemDetailPage;
