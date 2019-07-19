import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import truck from 'assets/truck.png';
import hint from 'assets/hint.svg';
import down from 'assets/down.png';
import nextjob from 'assets/nextjob.svg';
import fb from 'assets/fb.png';
import e04 from 'assets/104.png';
import db from 'assets/jb.png';

import styles from './Home.module.scss';

function generateRandomNumber() {
  return (Math.floor(Math.random() * 100) % 12) + 1;
}

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber);
  const [showLogin, setShowLogin] = useState(false);
  const click = () => {
    setShowLogin(true);
  }
  useEffect(() => {
    const id = setInterval(() => {
      setRandomNumber(generateRandomNumber());
    }, 200);
    return () => {
      clearInterval(id);
    }
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.scroll}>
        <div className={styles.page1}>
          <div className={styles.top}>
            <img src={hint} alt="" className={styles.hint}/>
            <img src={truck} alt="" className={styles.truck}/>
          </div>
          <div className={styles.down}>
            <img src={down} alt=""/>
          </div>
        </div>
        <div className={styles.page2}>
          <div className={styles.top}>
            <div className={styles.group}>
              <div className={styles.title1}>I'M SORRY.</div>
              <div className={styles.title2}>YOU ARE ABOUT TO</div>
              <div className={styles.title3}>BE FIRED IN</div>
            </div>
              <div className={styles.bumb}>
              <div className={styles.content}>
                <div className={styles.random}>{randomNumber}</div>
              </div>
              <div className={styles.month}>months</div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.helpme} onClick={() => {
              setShowModal(true);
            }}>GIVE YOURSELF A CHANCE</div>
          </div>
        </div>
      </div>
      {
        showModal && 
        <div className={styles.modal}onClick={() => {
          setShowModal(false);
        }}>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            {
              showLogin ? (
                <div className={`${styles.import} ${styles.login}`}>
                  <label htmlFor="username" className={styles.label}>Username or email</label>
                  <input name="username" className={styles.input} defaultValue="We-Are-The-Champion"/>
                  <label htmlFor="password" className={styles.label}>Password Forgot?</label>
                  <input name="password" className={styles.input} defaultValue={'kitchen123'} type="password"/>
                  <NavLink className={styles.loginbtn} to="/personal-information">Log in</NavLink>
                </div>
              ) : (
                <div className={styles.import}>
                  <img src={nextjob} alt=""></img>
                  <div className={`${styles.button} ${styles.nextjob}`} onClick={click}>Import your information</div>
                  <div className={styles.or}>or</div>
                  <div className={`${styles.button} ${styles.fb}`} onClick={click}><img src={fb} alt=""/>Import from Facebook</div>
                  <div className={`${styles.button} ${styles.e04}`} onClick={click}><img src={e04} alt=""/>Import from 104 Human Bank</div>
                  <div className={`${styles.button} ${styles.db}`} onClick={click}><img src={db} alt=""/>Import from JobsDB</div>
                </div>
              )
            }
          </div>
        </div>
      }
    </div>
  );
}

export default Home;