import React from 'react';

import { Responsive, Segment } from '../../ui-kit';

const MenuMobile = React.lazy(() =>
  import(/* webpackChunkName: "nav.mobile" */
  './nav.mobile.view'),
);

const MenuDesktop = React.lazy(() =>
  import(/* webpackChunkName: "nav.desktop" */
  './nav.desktop.view'),
);

export default (props) => (
  <Segment.Group>
    <Responsive as={Segment} maxWidth={Responsive.onlyMobile.maxWidth}>
      <MenuMobile {...props} />
    </Responsive>
    <Responsive as={Segment} minWidth={Responsive.onlyTablet.minWidth}>
      <MenuDesktop {...props} />
    </Responsive>
  </Segment.Group>
);
