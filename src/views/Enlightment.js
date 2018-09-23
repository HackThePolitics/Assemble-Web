import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  Layout,
  Heading,
  Card,
  Button,
  ButtonGroup
} from '@shopify/polaris';
import logo from '../assets/one-riding.png';

class Enlightment extends Component {
  constructor() {
    super();
  }

  onSubmit() {
    console.log('proceed to main page');
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="enlightment-page-container">
        <div className="language-selector">
          EN | <span className="highlighted">FR</span>
        </div>
        <Card
          title="YOUR RIDING: TORONTO - DANFORTH"
          sectioned
          subdue
        >
          <div style={{display: 'flex'}}>
            <div style={{margin: "2px 0 0 0"}}>
              <img width="220" height="220px" src={logo} alt="logo" />
            </div>
            <div style={{margin: "0 0 0 10px"}}>
              <h2>Our government is split into three levels with its own elected representatives. </h2>
              <br/>
              <p>
                Federal: Responsible for the entire country, this includes national defence, foreign affairs, fisheries and oceans, currency, criminal law, and public safety. Led by the Prime Minister who works withfederal elected representatives called Members of Parliament (MPs).
              </p>
              <br/>
              <div style={{ fontSize: '12px' }}>
                        Your MP is Julie Dabrusin{' '}
                        <span style={{ color: '#ff0000' }}>LIBERAL</span>
                      </div>
              <br/>
              <p>
              Provincial/Territorial: Responsible for the province or territory, this includes issues like education, health care, natural resources, and transportation and highways. Led by the Premier, who makes decisions with input from members of provincial parliament.
              </p>
              <br/>
              <div style={{ fontSize: '12px' }}>
                        Your MPP is Peter Tabuns NDP{' '}
                        <span style={{ color: '#e39703' }}>LIBERAL</span>
              </div>
              <br/>
              <p>
              Municipal: Represents a city or town, and responsible for local matters such as waste removal, city transit, and parks and recreation. The leader is called a Mayor who meets with city or town councillors to make decisions.
              </p>
              <br/>
              <div style={{ fontSize: '12px' }}>
                        Your City Councillor is Paula Fletcher
                      </div>
              <br/>
              <p>
              Your elected representatives are responsible for proposing, studying, debating and voting on bills - which are potential laws.
              </p>
              <br/>
              <p>
              They also spend time talking with their constituents to discuss their concerns.
              </p>
            </div>
           </div>
        </Card>
        <br />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button primary size="large" onClick={() => this.onSubmit()}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Enlightment);
