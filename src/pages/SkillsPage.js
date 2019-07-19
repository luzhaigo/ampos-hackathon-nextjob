import React from 'react';
import useRouter from 'use-react-router';
import { ROUTE_OPTIONS } from 'global-constants';
import styles from 'pages/InputPage.module.scss';
import { connect } from 'react-redux';

const SkillsPage = ({languages, skills}) => {
  const {location, history} = useRouter();
  const index = ROUTE_OPTIONS.findIndex((option) => {
    return option.url === location.pathname;
  });
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{location.pathname.slice(1).split('-').map(i => i[0].toUpperCase() + i.slice(1)).join(' ')}</h1>
      <div className={styles.content}>
        <div className={styles.col}>
          <div className={styles.group}>
            <label htmlFor="skill-name">Skill Name</label>
            <input name="skill-name" className={styles.input} defaultValue={skills.join(', ')}/>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.group}>
            <div className={styles.addmore}>
              <div>+</div> add more skills
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.group}>
            <label htmlFor="language">Language</label>
            <input name="language" className={styles.input} defaultValue={languages.join(', ')}/>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.group}>
            <div className={styles.addmore}>
              <div>+</div> add more languages
            </div>
          </div>
        </div>
      </div>
      <div className={styles.actionpanel}>
        <button onClick={() => {
          if (!index) {
            history.push('/');
          } else {
            history.push(ROUTE_OPTIONS[index - 1].url);
          }
        }}>Cancel</button>
        <button onClick={() => {
          if (index === (ROUTE_OPTIONS.length - 1)) {
            history.push('/result');
          } else {
            history.push(ROUTE_OPTIONS[index + 1].url);
          }
        }}>Save</button>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({skills: state.req.skills, languages: state.req.languages})

export default connect(mapStateToProps)(SkillsPage);