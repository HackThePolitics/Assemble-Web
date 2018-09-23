import React, { Component } from 'react';
import { connect } from 'react-redux';
import fp from 'lodash/fp';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'
import { Layout, Heading, Card as PolarisCard, Button, ButtonGroup } from '@shopify/polaris';
import { Card, CardImg,CardBody } from 'reactstrap';

import IssuesList from '../components/IssuesList';
import SolutionsList from '../components/SolutionsList';
import { LEVELS } from '../constants';
import logo from '../assets/one-riding.png'

class Home extends Component {
  componentWillMount() {
    // if (!this.props.postalCode) {
    //   this.props.history.push("/postal");
    // }
  }

  render() {
    return (
      <div className="app-container">
        <Heading>TOP ISSUES IN YOUR RIDING</Heading>
        <br/>
        <Layout>
          <Layout.Section secondary>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <Link to="/">This is a title</Link>
              </CardBody>
            </Card>
          </Layout.Section>
          <Layout.Section secondary>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <Link to="/">This is a title</Link>
              </CardBody>
            </Card>
          </Layout.Section>
          <Layout.Section secondary>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <Link to="/">This is a title</Link>
              </CardBody>
            </Card>
          </Layout.Section>
        </Layout>
        <br/>
        <br/>
        <Heading>TOP ISSUES IN TORONTO</Heading>
        <br/>
        <Layout>
          <Layout.Section secondary>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <Link to="/">This is a title</Link>
              </CardBody>
            </Card>
          </Layout.Section>
          <Layout.Section secondary>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <Link to="/">This is a title</Link>
              </CardBody>
            </Card>
          </Layout.Section>
          <Layout.Section secondary>
            <Card>
              <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <Link to="/">This is a title</Link>
              </CardBody>
            </Card>
          </Layout.Section>
        </Layout>
        <br/>
        <br/>
        <Layout>
          <Layout.Section>
            <PolarisCard title="YOUR RIDING: TORONTO - DANFORTH" sectioned subdued>
              <Layout>
                <Layout.Section secondary>
                  <img width="260px" height="190px" src={logo} alt="logo" />
                </Layout.Section>
                <Layout.Section>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                      <Heading>FEDERAL</Heading>
                      <div style={{fontSize: '12px'}}>Your MP is Julie Dabrusin <span style={{color: '#ff0000'}}>LIBERAL</span></div>
                    </div>
                    <ButtonGroup>
                      <Button>Email</Button>
                      <Button>Call</Button>
                    </ButtonGroup>
                  </div>
                  <br/>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                      <Heading>PROVINCIAL</Heading>
                      <div  style={{fontSize: '12px'}}>Your MPP is Peter Tabuns NDP <span style={{color: '#e39703'}}>LIBERAL</span></div>
                    </div>
                    <ButtonGroup>
                      <Button>Email</Button>
                      <Button>Call</Button>
                    </ButtonGroup>
                  </div>
                  <br/>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                      <Heading>MUNICIPAL</Heading>
                      <div style={{fontSize: '12px'}}>Your City Councillor is Paula Fletcher</div>
                    </div>
                    <ButtonGroup>
                      <Button>Email</Button>
                      <Button>Call</Button>
                    </ButtonGroup>
                  </div>
                </Layout.Section>
              </Layout>
            </PolarisCard>
          </Layout.Section>
        </Layout>
        <IssuesList headerTitle="Top Local Issues" filter={LEVELS.MUNICIPAL} />
        <IssuesList
          headerTitle="Top Toronto Issues"
          filter={LEVELS.PROVINCIAL}
        />
        <SolutionsList headerTitle="Hotly debated solutions" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postalCode: state.district.postalCode
  };
};

const compose = fp.compose(
  connect(mapStateToProps),
  withRouter
);

export default compose(Home);
