import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import t from '../../../i18n';
import { Menu, Dropdown, Divider } from '../../../ui-kit';
import Theme from '../../../models/theme.model';
import Service from '../../../models/service.model';

import styles from './nav.desktop.module.css';

// TODO: simple tests
// TODO: Refacto Dropdown text color

const CollapsedSubNav = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      {children}
    </div>
  );
};

const SubNav = ({ children }) => {
  return (
    <Menu fluid widths={3} attached>
      {children}
    </Menu>
  );
};

const SubNavDesktopView = ({ themes, services, collapsed }) => {
  const Nav = collapsed ? CollapsedSubNav : SubNav;
  return (
    <Nav>
      <Dropdown
        item
        className={styles.navtitle}
        text={
          <span className={styles.navtitle}>{t('menu.subNav.themes')}</span>
        }
      >
        <Dropdown.Menu>
          {themes.map((theme, i) => (
            <Dropdown.Item
              key={i}
              text={theme.label}
              as={Link}
              to={`/themes/${theme.id}`}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown
        scrolling
        className={styles.navtitle}
        item
        text={
          <span className={styles.navtitle}>{t('menu.subNav.services')}</span>
        }
      >
        <Dropdown.Menu>
          <Dropdown.Header>{t('menu.subNav.obligation')}</Dropdown.Header>
          {services
            .filter((service) => service.isRequired)
            .map((service, i) => (
              <Dropdown.Item
                key={i}
                description="obligatoire"
                text={service.title}
                as={Link}
                to={`/services/${service.id}`}
              />
            ))}
          <Divider />
          <Dropdown.Header>{t('menu.subNav.optionnel')}</Dropdown.Header>
          {services
            .filter((service) => !service.isRequired)
            .map((service, i) => (
              <Dropdown.Item
                key={i}
                text={service.title}
                as={Link}
                to={`/services/${service.id}`}
              />
            ))}
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item className="text">
        <Link to="/bills">{t('menu.subNav.factures')}</Link>
      </Menu.Item>
    </Nav>
  );
};

SubNavDesktopView.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
  services: PropTypes.arrayOf(PropTypes.instanceOf(Service)).isRequired,
  collapsed: PropTypes.bool.isRequired,
};

export default SubNavDesktopView;
