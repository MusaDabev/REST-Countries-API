import React from 'react'
import Carts from '../../components/header/Cards/Cards';
import SearchInput from '../../components/header/search/SearchInput';
import SortMenu from '../../components/header/sort/SortMenu';
import classes from './Home.module.css';

function Home() {
  return (
    <main className={classes.mainContainer}>
      <div className={classes.searchSortContainer}>
        <SearchInput />
        <SortMenu />
      </div>
     
      <Carts />
    </main>
  )
}

export default Home
