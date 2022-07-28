import React from "react";
import Cart from "./Card";
import { useEffect, useState, useContext } from "react";
import classes from "./Cards.module.css";
import { SortContext } from "../../../context/sortContext";

function Carts({countries}) {

  const {filteredData, setFilteredData, searching} = useContext(SortContext);
  console.log(filteredData)
 
  return (
    <section className={classes.cardsContainer}>
      {!searching && countries &&
        countries.map((countrie) => {
          return <Cart countrie={countrie} />;
        })}
        {searching && filteredData &&
        filteredData.map((countrie) => {
          return <Cart countrie={countrie} />;
        })}
    </section>
  );
}

export default Carts;
