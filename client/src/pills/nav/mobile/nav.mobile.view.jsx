import React, { Fragment } from 'react';

import t from '../../../i18n';
import { Button, Menu, Sidebar } from '../../../ui-kit';

import Mobilities from './nav.mobile.mobilities.view';
import NavMobileHeaderView from './nav.mobile.header.view';
import styles from './nav.mobile.module.css';
import NavMobileBodyView from './nav.mobile.body.view';

const MenuStyle = {
  border: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const FooterContainerStyle = { border: 0 };

const FooterButtonGroupStyle = {
  borderRadius: 0,
  borderLeft: 0,
  borderRight: 0,
};

const FooterProfileButtonStyle = {
  textAlign: 'left',
  width: '80%',
  borderRadius: 0,
  borderLeft: 0,
  borderRight: 0,
};

const FooterLogoutButtonStyle = {
  width: '20%',
  borderRadius: 0,
  borderRight: 0,
};

const MenuOpenerButtonStyle = { position: 'fixed', bottom: '0', width: '100%' };

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
            style={MenuStyle}
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
            <Menu.Item className={styles.bodyContainerStyle}>
              <NavMobileBodyView />
            </Menu.Item>
            {/* THE FOOTER */}
            <Menu style={FooterContainerStyle} borderless fluid>
              <Button.Group basic fluid style={FooterButtonGroupStyle}>
                <Button
                  icon="user"
                  content="Profile"
                  style={FooterProfileButtonStyle}
                />
                <Button icon="power" style={FooterLogoutButtonStyle} />
              </Button.Group>
            </Menu>
          </Sidebar>
          <Sidebar.Pusher dimmed={visible}>
            {children}
            <Button
              circular
              icon="bars"
              disabled={visible}
              onClick={this.handleShowClick}
              attached="bottom"
              style={MenuOpenerButtonStyle}
              primary
            />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </>
    );
  }
}

export default NavMobileView;
