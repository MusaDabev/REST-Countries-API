import React from 'react'
import Cart from './Card';
import { useEffect, useState } from 'react';
import classes from './Cards.module.css';

function Carts() {
  const [countries, setCountries] = useState(null);

  const fetchCountries =  async () => {
         const response = await fetch("https://restcountries.com/v3.1/region/europe") 
         const data = await response.json();
   
         setCountries(data);
       }
 
     useEffect(() => {
         fetchCountries();
     }, [])
  return (
    <section className={classes.cardsContainer}>

      {countries && countries.map((countrie) =>{
          return <Cart countrie={countrie} />
      })}
   
    </section>
  )
}

export default Carts
