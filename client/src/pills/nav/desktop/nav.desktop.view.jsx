import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import t from '../../../i18n';
import {
  Menu,
  Dropdown,
  Image,
  Icon,
  Visibility,
  Button,
} from '../../../ui-kit';
import logo from '../../../images/logo-sans-fond_nopadding.png';
import Theme from '../../../models/theme.model';
import Service from '../../../models/service.model';
import Mobility from '../../../models/mobility.model';
import Circle from '../../../elements/circle/circle.element';
import styles from './nav.desktop.module.css';
import Logout from '../../auth/auth.logout.container';

import NavDesktopSubNav from './nav.desktop.subNav.view';
import NavDesktopJumbotron from './nav.desktop.jumbotron.view';
import DropdownItem from 'semantic-ui-react';

const LogoutButton = ({ logout }) => (
  <Button onClick={logout} primary>
    {t('buttons.logout')}
  </Button>
);

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

const menuStyle = {
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  padding: '5px',
};

const fixedMenuStyle = {
  backgroundColor: '#fff',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  padding: '5px',
};

const NavDesktopView = ({
  userFirstLetters,
  themes,
  services,
  mobility,
  collapsed,
  children,
}) => {
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const isCollapsed = isMenuFixed || collapsed;
  const isInDashboard = !collapsed;
  return (
    <>
      <div>
        {isCollapsed && (
          <Visibility
            onBottomPassed={() => setIsMenuFixed(true)}
            onBottomVisible={() => setIsMenuFixed(false)}
            once={false}
          />
        )}
        <Menu
          secondary
          fixed={isMenuFixed ? 'top' : undefined}
          style={isMenuFixed ? fixedMenuStyle : menuStyle}
        >
          <Menu.Menu to="dashbord" position="left">
            <Menu.Item>
              <Image
                src={logo}
                as={Link}
                to="/dashboard"
                style={{ width: '14.1rem' }}
              />
            </Menu.Item>

            {isCollapsed && (
              <NavDesktopSubNav
                themes={themes}
                services={services}
                collapsed={true}
              />
            )}
          </Menu.Menu>
          <Menu.Menu position="right">
            {isCollapsed ? <CollpasedMenuIcons /> : <ExpandedMenuIcons />}
            <Dropdown item icon={<Circle>{userFirstLetters}</Circle>}>
              <Dropdown.Menu>
                <Dropdown.Item disabled text="Personnaliser ma checklist" />
                <Dropdown.Item disabled text="Ma situation" />
                <Dropdown.Item disabled text="Mon compte" />
                <Dropdown.Item>
                  <Logout render={LogoutButton} />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>

        <NavDesktopJumbotron
          mobility={mobility}
          isInDashboard={isInDashboard}
        />
        <Visibility
          offset={1}
          onBottomPassed={() => setIsMenuFixed(true)}
          onBottomVisible={() => setIsMenuFixed(false)}
          once={false}
        >
          {!isCollapsed && (
            <NavDesktopSubNav
              themes={themes}
              services={services}
              collapsed={false}
            />
          )}
        </Visibility>
      </div>
      {children}
    </>
  );
};

NavDesktopView.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
  services: PropTypes.arrayOf(PropTypes.instanceOf(Service)).isRequired,
  mobility: PropTypes.instanceOf(Mobility),
  userFirstLetters: PropTypes.string.isRequired,
};

export default NavDesktopView;
