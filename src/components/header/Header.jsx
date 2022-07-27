import React, { useState } from 'react';
import classes from './Header.module.css';
import {MdOutlineDarkMode, MdDarkMode} from 'react-icons/md';


function Header() {

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <header className={classes.headerContainer}>
      <p className={classes.leftText}>Where in the world?</p>
      <div onClick={handleDarkMode} className={classes.darkModeContainer}>
      {darkMode ? <MdDarkMode style={{fontSize: "1.2rem"}} /> : <MdOutlineDarkMode style={{fontSize: "1.2rem"}}></MdOutlineDarkMode>} 
        <p className={classes.darkModeText}>Dark Mode</p>
      </div>
    </header>
  )
}

export default Header
