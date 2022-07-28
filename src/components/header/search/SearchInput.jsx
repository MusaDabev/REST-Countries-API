import React, {useContext} from 'react'
import { SortContext } from '../../../context/sortContext'
import classes from './SearchInput.module.css'
import {AiOutlineSearch} from 'react-icons/ai'

function SearchInput({countries, setCountries}) {

  const {filteredData, setFilteredData, setSearching, searching} = useContext(SortContext);
 
  const handleSearch = (e) => {
    const search = e.target.value
console.log(searching)
    if(search.length > 0) {
      setSearching(true);
    } else {
      setSearching(false)
    }
    
   const filter = countries.filter((country) => {
      if(country.name.official.toLowerCase().includes(search.toLowerCase())) {
        return country
      }
   })
   setFilteredData(filter);
  }
  return (
    <div className={classes.searchContainer}>
        <AiOutlineSearch />
        <input type='text' className={classes.searchInput} onChange={handleSearch}/>
    </div>
    
  )
}

export default SearchInput
