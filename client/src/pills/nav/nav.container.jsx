import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Theme from '../../models/theme.model';
import { themesSelector } from '../themes/themes.selectors';
import { getThemes } from '../themes/themes.actions';

import NavResponsive from './nav.responsive.view';

const NavContainer = ({ getThemes, themes, children }) => {
  useEffect(() => {
    getThemes();
  }, []);
  return <NavResponsive themes={themes}>{children}</NavResponsive>;
};

function mapStateToProps(store) {
  return {
    themes: themesSelector(store),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getThemes: () => dispatch(getThemes()),
  };
}

NavContainer.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavContainer);
