import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector, getFormSyncErrors } from 'redux-form';

import { show, destroy } from '../modal/modal.actions';
import { BigLoaderModal, ErrorModal } from '../modal/modal.loaders';

import { inscription } from './inscription.actions';
import InscriptionViewForm from './inscription.view';

const showLoaderModal = () =>
  show(BigLoaderModal({ content: 'Inscription en cours...' }));

const showErrorModal = () =>
  show(
    ErrorModal({
      title: 'Oupss... Une erreur est survenue :(',
      message: "Si l'erreur persiste contactez un adminstrateur. Merci.",
    }),
  );

class InscriptionContainer extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin({ allowEmail, ...formValues }) {
    const { dispatch, onInscription, userGuid, familyGuid } = this.props;
    const destroyModal = () => dispatch(destroy());
    dispatch(
      inscription({
        userGuid,
        familyGuid,
        allowEmail: allowEmail ? 1 : 0,
        ...formValues,
        onPending: () => dispatch(showLoaderModal()),
        onSuccess: (user) => {
          destroyModal();
          if (!user || !user.isLogged) {
            dispatch(showErrorModal());
          }
          onInscription(user);
        },
        onFailure: () => (destroyModal(), dispatch(showErrorModal())),
      }),
    );
  }

  render() {
    const { family, password, syncErrors } = this.props;
    return (
      <InscriptionViewForm
        onSubmit={this.handleLogin}
        family={family}
        password={password}
        passwordError={syncErrors.password}
      />
    );
  }
}

InscriptionContainer.propTypes = {
  onInscription: PropTypes.func.isRequired,
  userGuid: PropTypes.string.isRequired,
  familyGuid: PropTypes.string.isRequired,
};

const selector = formValueSelector('InscriptionForm');
const syncErrorsSelector = getFormSyncErrors('InscriptionForm');

export default connect((state) => ({
  family: selector(state, 'family'),
  password: selector(state, 'password'),
  syncErrors: syncErrorsSelector(state),
}))(InscriptionContainer);
