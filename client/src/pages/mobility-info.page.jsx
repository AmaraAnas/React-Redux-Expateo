import React from 'react';
import { Redirect } from 'react-router-dom';
import qs from 'query-string';
import t from '../i18n';
import { Container } from '../ui-kit';
import MobilityForm from '../pills/mobility-form/mobilityForm.container';
import styles from './base.module.css';

export default class MobilityInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {}

  render() {
    return (
      <Container className={styles.container} text fluid>
        <MobilityForm onSave={this.handleSubmit} />
      </Container>
    );
  }
}
