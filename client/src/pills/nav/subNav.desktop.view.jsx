import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import t from '../../i18n';
import { Menu, Dropdown, Divider } from '../../ui-kit';
import Theme from '../../models/theme.model';

import { services } from './nav.mocked.data';
// TODO: i18nified
// TODO: remove magic string
// TODO: simple tests
// TODO: reshake (remoe the subject prefix) mocked data

const SubNavDesktopView = ({ themes }) => (
  <Menu fluid widths={3}>
    <Dropdown item text="Thèmes">
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
    <Dropdown item text="Services">
      <Dropdown.Menu>
        <Dropdown.Header>Obligatoires</Dropdown.Header>
        {services
          .filter((el) => el.service_type === 'obligatoire')
          .map((el, i) => (
            <Dropdown.Item
              key={i}
              description="obligatoire"
              text={el.service_label}
            />
          ))}
        <Divider />
        <Dropdown.Header>Optionnels</Dropdown.Header>
        {services
          .filter((el) => el.service_type === 'optionnel')
          .map((el, i) => (
            <Dropdown.Item key={i} text={el.service_label} />
          ))}
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item name="DeviesFactures" onClick={() => {}}>
      Devis & Factures
    </Menu.Item>
  </Menu>
);

SubNavDesktopView.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
};

export default SubNavDesktopView;
