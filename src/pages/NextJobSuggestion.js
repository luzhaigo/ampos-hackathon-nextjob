import React from 'react';
import { connect } from 'react-redux';
import useRouter from 'use-react-router';
import arrow from 'assets/Shape.svg';
import image1 from 'assets/Group_3.svg';
import image2 from 'assets/Group_4.svg';
import image3 from 'assets/Group_5.svg';

import styles from './NextJobSuggestion.module.scss';

const images = [image1, image2, image3];

const NextJobSuggestion = ({recommendations}) => {
  const { history } = useRouter();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>YOUR NEXT JOB IS ...</h1>
      {
        recommendations.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.scores}><img src={images[index]} alt=""></img></div>
              <div className={styles.content}>
                <div className={styles.position}>{item.position}</div>
                <div className={styles.type}>{item.industry}</div>
                <div className={styles.reason}><a target="_blank" rel="noopener noreferrer" href={item.reason.link}>{item.reason.content}</a></div>
              </div>
              <div className={styles.arrow} onClick={() => {
                history.push(`description/${index}`)
              }}><img src={arrow} alt="arrow"/></div>
            </div>
          );
        })
      }
      <div className={styles.loadmore}>Load More...</div>
    </div>
  );
}

const mapStateToProps = (state) => ({recommendations: state.res.recommendations});

export default connect(mapStateToProps)(NextJobSuggestion);