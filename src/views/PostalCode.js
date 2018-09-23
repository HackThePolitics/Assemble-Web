import React, { Component } from 'react';
import fp from 'lodash/fp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { TextField, Button } from '@shopify/polaris';
import districtAction from '../actions/district';

import TObackgroundImage from '../assets/toronto-image.png';

const verifyPostalCode = postalCode => {
  const postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
  return postalCodeRegex.test(postalCode);
};

class PostalCode extends Component {
  constructor() {
    super();
    this.state = {
      postal: 'M5V 2M2',
      error: ''
    };
  }

  onChange(value) {
    this.setState({
      postal: value,
      error: ''
    });
  }

  onPostalSubmit() {
    if (!verifyPostalCode(this.state.postal)) {
      return this.setState({ error: 'Invalid postal code!' });
    }

    this.props.onPostalSubmit(this.state.postal);
    this.props.history.push('/enlightment');
  }

  render() {
    return (
      <div className="postal-page-container">
        <div
          className="postal-page-bg"
          style={{
            backgroundImage: `url("${TObackgroundImage}")`
          }}
        />
        <div className="language-selector">
          EN | <span className="highlighted">FR</span>
        </div>
        <div className="Polaris-Labelled__LabelWrapper">
          <div className="Polaris-Label">
            <label
              id="TextField1Label"
              for="TextField1"
              className="Polaris-Label__Text postal-page-header"
            >
              Where are you located?
            </label>
          </div>
        </div>
        <TextField
          label=""
          value={this.state.postal}
          onChange={value => this.onChange(value)}
          error={this.state.error}
          placeholder="Please enter your postal code here."
        />
        <br />
        <div className="postal-page-submit">
          <Button primary size="large" onClick={() => this.onPostalSubmit()}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onPostalSubmit: districtAction.updatePostalCode
};

const compose = fp.compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withRouter
);

export default compose(PostalCode);
