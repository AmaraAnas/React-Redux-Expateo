import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InscriptionViewForm from './inscription.view';

class InscriptionContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const { dispatch, onLogin } = this.props;
  }

  render() {
    return <InscriptionViewForm onSubmit={this.handleLogin} />;
  }
}

InscriptionContainer.propTypes = {
  onInscription: PropTypes.func.isRequired,
};

export default connect(null)(InscriptionContainer);
