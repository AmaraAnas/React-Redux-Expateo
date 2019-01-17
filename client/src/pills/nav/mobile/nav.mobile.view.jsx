import React, { Fragment } from 'react';

import { Button, Menu, Sidebar } from '../../../ui-kit';

import NavMobileMobilities from './nav.mobile.mobilities.view';
import NavMobileHeader from './nav.mobile.header.view';
import NavMobileBody from './nav.mobile.body.view';
import NavMobileFooter from './nav.mobile.footer.view';
import styles from './nav.mobile.module.css';

class NavMobileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleSidebarHide = this.handleSidebarHide.bind(this);
  }

  handleCloseClick() {
    this.setState({ visible: false });
  }

  handleSidebarHide() {
    this.handleCloseClick();
  }

  handleShowClick() {
    this.setState({ visible: true });
  }

  render() {
    const { visible } = this.state;
    const { children } = this.props;

    return (
      <>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="push"
            onHide={this.handleSidebarHide}
            visible={visible}
            className={styles.menuContainer}
            vertical
          >
            {/* HEADER */}
            <Menu.Item>
              <NavMobileHeader
                visible={visible}
                onClose={this.handleCloseClick}
              />
            </Menu.Item>
            {/* MOBILITIES */}
            <Menu.Item>
              <NavMobileMobilities
                mobilities={[
                  { id: '1', title: 'Titre mobilité' },
                  { id: '2', title: 'Titre mobilité' },
                  { id: '3', title: 'Titre mobilité' },
                  { id: '4', title: 'Titre mobilité' },
                ]}
              />
            </Menu.Item>
            {/* BODY */}
            <Menu.Item className={styles.bodyContainer}>
              <NavMobileBody />
            </Menu.Item>
            {/* FOOTER */}
            <div>
              <NavMobileFooter />
            </div>
          </Sidebar>
          <Sidebar.Pusher dimmed={visible}>
            {/* CONTENT PAGE */}
            {children}
            {/* MENU OPENER */}
            <div className={styles.menuOpenerButtonContainer}>
              <Button
                onClick={this.handleShowClick}
                disabled={visible}
                icon="bars"
                size="big"
                circular
                primary
              />
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </>
    );
  }
}

export default NavMobileView;
