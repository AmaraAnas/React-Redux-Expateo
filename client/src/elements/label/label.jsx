import React from 'react';

import styles from './label.module.css';

export default function Label({ children, disabled, ...props }) {
  return (
    <label className={styles.label} disabled={disabled} {...props}>
      {children}
    </label>
  );
}
