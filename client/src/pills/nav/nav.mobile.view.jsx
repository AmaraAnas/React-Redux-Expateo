import React, { Fragment } from 'react';

import t from '../../i18n';
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from '../../ui-kit';
import logo from '../../logo.svg';

import SubNavDesktopView from './subNav.desktop.view';

class NavMobileView extends React.Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    const { children } = this.props;

    return (
      <>
        <Button.Group
          style={{ position: 'absolute', zIndex: 9999, top: 0, left: '100px' }}
        >
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
        </Button.Group>

        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="push"
            onHide={this.handleSidebarHide}
            visible={visible}
            width="wide"
            icon="labeled"
            vertical
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              border: '0',
            }}
          >
            <div>
              <Icon
                name="close"
                disabled={!visible}
                onClick={this.handleHideClick}
                size="large"
                style={{
                  top: '5px',
                  right: '5px',
                  position: 'relative',
                  float: 'right',
                }}
              />
              <Image src={logo} floated="left" size="tiny" />
            </div>
            <Menu.Item>
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item>
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item>
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>{children}</Sidebar.Pusher>
        </Sidebar.Pushable>
      </>
    );
  }
}

export default NavMobileView;
