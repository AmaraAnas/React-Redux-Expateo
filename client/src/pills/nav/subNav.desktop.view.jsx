import React, { Fragment } from 'react';

import t from '../../i18n';
import { Menu, Dropdown } from '../../ui-kit';

import { themes, services } from './nav.mocked.data';

export default () => (
  <Menu fluid widths={3}>
    <Dropdown item text="Thèmes">
      <Dropdown.Menu>
        {themes.map((el) => (
          <Dropdown.Item>{el.theme_label}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown item text="Services">
      <Dropdown.Menu>
        <Dropdown.Header content="Services Obligatoires" icon="chess queen" />
        {services.map((el) => {
          return el.service_type == 'obligatoire' ? (
            <Menu.Item position="left">{el.service_label}</Menu.Item>
          ) : (
            <> </>
          );
        })}
        <Dropdown.Header content="Services Optionnels" icon="chess pawn" />
        {services.map((el) => {
          return el.service_type == 'optionnel' ? (
            <Menu.Item position="left">{el.service_label}</Menu.Item>
          ) : (
            <> </>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item name="DeviesFactures" onClick={() => {}}>
      Devies & Factures
    </Menu.Item>
  </Menu>
);
