import React from 'react';
import classes from './Contact.module.css';

function Contact() {
  return (
    <div className={classes.background} id="contact">
      <div className={classes.text}>
        Usually you can find me at the Silesian University of Technology or one of the local climbing gyms...<br/><br/>
        ...or you can just catch me here:<br/><br/>
        
        <a href="https://linkedin.com/in/wojciech-zbrozek" target="_blanc" className={classes.link}>LinkedIn</a>
        &emsp;
        <a href="https://github.com/wojzbr" target="_blanc" className={classes.link}>GitHub</a>
        &emsp;
        <a className={classes.link}>wojciech.zbrozek@gmail.com</a>
      </div>
    </div>
  );
}

export default Contact;