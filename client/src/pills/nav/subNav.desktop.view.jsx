import React, { Fragment } from 'react';

import t from '../../i18n';
import { Menu, Dropdown, Accordion } from '../../ui-kit';

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
        <Accordion item>
          <Accordion.Title active content="Services Obligatoires" />
          <Accordion.Content active as="menu">
            {services.map((el) => {
              return el.service_type == 'obligatoire' ? (
                <Menu.Item position="left">{el.service_label}</Menu.Item>
              ) : (
                <> </>
              );
            })}
          </Accordion.Content>
          <Accordion.Title active content="Services Optionnels" />
          <Accordion.Content active as="menu">
            {services.map((el) => {
              return el.service_type == 'optionnel' ? (
                <Menu.Item position="left">{el.service_label}</Menu.Item>
              ) : (
                <> </>
              );
            })}
          </Accordion.Content>
        </Accordion>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item name="DeviesFactures" onClick={() => {}}>
      Devies & Factures
    </Menu.Item>
  </Menu>
);
