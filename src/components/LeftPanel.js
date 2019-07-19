import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_OPTIONS } from 'global-constants';

import styles from './LeftPanel.module.scss';

const LeftPanel = () => {
  return (
    <>
    <ul id={styles.leftpanel}>
      {
        ROUTE_OPTIONS.map((option) => {
          return (
            <li key={option.name}>
               <NavLink to={option.url} className={styles.link} activeClassName={styles.active}>
                 <div className={styles.bar}/>{option.name}
               </NavLink>
            </li>
          );
        })
      }
    </ul>
    <div className={styles.divide}/>
    </>
  );
};

export default LeftPanel;