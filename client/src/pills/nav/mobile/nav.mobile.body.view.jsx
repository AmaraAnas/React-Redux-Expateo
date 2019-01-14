import React, { Fragement } from 'react';

import { Dropdown, Menu, Label } from '../../../ui-kit';

import styles from './nav.mobile.module.css';

const NavMobileBodySectionEntry = ({ children, ...rest }) => (
  <Menu.Item className={styles.bodySectionEntry} {...rest}>
    {children}
  </Menu.Item>
);

const NavMobileBodySection = ({ children, ...rest }) => (
  <Menu.Item {...rest}>{children}</Menu.Item>
);

const NavMobileBodyView = () => (
  <>
    <NavMobileBodySection>
      <NavMobileBodySectionEntry>Dashboard</NavMobileBodySectionEntry>
      <NavMobileBodySectionEntry>
        <Dropdown text="Thèmes">
          <Dropdown.Menu>
            <Dropdown.Item text="Chômage et retraite" />
            <Dropdown.Item text="Santé" />
            <Dropdown.Item text="Famille & Animaux" />
            <Dropdown.Item text="Argent & Patrimoine" />
            <Dropdown.Item text="Logement & Déménagement" />
            <Dropdown.Item text="S'installer sur place" />
          </Dropdown.Menu>
        </Dropdown>
      </NavMobileBodySectionEntry>
      <NavMobileBodySectionEntry>
        <Dropdown text="Services">
          <Dropdown.Menu>
            <Dropdown.Item text="Service 1" description="obligatoire" />
            <Dropdown.Item text="Service 2" description="obligatoire" />
            <Dropdown.Item text="Service 3" description="obligatoire" />
            <Dropdown.Item text="Service 4" description="obligatoire" />
            <Dropdown.Item text="Service 1" />
            <Dropdown.Item text="Service 1" />
            <Dropdown.Item text="Service 1" />
          </Dropdown.Menu>
        </Dropdown>
      </NavMobileBodySectionEntry>
    </NavMobileBodySection>
    <NavMobileBodySection>
      <NavMobileBodySectionEntry disabled name="inbox">
        <Label color="red">1</Label>
        Messagerie
      </NavMobileBodySectionEntry>

      <NavMobileBodySectionEntry disabled name="Documents">
        <Label color="red">1</Label>
        Documents
      </NavMobileBodySectionEntry>
    </NavMobileBodySection>
  </>
);

export default NavMobileBodyView;
