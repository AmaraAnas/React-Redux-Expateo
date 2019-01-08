import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector, getFormSyncErrors } from 'redux-form';

import {
  showBigLoaderModal,
  showErrorModal,
  destroy,
} from '../modal/modal.actions';

import { inscription } from './inscription.actions';
import InscriptionViewForm from './inscription.view';

class InscriptionContainer extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin({ allowEmail, ...formValues }) {
    const { dispatch, onInscription, userGuid, familyGuid } = this.props;
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
