import React, { Fragment } from 'react';

import t from '../../i18n';
import { Menu, Dropdown } from '../../ui-kit';

export default () => (
  <Menu fluid widths={3}>
    <Dropdown item text="Thèmes">
      <Dropdown.Menu>
        <Dropdown.Item>Personnaliser ma checklist</Dropdown.Item>
        <Dropdown.Item>Ma situation</Dropdown.Item>
        <Dropdown.Item>Mon compte</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown item text="Services">
      <Dropdown.Menu>
        <Dropdown.Item>Personnaliser ma checklist</Dropdown.Item>
        <Dropdown.Item>Ma situation</Dropdown.Item>
        <Dropdown.Item>Mon compte</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item
      name="DeviesFactures"
      onClick={() => {
        console.log('hello');
      }}
    >
      Devies & Factures
    </Menu.Item>
  </Menu>
);
