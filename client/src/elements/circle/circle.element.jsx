import React from 'react';

import styles from './circle.element.module.css';

export default ({ children }) => (
  <span className={styles.circle}>{children}</span>
);
