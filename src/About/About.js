import React from 'react';
import classes from './About.module.css';

function About() {
  return (
    <div className={classes.background} id="about">
      <h1>About me</h1>
      <div className={classes.text}>
        <div className={classes.paragraph}>
          I'm a self-taught frontend web developer from Gliwice, Poland. I know tiny bit of backend and I will surely explore it deeper in the nearest future to become a proficient fullstack developer.  
        </div>
        <div className={classes.paragraph}>
          My favorite part of coding which keeps me motivated is setting up goals outside of my capabilities and figuring out how to reach them.
        </div>
        <div className={classes.paragraph}>
          Music is a major part of my life since I took up classical piano 15 years ago and have been heading towards music career for 14 years. After rescheduling my life a bit I am developing my musicality in a much more relaxed, open-minded way, exploring the sound palette of a self-built electric guitar.
        </div>
      </div>
    </div>
  );
}

export default About;