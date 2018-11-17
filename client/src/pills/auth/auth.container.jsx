import React, { Component } from 'react';
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
    const { dispatch } = this.props;
    const showModal = () => dispatch(show(Loader));
    const hideModal = () => dispatch(hide());
    dispatch(
      login({
        username,
        password,
        onPending: showModal,
        onSuccess: hideModal,
        onFailure: hideModal,
      }),
    );
  }

  render() {
    return <AuthViewForm onSubmit={this.handleLogin} />;
  }
}

export default connect(null)(AuthContainer);
