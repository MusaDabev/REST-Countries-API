import React from 'react'
import Carts from '../../components/header/Cards/Cards';
import SearchInput from '../../components/header/search/SearchInput';
import SortMenuButton from '../../components/header/sort/SortMenuButton';
import classes from './Home.module.css';

function Home() {
  return (
    <main className={classes.mainContainer}>
      <div className={classes.searchSortContainer}>
        <SearchInput />
        <SortMenuButton />
      </div>
     
      <Carts />
    </main>
  )
}

export default Home
