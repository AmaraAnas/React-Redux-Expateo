import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import t from '../../i18n';
import { Menu, Dropdown, Divider } from '../../ui-kit';

import { themes, services } from './nav.mocked.data';
// simple tests
// reshake (remoe the subject prefix) mocked data

export default () => (
  <Menu fluid widths={3} attached>
    <Dropdown item text={t('menu.subNav.themes')}>
      <Dropdown.Menu>
        {themes.map((el, i) => (
          <Dropdown.Item
            as={Link}
            to="DumbPage0"
            key={i}
            text={el.theme_label}
          />
        ))}
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown item text={t('menu.subNav.services')}>
      <Dropdown.Menu>
        <Dropdown.Header>{t('menu.subNav.obligation')}</Dropdown.Header>
        {services
          .filter((el) => el.service_type === 'obligatoire')
          .map((el, i) => (
            <Dropdown.Item
              key={i}
              as={Link}
              to="DumbPage1"
              description="obligatoire"
              text={el.service_label}
            />
          ))}
        <Divider />
        <Dropdown.Header>{t('menu.subNav.optionnel')}</Dropdown.Header>
        {services
          .filter((el) => el.service_type === 'optionnel')
          .map((el, i) => (
            <Dropdown.Item
              key={i}
              as={Link}
              to="DumbPage2"
              text={el.service_label}
            />
          ))}
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item name="DeviesFactures" as={Link} to="DumbPage3">
      {t('menu.subNav.factures')}
    </Menu.Item>
  </Menu>
);
