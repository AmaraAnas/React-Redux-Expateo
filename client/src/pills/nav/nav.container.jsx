import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { useDispatch, withHook } from '../../hooks/useDispatch.hook';
import Theme from '../../models/theme.model';
import Service from '../../models/service.model';

import { themesByTasksSelector } from '../themes/themes.selectors';
import { getThemes } from '../themes/themes.actions';
import { getTasks } from '../tasks/tasks.actions';
import { servicesWithTaskSelector } from '../services/services.selectors';
import { getServices } from '../services/services.actions';

import NavResponsive from './nav.responsive.view';

const NavContainer = ({ themes, services, children }) => (
  <NavResponsive services={services} themes={themes}>
    {children}
  </NavResponsive>
);

function mapStateToProps(store) {
  return {
    themes: themesByTasksSelector(store),
    services: servicesWithTaskSelector(store),
  };
}

function mapDispatchToProps(dispatch) {
  return useDispatch(dispatch)(getTasks, getThemes, getServices);
}

NavContainer.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
  services: PropTypes.arrayOf(PropTypes.instanceOf(Service)).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withHook(useDispatch)(NavContainer));
