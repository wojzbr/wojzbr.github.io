import React from 'react';
import classes from './Portfolio.module.css';

function Portfolio() {
  return (
    <div className={classes.background} id="portfolio">
      <div className={classes.text}>Check out my portfolio!
        <br/>
        <a href="https://wojzbr.github.io/calculator/" target="_blanc" className={classes.link}>iPhone calculator</a>
        <br/>
        <a href="https://wojzbr.github.io/BubbleGame/" target="_blanc" className={classes.link}>Catch the bubble - game</a>
        </div>
    </div>
  );
}

export default Portfolio;