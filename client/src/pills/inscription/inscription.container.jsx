import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InscriptionViewForm from './inscription.view';

class InscriptionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };

    this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const { dispatch, onLogin } = this.props;
  }

  handlePasswordChanges(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <InscriptionViewForm
        onSubmit={this.handleLogin}
        password={this.state.password}
        handleChanges={this.handlePasswordChanges}
      />
    );
  }
}

InscriptionContainer.propTypes = {
  onInscription: PropTypes.func.isRequired,
};

export default connect(null)(InscriptionContainer);
