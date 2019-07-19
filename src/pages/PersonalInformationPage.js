import React, { useState, useCallback } from 'react';
import Select from 'react-select';
import useRouter from 'use-react-router';
import { ROUTE_OPTIONS } from 'global-constants';
import { connect } from 'react-redux';
import './PersonalInformationPage.scss';
import styles from 'pages/InputPage.module.scss';

const genderOptions = [
  { value: 'M', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const colourStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? '#06b5b3'
        : isFocused
        ? '#06b5b345'
        : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? 'white'
        : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? data.color : '#06b5b3'),
      },
    }
  }
}

const PersonalInformationPage = ({personalInformation}) => {
  const {
    firstName,
    lastName,
    email,
    gender,
    dateOfBirth,
    liveIn,
    hobby,
    nationality,
  } = personalInformation;
  const birth = dateOfBirth.split('-');
  const [selectedOption, setSelectedOption] = useState(genderOptions.filter(option => option.value === gender));
  const handleChange = useCallback(selectedOption => {
    setSelectedOption(selectedOption)
  }, []);
  const {location, history} = useRouter();
  const index = ROUTE_OPTIONS.findIndex((option) => {
    return option.url === location.pathname;
  });
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{location.pathname.slice(1).split('-').map(i => i[0].toUpperCase() + i.slice(1)).join(' ')}</h1>
      <div className={styles.content}>
        <div className={styles.col2}>
          <div className={styles.group}>
            <label htmlFor="first-name">First Name</label>
            <input name="first-name" className={styles.input} defaultValue={firstName}/>
          </div>
          <div className={styles.group}>
            <label htmlFor="last-name">Last Name</label>
            <input name="last-name" className={styles.input} defaultValue={lastName}/>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <input name="email" className={styles.input} defaultValue={email}/>
          </div>
        </div>
        <div className={styles.col}>
        <label htmlFor="gender">Gender</label>
          <Select value={selectedOption} onChange={handleChange} options={genderOptions} classNamePrefix="select" styles={colourStyles}/>
        </div>
        <div className={styles.col}>
          <div className={styles.group}>
            <label htmlFor="birth">Birth</label>
            <div className={styles.birth}>
              <input name="birth" className={styles.input} defaultValue={birth[0]}/>{' '}-{' '}
              <input name="birth" className={styles.input} defaultValue={birth[1]}/>{' '}-{' '}
              <input name="birth" className={styles.input} defaultValue={birth[2]}/>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.group}>
            <label htmlFor="livein">Live in</label>
            <input name="livein" className={styles.input} defaultValue={liveIn}/>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.group}>
            <label htmlFor="nationality">Nationality</label>
            <input name="nationality" className={styles.input} defaultValue={nationality}/>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.group}>
            <label htmlFor="hobby">Hobby</label>
            <input name="hobby" className={styles.input} defaultValue={hobby}/>
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

const mapStateToProps = (state) => ({personalInformation: state.req.personalInformation})

export default connect(mapStateToProps)(PersonalInformationPage);