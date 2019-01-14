import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import t from '../../i18n';
import { Menu, Dropdown, Image, Icon, Label } from '../../ui-kit';
import logo from '../../images/logo-sans-fond_nopadding.png';
import styles from './nav.module.css';
import SubNavDesktopView from './subNav.desktop.view';

const MenuItemWithIcon = ({ disabled, iconName, label, badge, link }) => (
  <Menu.Item
    disabled={disabled}
    as={Link}
    to={link}
    style={{ cursor: 'pointer' }}
  >
    <Icon
      name={iconName}
      className={styles.badge1}
      data-badge={badge}
      size="big"
    />
    {label}
  </Menu.Item>
);

const NavDesktopView = ({ children }) => (
  <>
    <Menu secondary>
      <Menu.Menu
        as={Link}
        to="dashbord"
        position="left"
        style={{ minWidth: '190px' }}
      >
        <Image src={logo} style={{ width: 'auto', height: '70px' }} />
      </Menu.Menu>
      <Menu.Menu position="right">
        <MenuItemWithIcon
          iconName="folder"
          label={t('menu.documents')}
          disabled={true}
          link="DumbPage1"
        />
        <MenuItemWithIcon
          iconName="comments"
          label={t('menu.messages').concat(' (0)')}
          badge=""
          disabled={true}
          link="DumbPage2"
        />
        <MenuItemWithIcon
          iconName="bell"
          label={t('menu.notifications')}
          disabled={true}
          link="DumbPage3"
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
