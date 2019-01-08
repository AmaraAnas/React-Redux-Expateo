import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { show, destroy } from '../modal/modal.actions';
import { BigLoaderModal } from '../modal/modal.loaders';

import AuthViewForm from './auth.loginForm.view';
import { login } from './auth.actions';

const showLoaderModal = () =>
  show(
    BigLoaderModal({
      content: 'Connexion en cours...',
    }),
  );

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin({ email, password }) {
    const { dispatch, onLogin } = this.props;
    const destroyModal = () => dispatch(destroy());
    dispatch(
      login({
        email,
        password,
        onPending: () => dispatch(showLoaderModal()),
        onSuccess: (user) => {
          destroyModal();
          onLogin(user);
        },
        onFailure: destroyModal,
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
