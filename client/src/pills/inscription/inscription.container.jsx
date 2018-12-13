import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import PropTypes from 'prop-types';
import { inscription } from './inscription.actions';
import InscriptionViewForm from './inscription.view';
import { show, hide } from '../modal/modal.actions';
import { Loader, ErrorModal } from '../modal/modal.container';

class InscriptionContainer extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin({ startDate, family, conjoint, password, confirmpassword, ads }) {
    const { dispatch, onInscription, userIDs } = this.props;
    const showModal = () => dispatch(show(Loader));
    const showErrorModal = () => dispatch(show(ErrorModal));
    const hideModal = () => dispatch(hide());
    dispatch(
      inscription({
        userIDs,
        startDate,
        family,
        conjoint,
        password,
        confirmpassword,
        ads,
        onPending: showModal,
        onSuccess: (user) => {
          hideModal();
          if (!user || !user.isLogged || user.gSesGuid == 0) {
            showErrorModal();
          }
          onInscription(user);
        },
        onFailure: (e) => {},
      }),
    );
  }
  render() {
    return (
      <InscriptionViewForm
        onSubmit={this.handleLogin}
        family={this.props.family}
      />
    );
  }
}

InscriptionContainer.propTypes = {
  onInscription: PropTypes.func.isRequired,
};

const selector = formValueSelector('InscriptionForm');
export default connect((state) => ({
  family: selector(state, 'family'),
}))(InscriptionContainer);
