import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { useDispatch, withHook } from '../../hooks/useDispatch.hook';
import Theme from '../../models/theme.model';
import Service from '../../models/service.model';
import Mobility from '../../models/mobility.model';

import { themesByTasksSelector } from '../themes/themes.selectors';
import { getThemes } from '../themes/themes.actions';
import { getTasks } from '../tasks/tasks.actions';
import { servicesWithTaskSelector } from '../services/services.selectors';
import { getServices } from '../services/services.actions';
import { currentMobilitySelector } from '../mobilities/mobilities.selectors';
import { getMobilities } from '../mobilities/mobilities.actions';
import { shouldCollapseSelector } from './nav.selectors';

import NavResponsive from './nav.responsive.view';

const NavContainer = ({ themes, services, mobility, collapsed, children }) => (
  <NavResponsive
    services={services}
    themes={themes}
    mobility={mobility}
    collapsed={collapsed}
  >
    {children}
  </NavResponsive>
);

function mapStateToProps(store) {
  return {
    collapsed: shouldCollapseSelector(store),
    themes: themesByTasksSelector(store),
    services: servicesWithTaskSelector(store),
    mobility: currentMobilitySelector(store),
  };
}

function mapDispatchToProps(dispatch) {
  return useDispatch(dispatch)(getMobilities, getTasks, getThemes, getServices);
}

NavContainer.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
  services: PropTypes.arrayOf(PropTypes.instanceOf(Service)).isRequired,
  mobility: PropTypes.instanceOf(Mobility),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withHook(useDispatch)(NavContainer));
