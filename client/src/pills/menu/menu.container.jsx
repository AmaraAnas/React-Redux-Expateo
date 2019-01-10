import React, { Component }from 'react';
import { connect } from 'react-redux';
import {  header,Segment, Responsive  } from 'semantic-ui-react'

import DesktopView from './menu.desktop.view';
import TabletView from './menu.tablet.view';
import MobileView from './menu.mobile.view';



class MenuContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <header >
        <Responsive as={Segment} minWidth={860}>
            <DesktopView />
        </Responsive>
        <Responsive as={Segment} minWidth={320} maxWidth={860}>
            <TabletView />
        </Responsive>
        <Responsive as={Segment} maxWidth={320}>
            <MobileView />
        </Responsive>
    </header>

    );
  }
}




export default connect(null)(MenuContainer);
