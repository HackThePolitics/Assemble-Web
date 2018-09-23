import React, { Component } from 'react';
import { connect } from 'react-redux';
import fp from 'lodash/fp';
import { withRouter } from 'react-router';
import {
  Layout,
  Heading,
  Card as PolarisCard,
  Button,
  ButtonGroup
} from '@shopify/polaris';

import IssuesList from '../components/IssuesList';

import SolutionsView from '../components/SolutionsView';
import { LEVELS } from '../constants';
import logo from '../assets/one-riding.png';

class Home extends Component {
  componentWillMount() {
    // if (!this.props.postalCode) {
    //   this.props.history.push("/postal");
    // }
  }

  render() {
    return (
      <div className="app-container">
        <Heading>TOP ISSUES IN YOUR RIDING</Heading>
        <br />
        <IssuesList filter={LEVELS.MUNICIPAL} />
        <br />
        <br />
        <Heading>TOP ISSUES IN TORONTO</Heading>
        <br />
        <IssuesList filter={LEVELS.PROVINCIAL} />
        <br />
        <br />
        <Layout>
          <Layout.Section>
            <PolarisCard
              title="YOUR RIDING: TORONTO - DANFORTH"
              sectioned
              subdued
            >
              <Layout>
                <Layout.Section secondary>
                  <img width="260px" height="190px" src={logo} alt="logo" />
                </Layout.Section>
                <Layout.Section>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>
                      <Heading>FEDERAL</Heading>
                      <div style={{ fontSize: '12px' }}>
                        Your MP is Julie Dabrusin{' '}
                        <span style={{ color: '#ff0000' }}>LIBERAL</span>
                      </div>
                    </div>
                    <ButtonGroup>
                      <Button>Email</Button>
                      <Button>Call</Button>
                    </ButtonGroup>
                  </div>
                  <br />
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>
                      <Heading>PROVINCIAL</Heading>
                      <div style={{ fontSize: '12px' }}>
                        Your MPP is Peter Tabuns NDP{' '}
                        <span style={{ color: '#e39703' }}>LIBERAL</span>
                      </div>
                    </div>
                    <ButtonGroup>
                      <Button>Email</Button>
                      <Button>Call</Button>
                    </ButtonGroup>
                  </div>
                  <br />
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>
                      <Heading>MUNICIPAL</Heading>
                      <div style={{ fontSize: '12px' }}>
                        Your City Councillor is Paula Fletcher
                      </div>
                    </div>
                    <ButtonGroup>
                      <Button>Email</Button>
                      <Button>Call</Button>
                    </ButtonGroup>
                  </div>
                </Layout.Section>
              </Layout>
            </PolarisCard>
          </Layout.Section>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postalCode: state.district.postalCode
  };
};

const compose = fp.compose(
  connect(mapStateToProps),
  withRouter
);

export default compose(Home);
