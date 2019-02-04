import React from 'react';
import { Link } from 'react-router-dom';

import Logout from '../../auth/auth.logout.container';

import { Button } from '../../../ui-kit';

import styles from './nav.mobile.module.css';

const NavMobileFooterView = () => (
  <Button.Group className={styles.footerButtonGroup} basic fluid>
    <Button
      className={styles.footerProfileButton}
      as={Link}
      icon="user"
      content="Profile"
      to="/me"
    />
    <Logout
      render={({ logout }) => (
        <Button
          className={styles.footerLogoutButton}
          onClick={logout}
          icon="power"
        />
      )}
    />
  </Button.Group>
);

export default NavMobileFooterView;
