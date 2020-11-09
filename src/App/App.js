import React from 'react';
import classes from './App.module.css';
import Navbar from '../Navbar/Navbar';
import Landingpage from '../Landingpage/Landingpage';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Modal from '../Modal/Modal';

function App() {
  return (
    <div className={classes.scroll}>
      <Modal />
      <Navbar />
      <Landingpage />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
