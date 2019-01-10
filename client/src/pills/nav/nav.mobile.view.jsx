import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Dropdown, Image } from '../../ui-kit';
import logo from '../../images/logo-sans-fond_nopadding.png';

const NavMobileView = ({ children }) => (
  <>
    {children}
    <Menu attached="top" size="massive">
      <Menu.Menu position="left">
        <Image src={logo} style={{ minWidth: '100%', height: '100px' }} />
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item>
          <h1>Messagerie</h1>
        </Menu.Item>
        <Menu.Item>
          <h1>Notifications</h1>
        </Menu.Item>
        <Menu.Item>
          <h1>Documents</h1>
        </Menu.Item>
        <Dropdown item text="Profil">
          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>Russian</Dropdown.Item>
            <Dropdown.Item>Spanish</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  </>
);

export default NavMobileView;
