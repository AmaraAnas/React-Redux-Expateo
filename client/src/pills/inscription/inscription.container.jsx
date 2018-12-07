import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import InscriptionViewForm from './inscription.view';

class InscriptionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      startDate: new Date(),
    };

    this.handlePasswordChanges = this.handlePasswordChanges.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleLogin() {
    const { dispatch, onLogin } = this.props;
  }

  handlePasswordChanges(event) {
    this.setState({ password: event.target.value });
  }

  handleDateChange(date) {
    this.setState({ startDate: date });
  }

  render() {
    return (
      <InscriptionViewForm
        onSubmit={this.handleLogin}
        password={this.state.password}
        date={this.state.startDate}
        handleChanges={this.handlePasswordChanges}
        handleDateChanges={this.handleDateChange}
      />
    );
  }
}

InscriptionContainer.propTypes = {
  onInscription: PropTypes.func.isRequired,
};

export default connect(null)(InscriptionContainer);
