import React, { Component } from 'react';
import fp from 'lodash/fp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { TextContainer, Heading } from '@shopify/polaris';
import TagList from './TagList';
import grassRootProgress from '../assets/group.svg';
import LevelLabel from '../components/LevelLabel';

import renderActions from '../actions/render';

import './SolutionSummary.css';

const goToDetailsPage = (history, id, updateIdToRender) => {
  history.push(`/solutions`);
  updateIdToRender(id, 'solutions');
};

const SolutionSummary = ({
  id,
  docDetails,
  history,
  updateIdToRender,
  level
}) => (
  <div className="solution-summary">
    <TextContainer>
      <Heading element="h1">
        {docDetails.title}
        <LevelLabel level={docDetails.level} />
      </Heading>
      <p
        style={{ cursor: 'pointer' }}
        onClick={() => goToDetailsPage(history, id, updateIdToRender)}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi
        morbi tempus iaculis urna id. Etiam non quam lacus suspendisse faucibus
        interdum posuere lorem. Rhoncus mattis rhoncus urna neque viverra justo
        nec ultrices dui. Et netus et malesuada fames ac turpis egestas integer
        eget. Nulla pellentesque dignissim enim sit amet venenatis urna cursus
        eget. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Magna
        fringilla urna porttitor rhoncus dolor purus. A condimentum vitae sapien
        pellentesque habitant morbi tristique senectus. Urna nec tincidunt
        praesent semper feugiat. Urna et pharetra pharetra massa massa ultricies
        mi. Condimentum id venenatis a condimentum. Aliquam faucibus purus in
        massa tempor nec. Ac felis donec et odio pellentesque. Turpis in eu mi
        bibendum neque. Tellus elementum sagittis vitae et leo duis ut diam
        quam. Commodo odio aenean sed adipiscing diam donec adipiscing tristique
        risus.
      </p>
    </TextContainer>
    <br />
    <div className="solution-summary__progress" style={{ width: '231px' }}>
      <div style={{ width: '231px' }}>
        <img style={{ paddingLeft: '10px' }} src={grassRootProgress} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 'x-small'
          }}
        >
          <div style={{ width: '60px' }}>Grassroots</div>
          <div style={{ width: '60px' }}>Proposed Bill</div>
          <div style={{ width: '60px' }}>Passed Bill</div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <TagList tags={['housing', 'geography', 'safety', 'people']} />
  </div>
);

const mapStateToProps = (state, { id }) => {
  if (!id) {
    id = state.render.solutions.id;
  }
  return {
    docDetails: state.firestore.data.solutions[id],
    id
  };
};

const mapDispatchToProps = {
  updateIdToRender: renderActions.loadSolutionsIdForRender
};

export default fp.compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(SolutionSummary);
