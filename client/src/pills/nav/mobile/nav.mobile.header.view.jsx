import React from 'react';
import { Link } from 'react-router-dom';

import { Image, Icon } from '../../../ui-kit';

import styles from './nav.mobile.module.css';
import logo from '../../../images/logo-sans-fond_nopadding.png';

const NavMobileHeaderView = ({ onClose, visible }) => (
  <div className={styles.header}>
    <div>
      <Image as={Link} to="/dashboard" src={logo} size="small" />
    </div>

    <Icon
      className={styles.headerCloseIcon}
      name={`triangle ${visible ? 'left' : 'right'}`}
      onClick={onClose}
      size="large"
      color="grey"
    />
  </div>
);

export default NavMobileHeaderView;
