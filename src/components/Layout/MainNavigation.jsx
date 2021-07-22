import React from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => (
  <header className={classes.header}>
    <Link to="/">
      <div className={classes.logo}>React Auth</div>
    </Link>
    <nav>
      <ul>
        <li>
          <Link to="/auth">Login</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button type="button">Logout</button>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNavigation;
