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
  List,
  Dropdown,
  Label,
} from '../../ui-kit';
import logo from '../../logo.svg';

import SubNavMobileView from './subNav.mobile.view';
import { Divider } from 'semantic-ui-react';

const Mobilite = () => (
  <List.Item>
    <Segment style={{ maxWidth: '85px' }} size="mini">
      Titre mobilité Titre mobilité Titre mobilité
    </Segment>
  </List.Item>
);

class NavMobileView extends React.Component {
  state = { visible: false, wide: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible, wide } = this.state;
    const { children } = this.props;

    return (
      <>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="push"
            onHide={this.handleSidebarHide}
            visible={visible}
            style={{
              border: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            vertical
          >
            {/* THE HEADER */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <Image src={logo} size="tiny" />
                </div>

                {visible ? (
                  <Icon
                    name="triangle left"
                    disabled={!visible}
                    onClick={this.handleHideClick}
                    size="large"
                    style={{ margin: '4px' }}
                    color="grey"
                  />
                ) : (
                  <Icon
                    name="triangle right"
                    disabled={!visible}
                    onClick={this.handleHideClick}
                    size="large"
                    style={{ margin: '4px' }}
                    color="grey"
                  />
                )}
              </div>
            </div>
            {/* THE MOBILITIES */}
            <Menu.Item>
              <List
                horizontal
                style={{
                  display: 'flex',
                  width: '100%',
                  overflowX: 'visible',
                  overflowY: 'hidden',
                  paddingBottom: '5px',
                }}
              >
                <Mobilite />
                <Mobilite />
                <Mobilite />
                <Mobilite />
              </List>
            </Menu.Item>
            {/* THE BODY */}
            <Menu.Item
              style={{ flexGrow: '1', flexShrink: '1', overflowY: 'auto' }}
              className="borderless"
            >
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
            <Menu style={{ border: 0 }} borderless fluid>
              <Button.Group
                basic
                fluid
                style={{ borderRadius: 0, borderLeft: 0, borderRight: 0 }}
              >
                <Button
                  icon="user"
                  content="Profile"
                  style={{
                    textAlign: 'left',
                    width: '80%',
                    borderRadius: 0,
                    borderLeft: 0,
                    borderRight: 0,
                  }}
                />
                <Button
                  icon="power"
                  style={{
                    width: '20%',
                    borderRadius: 0,
                    borderRight: 0,
                  }}
                />
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
              style={{ position: 'fixed', bottom: '0', width: '100%' }}
              primary
            />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </>
    );
  }
}

export default NavMobileView;
