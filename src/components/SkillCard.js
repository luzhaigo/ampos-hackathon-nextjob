import React from 'react';

import styles from './SkillCard.module.scss';

export default ({reference}) => {
  return (
    <a className={styles.skillcard} href={reference.link} target="_blank" rel="noopener noreferrer">
      <div className={styles.img}><img src={reference.image} alt=""/></div>
      <div className={styles.coursename}>{reference.courseName}</div>
      <div className={styles.link} >{reference.description}</div>
    </a>
  )
};