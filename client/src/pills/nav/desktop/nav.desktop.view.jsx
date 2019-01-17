import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import t from '../../../i18n';
import { Menu, Dropdown, Image, Icon } from '../../../ui-kit';
import logo from '../../../images/logo-sans-fond_nopadding.png';
import Theme from '../../../models/theme.model';
import Service from '../../../models/service.model';
import Mobility from '../../../models/mobility.model';

import NavDesktopSubNav from './nav.desktop.subNav.view';
import NavDesktopJumbotron from './nav.desktop.jumbotron.view';

const MenuItemWithIcon = ({ disabled = true, iconName, label, badge }) => (
  <Menu.Item disabled={disabled}>
    <Icon.Group size="big">
      <Icon name={iconName} />
      {badge && <Icon name="circle" className="top right" color="red" corner />}
    </Icon.Group>
    {label}
  </Menu.Item>
);

const NavDesktopView = ({ themes, services, mobility, children }) => (
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
            <Dropdown.Item disabled>Personnaliser ma checklist</Dropdown.Item>
            <Dropdown.Item disabled>Ma situation</Dropdown.Item>
            <Dropdown.Item disabled>Mon compte</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
    <NavDesktopJumbotron mobility={mobility} />
    <NavDesktopSubNav themes={themes} services={services} />
    {children}
  </>
);

NavDesktopView.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
  services: PropTypes.arrayOf(PropTypes.instanceOf(Service)).isRequired,
  mobility: PropTypes.instanceOf(Mobility),
};

export default NavDesktopView;
