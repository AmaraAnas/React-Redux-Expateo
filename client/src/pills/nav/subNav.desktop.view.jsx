import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import t from '../../i18n';
import { Menu, Dropdown } from '../../ui-kit';

import { themes, services } from './nav.mocked.data';

export default () => (
  <Menu fluid widths={3}>
    <Dropdown item text="Thèmes">
      <Dropdown.Menu>
        {themes.map((el) => (
          <Dropdown.Item as={Link} to="DumbPage0">
            {el.theme_label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown item text="Services">
      <Dropdown.Menu>
        <Dropdown.Header content="Services Obligatoires" icon="chess queen" />
        {services.map((el) => {
          return el.service_type == 'obligatoire' ? (
            <Menu.Item as={Link} to="DumbPage1" position="left">
              {el.service_label}
            </Menu.Item>
          ) : (
            <> </>
          );
        })}
        <Dropdown.Header content="Services Optionnels" icon="chess pawn" />
        {services.map((el) => {
          return el.service_type == 'optionnel' ? (
            <Menu.Item as={Link} to="DumbPage2" position="left">
              {el.service_label}
            </Menu.Item>
          ) : (
            <> </>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item name="DeviesFactures" as={Link} to="DumbPage3">
      Devies & Factures
    </Menu.Item>
  </Menu>
);
