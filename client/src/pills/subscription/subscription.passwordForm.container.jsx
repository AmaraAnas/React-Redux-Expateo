import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector, getFormSyncErrors } from 'redux-form';
import { Redirect } from 'react-router-dom';

import {
  showBigLoaderModal,
  showErrorModal,
  destroy,
} from '../modal/modal.actions';

import {
  setPassword,
  checkIsPasswordAlreadyInitialized,
} from './subscription.actions';
import SubscriptionPasswordFormView from './subscription.passwordForm.view';

class SubscriptionPasswordFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordAlreadyInitialized: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { dispatch, userGuid, familyGuid } = this.props;
    const destroyModal = () => dispatch(destroy());
    dispatch(
      checkIsPasswordAlreadyInitialized({
        userGuid,
        familyGuid,
        onPending: () => dispatch(showBigLoaderModal({ content: '' })),
        onSuccess: (isPasswordAlreadyInitialized) => {
          destroyModal();
          this.setState({ isPasswordAlreadyInitialized });
        },
        onFailure: () => destroyModal(),
      }),
    );
  }

  handleSubmit({ allowEmail, ...formValues }) {
    const { dispatch, onSubscription, userGuid, familyGuid } = this.props;
    const destroyModal = () => dispatch(destroy());
    const dispatchErrorModal = () =>
      dispatch(
        showErrorModal({
          title: 'Oupss... Une erreur est survenue :(',
          message: "Si l'erreur persiste contactez un adminstrateur. Merci.",
        }),
      );
    dispatch(
      setPassword({
        userGuid,
        familyGuid,
        allowEmail: allowEmail ? 1 : 0,
        ...formValues,
        onPending: () =>
          dispatch(showBigLoaderModal({ content: 'Inscription en cours...' })),
        onSuccess: (user) => {
          destroyModal();
          if (!user || !user.isLogged) {
            dispatchErrorModal();
          }
          onSubscription(user);
        },
        onFailure: () => {
          destroyModal();
          dispatchErrorModal();
        },
      }),
    );
  }

  render() {
    const { password, syncErrors } = this.props;
    const { isPasswordAlreadyInitialized } = this.state;
    if (isPasswordAlreadyInitialized) {
      return <Redirect to="/login" />;
    }
    return (
      <SubscriptionPasswordFormView
        onSubmit={this.handleSubmit}
        password={password}
        passwordError={syncErrors.password}
        confirmPasswordError={syncErrors.confirmpassword}
      />
    );
  }
}

SubscriptionPasswordFormContainer.propTypes = {
  onSubscription: PropTypes.func.isRequired,
  userGuid: PropTypes.string.isRequired,
  familyGuid: PropTypes.string.isRequired,
};

const selector = formValueSelector('SubscriptionPasswordForm');
const syncErrorsSelector = getFormSyncErrors('SubscriptionPasswordForm');

function mapStateToProps(state) {
  return {
    password: selector(state, 'password'),
    confirmpassword: selector(state, 'confirmpassword'),
    syncErrors: syncErrorsSelector(state),
  };
}

export default connect(mapStateToProps)(SubscriptionPasswordFormContainer);
