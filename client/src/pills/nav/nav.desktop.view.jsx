import React, { Fragment } from 'react';

import t from '../../i18n';
import { Menu, Dropdown, Image, Icon, Label } from '../../ui-kit';
import logo from '../../images/logo-sans-fond_nopadding.png';
import SubNavDesktopView from './subNav.desktop.view';

const MenuItemWithIcon = ({ disabled = true, iconName, label, badge }) => (
  <Menu.Item disabled={disabled}>
    <Icon.Group size="big">
      <Icon name={iconName} />
      {badge && <Icon name="circle" className="top right" color="red" corner />}
    </Icon.Group>
    {label}
  </Menu.Item>
);

const NavDesktopView = ({ children }) => (
  <>
    <Menu secondary>
      <Menu.Menu position="left" style={{ minWidth: '190px' }}>
        <Image src={logo} style={{ width: 'auto', height: '70px' }} />
      </Menu.Menu>
      <Menu.Menu position="right">
        <MenuItemWithIcon iconName="folder" label={t('menu.documents')} />
        <MenuItemWithIcon
          iconName="comments"
          label={t('menu.messages').concat(' (0)')}
          badge={true}
        />
        <MenuItemWithIcon
          iconName="bell"
          label={t('menu.notifications')}
          badge={true}
        />
        <Dropdown item icon={<Icon fitted size="huge" name="user circle" />}>
          <Dropdown.Menu>
            <Dropdown.Item>Personnaliser ma checklist</Dropdown.Item>
            <Dropdown.Item>Ma situation</Dropdown.Item>
            <Dropdown.Item>Mon compte</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
    <SubNavDesktopView />
    {children}
  </>
);

export default NavDesktopView;
