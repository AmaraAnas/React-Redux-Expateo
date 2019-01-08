import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showConfirmModal, destroy } from '../modal/modal.actions';

import { logout } from './auth.actions';

class LogoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { dispatch } = this.props;
    dispatch(
      showConfirmModal(
        {
          title: 'Déconnexion',
          message: 'Êtes vous sûre de vous deconnecter ?',
          onNo: () => dispatch(destroy()),
          onYes: () => dispatch(logout()),
        },
        dispatch,
      ),
    );
  }

  render() {
    return this.props.render({ logout: this.handleLogout });
  }
}

LogoutContainer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default connect(null)(LogoutContainer);
