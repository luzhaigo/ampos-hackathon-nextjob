import React from 'react';
import useRouter from 'use-react-router';
import { ROUTE_OPTIONS } from 'global-constants';
import styles from 'pages/InputPage.module.scss';
import { connect } from 'react-redux';

const WorkExperiencePage = ({workExperience}) => {
  const {location, history} = useRouter();
  const index = ROUTE_OPTIONS.findIndex((option) => {
    return option.url === location.pathname;
  });
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{location.pathname.slice(1).split('-').map(i => i[0].toUpperCase() + i.slice(1)).join(' ')}</h1>
      <div className={styles.content}>
        {
          workExperience.map((item, index) => {
            const {position, company, employmentPeriod, jobIndustry, roleAndResponsibility} = item;
            const {fromYear, fromMonth, toYear, toMonth} = employmentPeriod;
            return (
              <div key={index}>
              <div className={styles.col}>
                <div className={styles.group}>
                  <label htmlFor="position">Position</label>
                  <input name="position" className={styles.input} defaultValue={position}/>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.group}>
                  <label htmlFor="company">Company</label>
                  <input name="company" className={styles.input} defaultValue={company}/>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.group}>
                  <label htmlFor="employment-period">Employment period</label>
                  <div className={styles.period}>
                    <div>
                      <span>From:</span>
                      <input name="from-momth" className={styles.input} placeholder="Month" defaultValue={fromMonth}/>{' '}-{' '}
                      <input name="from-year" className={styles.input} placeholder="Year" defaultValue={fromYear}/>
                    </div>
                    {
                      toYear && toMonth &&
                      <div>
                        <span>To:</span>
                        <input name="to-momth" className={styles.input} placeholder="Month" defaultValue={toMonth}/>{' '}-{' '}
                        <input name="to-year" className={styles.input} placeholder="Year" defaultValue={toYear}/>
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.group}>
                  <label htmlFor="job-industry">Job Industry</label>
                  <input name="job-industry" className={styles.input} defaultValue={jobIndustry}/>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.group}>
                  <label htmlFor="roles">Roles and responsibilities</label>
                  <input name="roles" className={styles.input} defaultValue={roleAndResponsibility}/>
                </div>
              </div>
              </div>
            );
          })
        }
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

const mapStateToProps = (state) => ({workExperience: state.req.workExperience})

export default connect(mapStateToProps)(WorkExperiencePage);