import React from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import qs from 'query-string';

import InscriptForm from '../pills/inscription/inscription.container';
import t from '../i18n';

import styles from './inscription.page.module.css';

export default class InscriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirectToReferrer: false };
    this.queryIDs = qs.parse(this.props.location.search);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(user) {
    this.setState({
      redirectToReferrer: user && user.isLogged && user.gSesGuid != 0, // TODO: wath is user.gSesGuid ??
    });
  }

  render() {
    let { from } = this.props.location.state || {
      from: { pathname: '/dashboard' },
    };
    let { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <Container className={styles.container} text fluid>
        <h1 className={styles.title}>{t('pages.inscription.title')}</h1>
        <p className={styles.text}>{t('pages.inscription.text_1')}</p>
        <p className={styles.text}>{t('pages.inscription.text_2')}</p>
        <InscriptForm
          onInscription={this.handleLoginSubmit}
          userIDs={this.queryIDs}
        />
      </Container>
    );
  }
}
