import React from 'react';
import { Container } from '../ui-kit';
import { Redirect } from 'react-router-dom';
import MobilityForm from '../pills/mobilities/mobility-form/mobilityForm.container';
import styles from './base.module.css';

export default class MobilityInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirectToDashbord: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({
      redirectToDashbord: true,
    });
  }

  render() {
    let { redirectToDashbord } = this.state;
    if (redirectToDashbord) {
      return <Redirect from="/mobility-form" push={true} to="/" />;
    }
    return (
      <Container className={styles.container} text fluid>
        <MobilityForm onSave={this.handleSubmit} />
      </Container>
    );
  }
}
