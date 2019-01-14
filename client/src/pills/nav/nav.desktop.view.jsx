import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import t from '../../i18n';
import { Menu, Dropdown, Image, Icon } from '../../ui-kit';
import logo from '../../images/logo-sans-fond_nopadding.png';
import Theme from '../../models/theme.model';

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

const NavDesktopView = ({ themes, children }) => (
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
    <SubNavDesktopView themes={themes} />
    {children}
  </>
);

NavDesktopView.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
};

export default NavDesktopView;
