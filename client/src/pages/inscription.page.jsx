import React from 'react';
import { Container } from 'semantic-ui-react';

import styles from './inscription.page.module.css';
import { Redirect } from 'react-router-dom';
import InscriptForm from '../pills/inscription/inscription.container';
const queryString = require('query-string');

export default class InscriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirectToReferrer: false };
    const parsed = queryString.parse(this.props.location.search);
    this.queryIDs = parsed;
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(user) {
    this.setState({
      redirectToReferrer: user && user.isLogged && user.gSesGuid != 0,
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
        <h1 className={styles.title}>
          Bienvenu sur votre espace personnel Expateo
        </h1>
        <p className={styles.text}>
          Grâce à votre entreprise vous allez bénéficier d’un accompagnement
          pour vous aider étape par étape dans votre mobilité.
        </p>
        <p className={styles.text}>
          Pour y accéder créez votre mot de passe et répondez aux questions
          nécessaires au bon fonctionnement de l’application
        </p>
        <InscriptForm
          onInscription={this.handleLoginSubmit}
          userIDs={this.queryIDs}
        />
      </Container>
    );
  }
}
