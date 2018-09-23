import React, { Component } from 'react';
import { TextContainer, Heading } from '@shopify/polaris';
import TagList from './TagList';
import grassRootProgress from '../assets/group.svg';

import './SolutionSummary.css';

class SolutionSummary extends Component {
  render() {
    return (
      <div className="solution-summary">
        <TextContainer>
          <Heading element="h1">
            This is a good solution title{' '}
            <span className="location-tag">MUNICIPAL</span>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
            nulla facilisi morbi tempus iaculis urna id. Etiam non quam lacus
            suspendisse faucibus interdum posuere lorem. Rhoncus mattis rhoncus
            urna neque viverra justo nec ultrices dui. Et netus et malesuada
            fames ac turpis egestas integer eget. Nulla pellentesque dignissim
            enim sit amet venenatis urna cursus eget. Nunc sed blandit libero
            volutpat sed cras ornare arcu dui. Magna fringilla urna porttitor
            rhoncus dolor purus. A condimentum vitae sapien pellentesque
            habitant morbi tristique senectus. Urna nec tincidunt praesent
            semper feugiat. Urna et pharetra pharetra massa massa ultricies mi.
            Condimentum id venenatis a condimentum. Aliquam faucibus purus in
            massa tempor nec. Ac felis donec et odio pellentesque. Turpis in eu
            mi bibendum neque. Tellus elementum sagittis vitae et leo duis ut
            diam quam. Commodo odio aenean sed adipiscing diam donec adipiscing
            tristique risus.
          </p>
        </TextContainer>
        <br/>
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
  }
}

export default SolutionSummary;
