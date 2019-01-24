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

import { inscription, getInitialValues } from './inscription.actions';
import InscriptionViewForm from './inscription.view';

class InscriptionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobilityAlreadyInitialized: false,
      isPasswordAlreadyInitialized: false,
      familyFieldOptions: [],
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    const { dispatch, userGuid, familyGuid, clGuid } = this.props;
    const destroyModal = () => dispatch(destroy());
    dispatch(
      getInitialValues({
        userGuid,
        familyGuid,
        clGuid,
        onPending: () => dispatch(showBigLoaderModal({ content: '' })),
        onSuccess: (res) => {
          destroyModal();
          this.setState(res);
        },
        onFailure: () => destroyModal(),
      }),
    );
  }

  handleLogin({ allowEmail, ...formValues }) {
    const {
      dispatch,
      onInscription,
      userGuid,
      familyGuid,
      clGuid,
    } = this.props;
    const destroyModal = () => dispatch(destroy());
    const dispatchErrorModal = () =>
      dispatch(
        showErrorModal({
          title: 'Oupss... Une erreur est survenue :(',
          message: "Si l'erreur persiste contactez un adminstrateur. Merci.",
        }),
      );
    dispatch(
      inscription({
        userGuid,
        familyGuid,
        clGuid,
        allowEmail: allowEmail ? 1 : 0,
        ...formValues,
        onPending: () =>
          dispatch(showBigLoaderModal({ content: 'Inscription en cours...' })),
        onSuccess: (user) => {
          destroyModal();
          if (!user || !user.isLogged) {
            dispatchErrorModal();
          }
          onInscription(user);
        },
        onFailure: () => {
          destroyModal();
          dispatchErrorModal();
        },
      }),
    );
  }

  render() {
    const { family, password, syncErrors } = this.props;
    const {
      isMobilityAlreadyInitialized,
      isPasswordAlreadyInitialized,
      familyFieldOptions,
    } = this.state;
    if (isMobilityAlreadyInitialized) {
      return <Redirect to="/" />;
    }
    return (
      <InscriptionViewForm
        onSubmit={this.handleLogin}
        family={family}
        familyFieldOptions={familyFieldOptions}
        password={password}
        passwordError={syncErrors.password}
        confirmPasswordError={syncErrors.confirmpassword}
        isPasswordAlreadyInitialized={isPasswordAlreadyInitialized}
      />
    );
  }
}

InscriptionContainer.propTypes = {
  onInscription: PropTypes.func.isRequired,
  userGuid: PropTypes.string.isRequired,
  familyGuid: PropTypes.string.isRequired,
  clGuid: PropTypes.string.isRequired,
};

const selector = formValueSelector('InscriptionForm');
const syncErrorsSelector = getFormSyncErrors('InscriptionForm');

export default connect((state) => ({
  family: selector(state, 'family'),
  password: selector(state, 'password'),
  confirmpassword: selector(state, 'confirmpassword'),
  syncErrors: syncErrorsSelector(state),
}))(InscriptionContainer);
