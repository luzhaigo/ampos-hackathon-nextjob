import React from 'react';
import { connect } from 'react-redux';
import img from 'assets/Group_6.png';
import { NavLink } from 'react-router-dom';

import styles from './ResultPage.module.scss';

const Result = ({rate, reasons}) => {
  const text = reasons.filter((reason) => reason.type === 'TEXT')[0];
  const links = reasons.filter(reason => reason.type === 'LINK');
  return (
    <div className={styles.wapper}>
      <img src={img} alt="" className={styles.img}/>
      <div>
        <div className={styles.title}>Because:</div>
        <div className={styles.content}>{text.content}</div>
        <div className={styles.details}>{text.details}</div>
        <ul>
          {
            links.map((link, index) => {
              return (
                <li key={index}><a href={link.content} target="_blank" rel="noopener noreferrer">{link.content}</a></li>
              );
            })
          }
        </ul>
        <NavLink to="/next-job-suggestion" className={styles.helpme}>Help Me!</NavLink>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({rate: state.res.unemploymentRate, reasons: state.res.reasons});

export default connect(mapStateToProps)(Result);