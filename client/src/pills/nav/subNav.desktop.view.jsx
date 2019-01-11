import React, { Fragment } from 'react';

import t from '../../i18n';
import { Menu, Dropdown } from '../../ui-kit';

var themes = [
  { theme_id: 'TH01', theme_label: 'Chômage et retraite' },
  { theme_id: 'TH02', theme_label: 'Santé' },
  { theme_id: 'TH03', theme_label: 'Famille & Animaux' },
  { theme_id: 'TH04', theme_label: 'Argent & Patrimoine' },
  { theme_id: 'TH05', theme_label: 'Logement & Déménagement' },
  { theme_id: 'TH06', theme_label: "S'installer sur place" },
];

var services = [
  {
    service_id: 'SC01',
    service_type: 'obligatoire',
    service_label: 'Chômage et retraite',
  },
  { service_id: 'SC02', service_type: 'optionnel', service_label: 'Santé' },
  {
    service_id: 'SC03',
    service_type: 'obligatoire',
    service_label: 'Famille & Animaux',
  },
  {
    service_id: 'SC04',
    service_type: 'optionnel',
    service_label: 'Argent & Patrimoine',
  },
  {
    service_id: 'SC05',
    service_type: 'obligatoire',
    service_label: 'Logement & Déménagement',
  },
  {
    service_id: 'SC06',
    service_type: 'optionnel',
    service_label: "S'installer sur place",
  },
];
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
        {services.map((el) => (
          <Dropdown.Item>{el.service_label}</Dropdown.Item>
        ))}
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
