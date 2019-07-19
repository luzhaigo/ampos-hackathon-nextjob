import React from 'react';
import useRouter from 'use-react-router';
import { ROUTE_OPTIONS } from 'global-constants';
import { connect } from 'react-redux';
import styles from 'pages/InputPage.module.scss';

const EducationPage = ({education, certifications}) => {
  const {location, history} = useRouter();
  const index = ROUTE_OPTIONS.findIndex((option) => {
    return option.url === location.pathname;
  });
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{location.pathname.slice(1).split('-').map(i => i[0].toUpperCase() + i.slice(1)).join(' ')}</h1>
      <div className={styles.content}>
        {
          education.map((item, index) => {
            const {institute, major, gpa, graduationYearFrom, educationLevel, graduationYearTo} = item;
            return (
              <div key={index}>
                <div className={styles.col}>
                  <div className={styles.group}>
                    <label htmlFor="institute">Institute</label>
                    <input name="institute" className={styles.input} defaultValue={institute}/>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.group}>
                    <label htmlFor="education-level">Education Level</label>
                    <input name="education-level" className={styles.input} defaultValue={educationLevel}/>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.group}>
                    <label htmlFor="major">Major</label>
                    <input name="major" className={styles.input} defaultValue={major}/>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.group}>
                    <label htmlFor="employment-period">Graduation</label>
                    <div className={styles.graduation}>
                      <div>
                        <span>From:</span>
                        <input name="from-year" className={styles.input} placeholder="Year" defaultValue={graduationYearFrom}/>
                      </div>
                      <div>
                        <span>To:</span>
                        <input name="to-year" className={styles.input} placeholder="Year" defaultValue={graduationYearTo}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.group}>
                    <label htmlFor="gpa">GPA</label>
                    <input name="gpa" className={styles.input} defaultValue={gpa}/>
                  </div>
                </div>
              </div>
            )
          })
        }
        {
          certifications.map((cert, index) => {
            const {name, organizationIssued, yearIssued} = cert;
            return (
              <div key={index}>
                <div className={styles.col}>
                  <div className={styles.group}>
                    <label htmlFor="certification">Certification</label>
                    <input name="certification" className={styles.input} defaultValue={name}/>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.group}>
                    <label htmlFor="organization-issued">Organization issued</label>
                    <input name="organization-issued" className={styles.input} defaultValue={organizationIssued}/>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.group}>
                    <label htmlFor="year-issued">Year issued</label>
                    <input name="year-issued" className={styles.input} defaultValue={yearIssued}/>
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

const mapStateToProps = (state) => ({education: state.req.education, certifications: state.req.certifications})

export default connect(mapStateToProps)(EducationPage);