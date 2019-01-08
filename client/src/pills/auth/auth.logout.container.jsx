import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { show, destroy } from '../modal/modal.actions';
import { BigLoaderModal } from '../modal/modal.loaders';

import { logout } from './auth.actions';

const showLoaderModal = () =>
  show(
    BigLoaderModal({
      content: 'Déconnexion en cours...',
    }),
  );

class LogoutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { dispatch } = this.props;
    dispatch(showLoaderModal());
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
