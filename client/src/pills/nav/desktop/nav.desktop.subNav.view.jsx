import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import t from '../../../i18n';
import { Menu, Dropdown, Divider } from '../../../ui-kit';
import Theme from '../../../models/theme.model';
import Service from '../../../models/service.model';
import styles from './nav.desktop.module.css';

// TODO: simple tests

const SubNavDesktopView = ({ themes, services, collapsed }) => (
  <Menu fluid widths={3} attached={!collapsed}>
    <Dropdown item text={t('menu.subNav.themes')}>
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
    <Dropdown item scrolling text={t('menu.subNav.services')}>
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
    <Menu.Item as={Link} to="/bills" className="text">
      {t('menu.subNav.factures')}
    </Menu.Item>
  </Menu>
);

SubNavDesktopView.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
  services: PropTypes.arrayOf(PropTypes.instanceOf(Service)).isRequired,
  collapsed: PropTypes.bool.isRequired,
};

export default SubNavDesktopView;
