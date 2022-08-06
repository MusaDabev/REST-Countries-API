import React from "react";
import Cart from "./Card";
import { useEffect, useState, useContext } from "react";
import classes from "./Cards.module.css";
import { SortContext } from "../../../context/sortContext";

function Cards({ countries }) {
  const { filteredData, setFilteredData, searching, darkMode } =
    useContext(SortContext);

  return (
    <section
      className={`${classes.cardsContainer} ${darkMode && classes.darkMode}`}
    >
      {!searching &&
        countries &&
        countries.map((countrie, index) => {
          return <Cart countrie={countrie} key={index}/>;
        })}
      {searching &&
        filteredData &&
        filteredData.map((countrie) => {
          return <Cart countrie={countrie} key={countrie.name} />;
        })}
    </section>
  );
}

export default Cards;
