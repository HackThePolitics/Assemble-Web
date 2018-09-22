import React, { Component } from 'react';
import {
  Layout,
  Card,
  FormLayout,
  TextField,
  Button,
  Heading,
  Select,
} from '@shopify/polaris';

const options = [
  { label: 'Pro', value: 'pro' },
  { label: 'Cons', value: 'cons' },
];

class AddATalkingPoint extends Component {
  constructor() {
    super();
    this.state = {
      talkingPointText: '',
      side: 'pro',
    };
  }

  handleProConsChange(value) {
    this.setState({side: value});
  }

  render() {
    return (
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <FormLayout>
              <Heading>Add a talking point</Heading>
              <TextField
                onChange={(value) => this.setState({talkingPointText: value})}
                multiline={4}
              />
               <Select
                  options={options}
                  label=""
                  onChange={(value) => this.handleProConsChange(value)}
                  value={this.state.side} 
                />
              <Button primary>Submit</Button>
            </FormLayout>
          </Card>
        </Layout.Section>
      </Layout>
    );
  }
}

export default AddATalkingPoint;
