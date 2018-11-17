import React from 'react';
import { connect } from 'react-redux';
import { Loader as SMLoader } from 'semantic-ui-react';

import ModalView from './modal.view';
import { hide } from './modal.actions';

function Modal({ dispatch, ...rest }) {
  return <ModalView onClose={() => dispatch(hide())} {...rest} />;
}

function mapStateToProps({ Modal }) {
  return Modal;
}

export const Loader = {
  content: (
    <SMLoader size="big">Vérification des identifiants en cours</SMLoader>
  ),
  onClose: () => {},
};

export default connect(mapStateToProps)(Modal);
