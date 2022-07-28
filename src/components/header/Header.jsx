import React, { useState, useContext } from 'react';
import classes from './Header.module.css';
import {MdOutlineDarkMode, MdDarkMode} from 'react-icons/md';
import {SortContext} from '../../context/sortContext';
import {Link } from 'react-router-dom'


function Header() {

 const {darkMode, setDarkMode} = useContext(SortContext)

  const handleDarkMode = () => {
    setDarkMode(!darkMode);

  }

  return (
    <header className={`${classes.headerContainer} ${darkMode && classes.darkMode}`}>
    <Link to='/' style={{textDecoration: 'none', color: "black"}}><p className={`${classes.leftText} ${darkMode && classes.darkMode}`}>Where in the world?</p></Link>  
      <div onClick={handleDarkMode} className={classes.darkModeContainer}>
      {!darkMode ? <MdDarkMode style={{fontSize: "1.2rem"}} /> : <MdOutlineDarkMode style={{fontSize: "1.2rem"}}></MdOutlineDarkMode>} 
        <p className={classes.darkModeText}>Dark Mode</p>
      </div>
    </header>
  )
}

export default Header
