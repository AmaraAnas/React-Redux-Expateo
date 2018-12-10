import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AuthViewForm from './auth.view';
import { login } from './auth.actions';
import { show, hide } from '../modal/modal.actions';
import { Loader } from '../modal/modal.container';

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin({ username, password }) {
    const { dispatch, onLogin } = this.props;
    const showModal = () => dispatch(show(Loader));
    const hideModal = () => dispatch(hide());
    dispatch(
      login({
        username,
        password,
        onPending: showModal,
        onSuccess: (user) => {
          hideModal();
          onLogin(user);
        },
        onFailure: (e) => {
          console.log('failure');
        },
      }),
    );
  }

  render() {
    return <AuthViewForm onSubmit={this.handleLogin} />;
  }
}

AuthContainer.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default connect(null)(AuthContainer);
