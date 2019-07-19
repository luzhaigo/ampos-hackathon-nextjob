import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SkillCard from 'components/SkillCard';
import image1 from 'assets/Group_3.svg';
import image2 from 'assets/Group_4.svg';
import image3 from 'assets/Group_5.svg';

import styles from './DescriptionPage.module.scss';

const images = [image1, image2, image3];


const Result = ({recommendation, match: {params: {id}}, history, location}) => {
  const {position, industry, reason, skills} = recommendation;
  return (
    <div className={styles.wrapper}>
      <div className={styles.back} onClick={() => {
        history.goBack();
      }}>{'< Back'}</div>
      <div className={styles.section}>
        <div className={styles.contentwrapper}>
          <h1 className={styles.title}>YOUR NEXT JOB IS ...</h1>
          <div className={styles.card}>
            <div className={styles.scores}><img src={images[id]} alt=""></img></div>
            <div className={styles.content}>
              <div className={styles.position}>{position}</div>
              <div className={styles.type}>{industry}</div>
              <div className={styles.reason}><a target="_blank" rel="noopener noreferrer" href={reason.link}>{reason.content}</a></div>
              <a href={`/#${location.pathname}`} className={styles.more}>more</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.contentwrapper}>
          <h1 className={styles.title}>BUT WAIT! YOU STILL NEED TO LEARN ...</h1>
          {
            skills.map((skill, index) => {
              return (
                <div key={index} className={styles.skillwrapper}>
                  <div className={styles.skillname}>{skill.name}</div>
                  <div className={styles.skilldes}>{skill.reason}</div>
                  <div className={styles.courses}>COURSES YOU CAN TAKE:</div>
                  <div className={styles.cardgroup}>
                    {
                      skill.references.map((reference, index) => {
                        return (
                          <SkillCard key={index} reference={reference}/>
                        );
                      })
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className={styles.loadmore}>Load More...</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { match: {params: {id}}}= ownProps;
  return {
    recommendation: state.res.recommendations[id]
  }
}

export default withRouter(connect(mapStateToProps)(Result));