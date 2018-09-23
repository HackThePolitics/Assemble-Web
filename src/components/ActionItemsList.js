import React, { Component } from 'react';
import { Avatar, ProgressBar, Heading } from '@shopify/polaris';
import './ActionItemsList.css';
import uncheckedImage from '../assets/checkbox-unchecked.png';
import checkedImage from '../assets/checkbox-checked.png';

const defaultDescription =
  'Call your MP and tell them that you want them to vote yes on prop 27 because.\n Your MP is Julie Dabrusin';

const ActionItemCheckBox = ({ status = false }) =>
  status ? <img src={checkedImage} /> : <img src={uncheckedImage} />;

const ActionItem = ({
  title = 'Title',
  description = defaultDescription,
  status = false,
  usersCompleted = 300,
  usersTotal = 400
}) => (
  <div className="action-item">
    {/* <Avatar
      className="action-item__avatar"
      customer={false}
      source="https://picsum.photos/240/240"
      size="large"
    /> */}
    <img src="https://picsum.photos/240/240" className="action-item__avatar" />

    <div className="action-item__content">
      <div className="action-item__content__top">
        <Heading className="action-item__title">{title}</Heading>
        <div className="action-item__progress">
          <ProgressBar
            className="action-item__progress__bar"
            progress={(usersCompleted / usersTotal) * 100}
          />
          <div className="action-item__progress__numbers">
            <p
            >{`${usersCompleted} out of ${usersTotal} followers have done this.`}</p>
          </div>
        </div>
      </div>
      <p className="action-item__description">{description}</p>
    </div>

    <ActionItemCheckBox status={status} />
  </div>
);

class ActionItemsList extends Component {
  render() {
    return (
      <div className="action-items-list-section">
        <Heading>ACTION ITEMS</Heading>
        <div className="action-items-list">
          <ActionItem status={true} usersCompleted={176} usersTotal={253} />
          <ActionItem usersCompleted={234} usersTotal={253} />
          <ActionItem usersCompleted={112} usersTotal={253} />
        </div>
      </div>
    );
  }
}

export default ActionItemsList;
