import React, { Fragment } from 'react';

import { Responsive, Segment } from '../../ui-kit';

const NavMobile = React.lazy(() =>
  import(/* webpackChunkName: "nav.mobile" */
  './nav.mobile.view'),
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

export default NavResponsiveView;
