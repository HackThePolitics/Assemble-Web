import React, { Component } from 'react';
import { TextContainer, Heading } from '@shopify/polaris';
import TagList from './TagList';

class SolutionSummary extends Component {
  render() {
    return (
      <div>
        <TextContainer>
          <Heading>This is a good solution title</Heading>
          <span>MUNICIPAL</span>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nulla facilisi morbi tempus iaculis urna id. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Et netus et malesuada fames ac turpis egestas integer eget. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Magna fringilla urna porttitor rhoncus dolor purus. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Urna nec tincidunt praesent semper feugiat. Urna et pharetra pharetra massa massa ultricies mi. Condimentum id venenatis a condimentum. Aliquam faucibus purus in massa tempor nec. Ac felis donec et odio pellentesque. Turpis in eu mi bibendum neque. Tellus elementum sagittis vitae et leo duis ut diam quam. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus.
          </p>
        </TextContainer>
        <br/>
        <TagList tags={['housing', 'geography', 'safety', 'people']}/>
      </div>
    );
  }
}

export default SolutionSummary;
