import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Theme from '../../models/theme.model';
import { themesByTasksSelector } from '../themes/themes.selectors';
import { getThemes } from '../themes/themes.actions';
import { getTasks } from '../tasks/tasks.actions';

import NavResponsive from './nav.responsive.view';
import { useDispatch, withHook } from '../../hooks/useDispatch.hook';

const NavContainer = ({ themes, children }) => {
  return <NavResponsive themes={themes}>{children}</NavResponsive>;
};

function mapStateToProps(store) {
  return {
    themes: themesByTasksSelector(store),
  };
}

function mapDispatchToProps(dispatch) {
  return useDispatch(dispatch)(getTasks, getThemes);
}

NavContainer.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withHook(useDispatch)(NavContainer));
