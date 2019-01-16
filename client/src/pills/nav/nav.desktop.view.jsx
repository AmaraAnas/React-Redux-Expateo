import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import t from '../../i18n';
import { Menu, Dropdown, Image, Icon } from '../../ui-kit';
import logo from '../../images/logo-sans-fond_nopadding.png';
import Theme from '../../models/theme.model';
import Service from '../../models/service.model';

import SubNavDesktopView from './subNav.desktop.view';

const MenuItemWithIcon = ({
  disabled = true,
  iconName,
  label,
  badge,
  link,
}) => (
  <Menu.Item
    disabled={disabled}
    as={Link}
    to={link}
    style={{ cursor: 'pointer' }}
  >
    <Icon.Group size="big">
      <Icon name={iconName} />
      {badge && <Icon name="circle" className="top right" color="red" corner />}
    </Icon.Group>
    {label}
  </Menu.Item>
);

const NavDesktopView = ({ themes, services, children }) => (
  <>
    <Menu secondary>
      <Menu.Menu to="dashbord" position="left">
        <Image
          src={logo}
          as={Link}
          to="/dashboard"
          style={{ width: '190px' }}
        />
      </Menu.Menu>
      <Menu.Menu position="right">
        <MenuItemWithIcon
          iconName="folder"
          label={t('menu.documents')}
          link="DumbPage1"
        />
        <MenuItemWithIcon
          iconName="comments"
          label={t('menu.messages').concat(' (0)')}
          badge={true}
          link="DumbPage2"
        />
        <MenuItemWithIcon
          iconName="bell"
          label={t('menu.notifications')}
          badge={true}
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
    <SubNavDesktopView themes={themes} services={services} />
    {children}
  </>
);

NavDesktopView.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
  services: PropTypes.arrayOf(PropTypes.instanceOf(Service)).isRequired,
};

export default NavDesktopView;
