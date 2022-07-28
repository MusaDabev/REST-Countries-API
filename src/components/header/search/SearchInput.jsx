import React from 'react'
import classes from './SearchInput.module.css'
import {AiOutlineSearch} from 'react-icons/ai'

function SearchInput() {
  return (
    <div className={classes.searchContainer}>
        <AiOutlineSearch />
        <input type='text' className={classes.searchInput}/>
    </div>
    
  )
}

export default SearchInput
