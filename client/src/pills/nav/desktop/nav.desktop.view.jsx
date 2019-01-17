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

const IconWithRedBadge = ({ icon }) => (
  <>
    <Icon name={icon} />
    <Icon name="circle" className="top right" color="red" corner />
  </>
);

const MenuItemWithIcon = ({ iconName, label, badge }) => (
  <Menu.Item disabled>
    <Icon.Group size="big">
      {badge ? <IconWithRedBadge icon={iconName} /> : <Icon name={iconName} />}
    </Icon.Group>
    {label}
  </Menu.Item>
);

const CollpasedMenuIcons = () => (
  <>
    <MenuItemWithIcon iconName="folder" />
    <MenuItemWithIcon iconName="comments" badge={true} />
    <MenuItemWithIcon iconName="bell" />
  </>
);

const ExpandedMenuIcons = () => (
  <>
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
  </>
);

const NavDesktopView = ({
  themes,
  services,
  mobility,
  collapsed,
  children,
}) => (
  <>
    <Menu secondary>
      <Menu.Menu to="dashbord" position="left">
        <Menu.Item>
          <Image
            src={logo}
            as={Link}
            to="/dashboard"
            style={{ width: '14.1rem' }}
          />
        </Menu.Item>

        {collapsed && (
          <NavDesktopSubNav
            themes={themes}
            services={services}
            collapsed={true}
          />
        )}
      </Menu.Menu>
      <Menu.Menu position="right">
        {collapsed ? <CollpasedMenuIcons /> : <ExpandedMenuIcons />}
        <Dropdown item icon={<Icon fitted size="huge" name="user circle" />}>
          <Dropdown.Menu>
            <Dropdown.Item disabled text="Personnaliser ma checklist" />
            <Dropdown.Item disabled text="Ma situation" />
            <Dropdown.Item disabled text="Mon compte" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
    {!collapsed && <NavDesktopJumbotron mobility={mobility} />}
    {!collapsed && (
      <NavDesktopSubNav themes={themes} services={services} collapsed={false} />
    )}
    {children}
  </>
);

NavDesktopView.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
  services: PropTypes.arrayOf(PropTypes.instanceOf(Service)).isRequired,
  mobility: PropTypes.instanceOf(Mobility),
};

export default NavDesktopView;
