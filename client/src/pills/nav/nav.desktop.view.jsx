import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Dropdown, Image, Icon, Label, Segment } from '../../ui-kit';
import logo from '../../images/logo-sans-fond_nopadding.png';

const MenuItemWithIcon = ({ disabled, iconName, label }) => (
  <Menu.Item>
    <Label
      style={{ background: '#FFF', color: disabled ? 'lightgray' : 'gray' }}
      size="large"
    >
      <Icon name={iconName} size="big" />
      {label}
    </Label>
  </Menu.Item>
);

const NavDesktopView = ({ children }) => (
  <>
    <Menu attached="top" size="massive" borderless>
      <Menu.Menu position="left">
        <Image src={logo} style={{ minWidth: '100%', height: '70px' }} />
      </Menu.Menu>
      <Menu.Menu position="right">
        <MenuItemWithIcon
          iconName="envelope"
          label="Messagerie"
          disabled={true}
        />
        <MenuItemWithIcon
          iconName="bell"
          label="Notifications"
          disabled={true}
        />
        <MenuItemWithIcon iconName="folder" label="Documents" disabled={true} />
        <Dropdown item inline icon={<Icon size="big" name="user circle" />}>
          <Dropdown.Menu>
            <Dropdown.Item>Personnaliser ma checklist</Dropdown.Item>
            <Dropdown.Item>Ma situation</Dropdown.Item>
            <Dropdown.Item>Mon compte</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
    {children}
  </>
);

export default NavDesktopView;
