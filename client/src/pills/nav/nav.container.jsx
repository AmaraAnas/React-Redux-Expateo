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
import { shouldCollapseSelector } from './nav.selectors';
import { getProfiles } from '../profiles/profiles.actions';
import { mainProfileSelector } from '../profiles/profiles.selectors';

import NavResponsive from './nav.responsive.view';

const NavContainer = ({
  userFirstLetters,
  themes,
  services,
  mobility,
  collapsed,
  children,
}) => (
  <NavResponsive
    services={services}
    themes={themes}
    mobility={mobility}
    collapsed={collapsed}
    userFirstLetters={userFirstLetters}
  >
    {children}
  </NavResponsive>
);

function mapStateToProps(store) {
  const currentProfile = mainProfileSelector(store);
  return {
    collapsed: shouldCollapseSelector(store),
    themes: themesByTasksSelector(store),
    services: servicesWithTaskSelector(store),
    mobility: currentMobilitySelector(store),
    userFirstLetters: currentProfile
      ? `${currentProfile.firstname[0]}${currentProfile.lastname[0]}`
      : '',
  };
}

function mapDispatchToProps(dispatch) {
  return useDispatch(dispatch)(getProfiles, getTasks, getThemes, getServices);
}

NavContainer.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
  services: PropTypes.arrayOf(PropTypes.instanceOf(Service)).isRequired,
  mobility: PropTypes.instanceOf(Mobility),
  userFirstLetters: PropTypes.string.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withHook(useDispatch)(NavContainer));
