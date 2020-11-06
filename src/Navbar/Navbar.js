import React from 'react';
import classes from './Navbar.module.css';

const navbar = () => (
  <div className={classes.navbar}>
    <a href='#about'>About</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
  </div>
);

export default navbar;