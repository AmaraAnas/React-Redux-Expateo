import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import t from '../../i18n';
import { Menu, Dropdown, Divider } from '../../ui-kit';
import Theme from '../../models/theme.model';
import Service from '../../models/service.model';

// TODO: i18nified
// TODO: remove magic string
// TODO: simple tests
// TODO: reshake (remoe the subject prefix) mocked data

const SubNavDesktopView = ({ themes, services }) => (
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
        <Dropdown.Header>Optionnels</Dropdown.Header>
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
    <Menu.Item as={Link} to="/bills">
      Devis & Factures
    </Menu.Item>
  </Menu>
);

SubNavDesktopView.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.instanceOf(Theme)).isRequired,
  services: PropTypes.arrayOf(PropTypes.instanceOf(Service)).isRequired,
};

export default SubNavDesktopView;
