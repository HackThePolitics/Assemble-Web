import React, { Component, Fragment } from 'react';
import fp from 'lodash/fp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button, Heading, Layout, Card } from '@shopify/polaris';
import TagList from '../components/TagList';
import oneRiding from '../assets/one-riding.png';

import IssuesList from '../components/IssuesList';
import { LEVELS } from '../constants';

import LevelLabel from '../components/LevelLabel';

import SolutionsList from '../components/SolutionsList';

import '../components/SolutionSummary.css';
import './ProblemDetailPage.css';

class ProblemDetailPage extends Component {
  render() {
    const title =
      this.props.title || 'The Closing of Riverdale Homeless Shelter';
    return (
      <div>
        <div
          className="problem-page-image-banner"
          style={{
            backgroundImage: `url("${this.props.bannerImageUrl}")`
          }}
          alt="Card image cap"
        />
        <div className="app-container">
          <Layout>
            <Layout.Section>
              <Heading element="h1">
                {title} <LevelLabel level={this.props.level} />
              </Heading>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}
              >
                <span style={{ paddingRight: '10px' }}>1835 Followers</span>
                <Button primary size="slim">
                  Follow
                </Button>
              </div>
              <br />
              <TagList tags={['housing', 'geography', 'safety', 'people']} />
            </Layout.Section>
          </Layout>
          <br />
          <br />
          <Card sectioned subdued>
            <Layout>
              <Layout.Section>
                <Heading element="h1">SUMMARY</Heading>
                <br />
                <Heading>The Story</Heading>
                <div className="problem-detail-content-container">
                  <p style={{ margin: '8px 36px 8px 0', width: '75%' }}>
                    The Homeless Shelter at Broadview and Ossington will be
                    closed on November 15th, 2018. This is due to cuts to
                    funding.
                  </p>
                  <div style={{ height: '36px', marginTop: '12px' }}>
                    <Button size="slim">View more</Button>
                  </div>
                </div>
                <br />
                <br />
                <Heading>What’s That?</Heading>
                <div className="problem-detail-content-container">
                  <p style={{ margin: '8px 36px 8px 0', width: '75%' }}>
                    The homeless shelter provides a bed and clean shower to over
                    150 Torontonians everyday. It has been in service since
                    2002.
                  </p>
                  <div style={{ height: '36px', marginTop: '12px' }}>
                    <Button size="slim">View more</Button>
                  </div>
                </div>
                <br />
                <br />
                <Heading>Why Should I Care?</Heading>
                <div className="problem-detail-content-container">
                  <p style={{ margin: '8px 36px 8px 0', width: '75%' }}>
                    There is no other shelter for 3.3km. Many of these are
                    already at capacity leaving individuals with nowhere else to
                    go.
                  </p>
                  <div style={{ height: '36px', marginTop: '12px' }}>
                    <Button size="slim">View more</Button>
                  </div>
                </div>
                <br />
                <br />
                <Heading>Who’s Talking About This?</Heading>
                <div className="problem-detail-content-container">
                  <p style={{ margin: '8px 36px 8px 0', width: '75%' }}>
                    City council announced the closure on August 28th, 2018
                    .City counsilor, Judy Smith, is spearheading the appeal.
                  </p>
                  <div style={{ height: '36px', marginTop: '12px' }}>
                    <Button size="slim">View more</Button>
                  </div>
                </div>
                <br />
                <br />
              </Layout.Section>
              <Layout.Section secondary>
                <img src={oneRiding} />
                <br />
                <br />
                <div>Location: Riverdale</div>
                <div>Created: 27 days ago</div>
              </Layout.Section>
            </Layout>
          </Card>
          <br />
          <Heading element="h1">TOP SOLUTIONS</Heading>
          <br />
          <SolutionsList />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button>View more</Button>
          </div>
          <br />
          <br />
          <Heading element="h1">CONTEXT</Heading>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button primary size="slim">
              Add
            </Button>
          </div>
          <Layout>
            <Layout.Section secondary>
              <p className="context-link">
                Video: Riverdale Shelter Open House 2014
              </p>
              <p className="context-link">
                Article: The Effects of Community Shelters on Surburban Areas
              </p>
              <p className="context-link">
                Journal: Research on Ridings in Toronto in 2016
              </p>
              <p className="context-link">
                Video: News Interview with John Tory
              </p>
            </Layout.Section>
            <Layout.Section secondary>
              <p className="context-link">
                Article: Building Cities: Toronto’s Healthy Future
              </p>
              <p className="context-link">
                Video: Ending Homelessness in Canada
              </p>
              <p className="context-link">
                Journal: Gender and Community - Impacts of Shelters
              </p>
              <p className="context-link">
                Journal: Risk Factors for Long-Term Homelessness
              </p>
            </Layout.Section>
          </Layout>
          <br />
          <br />
          <Heading element="h1">RELATED ISSUES</Heading>
          <br />
          <IssuesList filter={LEVELS.MUNICIPAL} max={3} />
          <br />
        </div>
      </div>
    );
  }
}

export default ProblemDetailPage;
