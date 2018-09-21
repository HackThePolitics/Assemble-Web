import React, { Component } from 'react';
import fp from 'lodash/fp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { TextField, Button } from '@shopify/polaris';
import districtAction from '../actions/district';

const verifyPostalCode = (postalCode) => {
  const postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
  return postalCodeRegex.test(postalCode);
};

class PostalCode extends Component {
  constructor() {
    super();
    this.state = {
      postal: '',
      error: '',
    };
  }
  
  onChange(value) {
    this.setState({
      postal: value,
      error: '',
    });
  }

  onPostalSubmit() {
    if (!verifyPostalCode(this.state.postal)) {
      return this.setState({ error: 'Invalid postal code!'});
    }

    this.props.onPostalSubmit(this.state.postal);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <TextField
          label="Where are you from?"
          value={this.state.postal}
          onChange={(value) => this.onChange(value)}
          error={this.state.error}
          placeholder="Please enter your postal code here."
        />
        <br/>
        <Button
          primary
          size="large"
          onClick={() => this.onPostalSubmit()}
        >Submit</Button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onPostalSubmit: districtAction.updatePostalCode
};

const compose = fp.compose(
  connect(null, mapDispatchToProps),
  withRouter,
);

export default compose(PostalCode);
