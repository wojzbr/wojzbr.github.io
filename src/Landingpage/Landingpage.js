import React from 'react';
import classes from './Landingpage.module.css';

function Landingpage() {
  return (
    <div className={classes.background}>
      <div className={classes.heading}>
        Frontend<br/>Web<br/>Developer
      </div>
      <div className={classes.photo}>
        <img src='Media/Photo_of_me.jpg' alt="Me" />
      </div>
    </div>
  );
}

export default Landingpage;