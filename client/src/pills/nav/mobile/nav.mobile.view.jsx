import React, { Fragment } from 'react';

import t from '../../../i18n';
import { Button, Menu, Sidebar } from '../../../ui-kit';

import Mobilities from './nav.mobile.mobilities.view';
import NavMobileHeaderView from './nav.mobile.header.view';
import NavMobileBodyView from './nav.mobile.body.view';
import NavMobileFooterView from './nav.mobile.footer.view';
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
              <NavMobileHeaderView
                visible={visible}
                onClose={this.handleCloseClick}
              />
            </Menu.Item>
            {/* MOBILITIES */}
            <Menu.Item>
              <Mobilities
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
              <NavMobileBodyView />
            </Menu.Item>
            {/* FOOTER */}
            <div>
              <NavMobileFooterView />
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
