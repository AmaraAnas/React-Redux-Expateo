import React from 'react';
import { Redirect } from 'react-router-dom';
import qs from 'query-string';

import t from '../i18n';
import { Container } from '../ui-kit';
import InscriptForm from '../pills/inscription/inscription.container';

import styles from './inscription.page.module.css';

export default class InscriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirectToReferrer: false };
    this.query = qs.parse(this.props.location.search);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(user) {
    this.setState({
      redirectToReferrer: user && user.isLogged,
    });
  }

  render() {
    let { redirectToReferrer } = this.state;
    if (redirectToReferrer || !this.query.family || !this.query.guid) {
      return <Redirect to={{ pathname: '/dashboard' }} />;
    }
    return (
      <Container className={styles.container} text fluid>
        <h1 className={styles.title}>{t('pages.inscription.title')}</h1>
        <p className={styles.text}>
          {t('pages.inscription.text_1')} {t('pages.inscription.text_2')}
        </p>
        <InscriptForm
          onInscription={this.handleLoginSubmit}
          userGuid={this.query.guid}
          familyGuid={this.query.family}
        />
      </Container>
    );
  }
}
