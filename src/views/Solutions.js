import React, { Component } from 'react';
import fp from 'lodash/fp';
import { connect } from 'react-redux';
import { Layout, Heading } from '@shopify/polaris';
import SolutionsView from '../components/SolutionsView';
import TalkingPointList from '../components/TalkingPointList';
import AddATalkingPoint from '../components/AddATalkingPoint';
import ActionItemsList from '../components/ActionItemsList';
import TagList from '../components/TagList';

const Solutions = ({ docDetails }) => (
  <div className="app-container">
    <Layout>
      <Layout.Section>
        <Heading>{docDetails.title}</Heading>
        <span className="location-tag">{docDetails.level.toUpperCase()}</span>
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

const mapStateToProps = state => {
  const { id } = state.render.solutions;
  return {
    id,
    docDetails: state.firestore.data.solutions[id]
  };
};

export default fp.compose(connect(mapStateToProps))(Solutions);
