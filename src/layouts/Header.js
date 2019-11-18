import React from 'react';
import { Input, Switch } from 'antd';
import { LOGO } from '../utils/constants';
import styles from './styles.module.css';

const { Search } = Input;

const Header = ({ filterResults, alphaFilter, marksFilter }) => (
  <div className={styles.header}>
    <a href="https://www.embibe.com/" className={styles.logo} target="_blank">
      <img src={LOGO} className={styles.logo} width="100%" alt="youplus-logo" />
    </a>
    <Search
      placeholder="Student search"
      onChange={e => filterResults(e.target.value)}
      style={{ width: '30%' }}
      size="large"
    />
    <div className={styles.filters}>
      Sort by order:
      <Switch
        onChange={alphaFilter}
        checkedChildren="A-Z"
        unCheckedChildren="Z-A"
      />
      <Switch
        onChange={marksFilter}
        checkedChildren="0-300"
        unCheckedChildren="300-0"
      />
    </div>
  </div>
);

export default Header;
