import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/header/Header";
import classes from "./CountryDetails.module.css";
import { useParams } from "react-router-dom";
import { SortContext } from "../../context/sortContext";

function CountryDetails() {
  const [product, setProduct] = useState(null);
  const { name } = useParams();
  const { darkMode } = useContext(SortContext);



  const fetchCountry = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();
    setProduct(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  let tifOptions;

if (product)  { tifOptions = Object.keys(product[0].languages).map(function(key) {
    return <span value={key}>{product[0].languages[key]},{" "}</span>
}); }

  return (
    <>
      <Header></Header>

      {product && (
        <div className={`${classes.container} ${darkMode && classes.darkMode}`}>
          <div className={classes.flagAndCoatOfArms}>
            <div className={classes.flagContainer}>
              <p>Flag</p>
              <img src={product[0].flags.png} className={classes.flag} />
            </div>
            <div className={classes.coatOfArmsContainer}>
              <p>CoatOfArms</p>
              <img
                src={product[0].coatOfArms.png}
                className={classes.coatOfArms}
              />
            </div>
          </div>

          <div className={classes.details}>
            <div className="col1">
            <h1> {product[0].name.official}</h1>
            <h3>Capital: {product[0].capital}</h3>
            <p>Area: {product[0].area} </p>
            <p>Population: {product[0].population} </p>
            <p>Languages: {tifOptions} </p>
            
            <p>
              See on goole maps:{" "}
              <a className={`${darkMode && classes.darkMode}`} href={product[0].maps.googleMaps} target="_blank">
                Here!
              </a>
            </p>
            </div>
            <div className="col2">
                <p>Status: {product[0].status}</p>
                <p>Time zone: {product[0].timezones}</p>
               
            </div>
           
          </div>
        </div>
      )}
    </>
  );
}

export default CountryDetails;
