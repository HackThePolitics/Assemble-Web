import React, { Component } from 'react';
import { Avatar, ProgressBar, Heading } from '@shopify/polaris';
import { Container, Row, Col } from 'reactstrap';
import './ActionItemsList.css';
import uncheckedImage from '../assets/checkbox-unchecked.png';
import checkedImage from '../assets/checkbox-checked.png';
import contactSvg from '../assets/action-items/contact.svg';
import donateSvg from '../assets/action-items/donate.svg';
import signSvg from '../assets/action-items/sign.svg';

const defaultDescription =
  'Call your MP and tell them that you want them to vote yes on prop 27';

const ActionItemCheckBox = ({ status = false }) =>
  status ? <img width="44px" height="44px" src={checkedImage} /> : <img width="44px" height="44px" src={uncheckedImage} />;

const ActionItem = ({
  type = contactSvg,
  title = 'Title',
  description = defaultDescription,
  description2 = defaultDescription,
  status = false,
  usersCompleted = 300,
  usersTotal = 400,
  specialNumber,
}) => (
  <Row>
    {/* <Avatar
      className="action-item__avatar"
      customer={false}
      source="https://picsum.photos/240/240"
      size="large"
    /> */}
    <Col xs="2">
      <img sstyle={{paddingLeft: '12px'}} src={type} className="action-item__avatar" />
    </Col>
    <Col xs="9">
      <div className="action-item__content__top">
        <Heading className="action-item__title">{title}</Heading>
        <div className="action-item__progress">
          <ProgressBar
            className="action-item__progress__bar"
            progress={(usersCompleted / usersTotal) * 100}
          />
          <p className="action-item__progress__numbers">{`${usersCompleted} out of ${usersTotal} followers have done this.`}</p>
        </div>
      </div>
      <p className="action-item__description">{description}</p>
      <p className="action-item__description">{`${description2} `}<span className="context-link">{specialNumber && specialNumber}</span></p>
    </Col>
    <Col xs="1">
      <ActionItemCheckBox status={status} />
    </Col>
  </Row>
);

class ActionItemsList extends Component {
  render() {
    return (
      <div className="action-items-list-section">
        <br/>
          <Container>
            <Heading>ACTION ITEMS</Heading>
            <br/>
            <ActionItem
              status={true}
              usersCompleted={176}
              usersTotal={253}
              type={contactSvg}
              title="Call your MP"
              description="Call your MP and tell them that you want them to vote yes on prop 27."
              description2="Your MP is Julie Dabrusin her number is"
              specialNumber="1-800-462-7655"
            />
            <br/>
            <br/>
            <ActionItem
              usersCompleted={234}
              usersTotal={253}
              type={donateSvg}
              title="Sign the petition"
              description="Sign the petition and we will send this to the Toronto City Council."
              description2="Follow the instructions found here"
              specialNumber="change.org/toronto-shelter"
            />
            <br/>
            <br/>
            <ActionItem
              usersCompleted={112}
              usersTotal={253}
              type={signSvg}
              title="Donate to the new shelter"
              description="We need to raise $10,000 to breakground on the new shelter."
              description2="Donate to the cause at"
              specialNumber="gofundme.org/toronto-shelter"
            />
          </Container>
      </div>
    );
  }
}

export default ActionItemsList;
