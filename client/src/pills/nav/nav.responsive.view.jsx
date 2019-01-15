import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Responsive, Segment } from '../../ui-kit';
import Theme from '../../models/theme.model';

const NavMobile = React.lazy(() =>
  import(/* webpackChunkName: "nav.mobile" */
  './mobile/nav.mobile.view'),
);

const NavDesktop = React.lazy(() =>
  import(/* webpackChunkName: "nav.desktop" */
  './nav.desktop.view'),
);

const NavResponsiveView = (props) => (
  <>
    <Responsive as={Fragment} maxWidth={Responsive.onlyMobile.maxWidth}>
      <NavMobile {...props} />
    </Responsive>
    <Responsive as={Fragment} minWidth={Responsive.onlyTablet.minWidth}>
      <NavDesktop {...props} />
    </Responsive>
  </>
);

NavResponsiveView.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
};

export default NavResponsiveView;
