import React from 'react';
import { Redirect } from 'react-router-dom';
import qs from 'query-string';

import { Container } from '../ui-kit';
import MobilityActivationForm from '../pills/subscription/subscription.mobilityActivationForm.container';

import styles from './inscription.page.module.css';

export default class MobilityActivationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobilityActivated: false,
    };
    this.query = qs.parse(this.props.location.search);
    this.handleActivationSubmit = this.handleActivationSubmit.bind(this);
  }

  handleActivationSubmit() {
    this.setState({
      isMobilityActivated: true,
    });
  }

  render() {
    let { isMobilityActivated } = this.state;
    if (
      isMobilityActivated ||
      !this.query.family ||
      !this.query.guid ||
      !this.query.cl
    ) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Container className={styles.container} text fluid>
        <MobilityActivationForm
          onInscription={this.handleActivationSubmit}
          userGuid={this.query.guid}
          familyGuid={this.query.family}
          clGuid={this.query.cl}
        />
      </Container>
    );
  }
}
