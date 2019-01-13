import React, { Fragment } from 'react';

import t from '../../../i18n';
import { Button, Menu, Sidebar, Dropdown, Label } from '../../../ui-kit';

import Mobilities from './nav.mobile.mobilities.view';
import NavMobileHeaderView from './nav.mobile.header.view';

const MenuStyle = {
  border: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};

const BodyContainerStyle = {
  flexGrow: '1',
  flexShrink: '1',
  overflowY: 'auto',
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
            {/* THE HEADER */}
            <Menu.Item>
              <NavMobileHeaderView
                visible={visible}
                onClose={this.handleCloseClick}
              />
            </Menu.Item>
            {/* THE MOBILITIES */}
            <Menu.Item>
              <Mobilities
                mobilities={[
                  { id: 1, title: 'Titre mobilité' },
                  { id: 2, title: 'Titre mobilité' },
                  { id: 3, title: 'Titre mobilité' },
                  { id: 4, title: 'Titre mobilité' },
                ]}
              />
            </Menu.Item>
            {/* THE BODY */}
            <Menu.Item style={BodyContainerStyle} className="borderless">
              <Menu.Item>
                {/* <SubNavMobileView /> */}
                <Menu.Item className="text">Dashboard</Menu.Item>
                <Menu.Item>
                  <Dropdown text="Thèmes">
                    <Dropdown.Menu>
                      <Dropdown.Item text="Chômage et retraite" />
                      <Dropdown.Item text="Santé" />
                      <Dropdown.Item text="Famille & Animaux" />
                      <Dropdown.Item text="Argent & Patrimoine" />
                      <Dropdown.Item text="Logement & Déménagement" />
                      <Dropdown.Item text="S'installer sur place" />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
                <Menu.Item>
                  <Dropdown text="Services">
                    <Dropdown.Menu>
                      <Dropdown.Item
                        text="Service 1"
                        description="obligatoire"
                      />
                      <Dropdown.Item
                        text="Service 2"
                        description="obligatoire"
                      />
                      <Dropdown.Item
                        text="Service 3"
                        description="obligatoire"
                      />
                      <Dropdown.Item
                        text="Service 4"
                        description="obligatoire"
                      />
                      <Dropdown.Item text="Service 1" />
                      <Dropdown.Item text="Service 1" />
                      <Dropdown.Item text="Service 1" />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Menu.Item>
              <Menu.Item>
                <Menu.Item disabled name="inbox">
                  <Label color="red">1</Label>
                  Messagerie
                </Menu.Item>

                <Menu.Item disabled name="Documents">
                  <Label color="red">1</Label>
                  Documents
                </Menu.Item>
              </Menu.Item>
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
