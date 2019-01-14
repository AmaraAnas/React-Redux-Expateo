import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import t from '../../i18n';
import { Menu, Dropdown, Divider } from '../../ui-kit';

import { themes, services } from './nav.mocked.data';
// TODO: i18nified
// TODO: remove magic string
// simple tests
// reshake (remoe the subject prefix) mocked data

export default () => (
  <Menu fluid widths={3}>
    <Dropdown item text="Thèmes">
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
    <Dropdown item text="Services">
      <Dropdown.Menu>
        <Dropdown.Header>Obligatoires</Dropdown.Header>
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
        <Dropdown.Header>Optionnels</Dropdown.Header>
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
      Devis & Factures
    </Menu.Item>
  </Menu>
);
