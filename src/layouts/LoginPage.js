import React from 'react';
import { withRouter } from 'react-router-dom';
import { LOGO } from '../utils/constants';
import LoginForm from '../components/LoginForm';
import styles from './styles.module.css';

const LandingPageLayout = ({}) => {
  return (
    <div className={styles.landing_page_container}>
      <div className={styles.left_side}>
        <div className={styles.left_message}>
          AI powered learning and score improvement platform
        </div>
        <a
          href="https://www.embibe.com/"
          className={styles.logo}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LOGO} width="100%" alt="youplus-logo" />
        </a>
      </div>
      <div className={styles.right_side}>
        <LoginForm />
      </div>
    </div>
  );
};

export default withRouter(LandingPageLayout);
