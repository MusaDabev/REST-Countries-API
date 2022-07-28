import React, { useContext, useState, useEffect } from "react";
import Carts from "../../components/header/Cards/Cards";
import SearchInput from "../../components/header/search/SearchInput";
import SortMenuButton from "../../components/header/sort/SortMenuButton";
import classes from "./Home.module.css";
import { SortContext } from "../../context/sortContext";
import { FaSpinner } from "react-icons/fa";
import Header from "../../components/header/Header";

function Home() {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(false);
  const { sort, darkMode } = useContext(SortContext);

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
    setLoading(true);
    const response = await fetch(URL);
    const data = await response.json();

    setCountries(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCountries();
  }, [sort]);
  return (
    <>
      <Header></Header>
      <main
        className={`${classes.mainContainer} ${darkMode && classes.darkMode}`}
      >
        <div className={classes.searchSortContainer}>
          <SearchInput countries={countries} setCountries={setCountries} />
          <SortMenuButton />
        </div>
        {loading && (
          <FaSpinner
            className={`${classes.spiner} ${
              darkMode && classes.darkModeSpiner
            }`}
          ></FaSpinner>
        )}
        {!loading && <Carts countries={countries} />}
      </main>
    </>
  );
}

export default Home;
