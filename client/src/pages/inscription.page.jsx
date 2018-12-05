import React from 'react';
import { Grid } from 'semantic-ui-react';
import '../styles/inscription.page.css';
import InscriptForm from '../pills/inscription/inscription.container';

export default class InscriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }
  handleLoginSubmit(user) {
    this.setState();
  }
  render() {
    return (
      <Grid
        textAlign="center"
        style={{
          height: '100%',
          background: 'rgba(255,255,255,255)',
        }}
      >
        <Grid.Column
          style={{
            maxWidth: '90%',
            width: '600px',
          }}
        >
          <h1 className="bienvenulabel">
            Bienvenu sur votre espace personnel Expateo
          </h1>
          <p className="bienvenuparagraph">
            Grâce à votre entreprise vous allez bénéficier d’un accompagnement
            pour vous aider étape par étape dans votre mobilité.
            <br />
            Pour y accéder créez votre mot de passe et répondez aux questions
            nécessaires au bon fonctionnement de l’application
          </p>
          <InscriptForm onLogin={this.handleLoginSubmit} />
        </Grid.Column>
      </Grid>
    );
  }
}
