import React from 'react';
import icon from 'assets/icon.png';

import styles from './Header.module.scss';

export default () => {
  return (
    <nav id={styles.nav}>
      <img src={icon} alt="icon"/>
    </nav>
  );
};