import React, { Fragment } from 'react';

import { Responsive, Segment } from '../../ui-kit';

const MenuMobile = React.lazy(() =>
  import(/* webpackChunkName: "nav.mobile" */
  './nav.mobile.view'),
);

const MenuDesktop = React.lazy(() =>
  import(/* webpackChunkName: "nav.desktop" */
  './nav.desktop.view'),
);

const NavResponsiveView = (props) => (
  <>
    <Responsive as={Fragment} maxWidth={Responsive.onlyMobile.maxWidth}>
      <MenuMobile {...props} />
    </Responsive>
    <Responsive as={Fragment} minWidth={Responsive.onlyTablet.minWidth}>
      <MenuDesktop {...props} />
    </Responsive>
  </>
);

export default NavResponsiveView;
