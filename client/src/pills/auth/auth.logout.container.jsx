import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showBigLoaderModal, destroy } from '../modal/modal.actions';

import { logout } from './auth.actions';

class LogoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { dispatch } = this.props;
    dispatch(
      showBigLoaderModal({
        content: 'Déconnexion en cours...',
      }),
    );
    dispatch(logout());
    dispatch(destroy());
  }

  render() {
    return this.props.render({ logout: this.handleLogout });
  }
}

LogoutContainer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default connect(null)(LogoutContainer);
