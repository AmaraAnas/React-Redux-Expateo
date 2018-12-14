import React from 'react';
import { connect } from 'react-redux';
import { Loader as SMLoader, Button } from 'semantic-ui-react';

import ModalView from './modal.view';
import { hide } from './modal.actions';

function Modal({ dispatch, ...rest }) {
  return <ModalView onClose={() => dispatch(hide())} {...rest} />;
}

function mapStateToProps({ Modal }) {
  return Modal;
}

export const ErrorModal = (dispatch) => ({
  header: <span>Erreur d'inscription</span>,
  content: <p>Le compte existe déja</p>,
  actions: <Button onClick={() => dispatch(hide())}>OK</Button>,
  isBasic: false,
  size: 'mini',
  onClose: () => {},
});

export const Loader = {
  content: (
    <SMLoader size="big">Vérification des identifiants en cours</SMLoader>
  ),
  isBasic: true,
  size: 'small',
  onClose: () => {},
};

export default connect(mapStateToProps)(Modal);
