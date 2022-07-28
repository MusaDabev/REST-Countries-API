import React from "react";
import Cart from "./Card";
import { useEffect, useState, useContext } from "react";
import classes from "./Cards.module.css";
import { SortContext } from "../../../context/sortContext";

function Carts() {
  const [countries, setCountries] = useState(null);

  const { sort } = useContext(SortContext);

  let categoryAndType = sort.split("-");
  let category = categoryAndType[0];
  let type = categoryAndType[1];

  let URL = "https://restcountries.com/v3.1/all";
  if (category === "region") {
    URL = `https://restcountries.com/v3.1/region/${type}`;
  } else if (category === "currency") {
    URL = `https://restcountries.com/v3.1/currency/${type}`;
  } else if (category === "lang") {
    URL = `https://restcountries.com/v3.1/lang/${type}`;
  }

  const fetchCountries = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    setCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, [sort]);
  return (
    <section className={classes.cardsContainer}>
      {countries &&
        countries.map((countrie) => {
          return <Cart countrie={countrie} />;
        })}
    </section>
  );
}

export default Carts;
