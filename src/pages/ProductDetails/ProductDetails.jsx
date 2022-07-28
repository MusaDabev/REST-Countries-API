import React, { useEffect, useState, useContext } from "react";
import Header from "../../components/header/Header";
import classes from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import { SortContext } from "../../context/sortContext";


function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { name } = useParams();
  const {darkMode } = useContext(SortContext);

  const fetchProduct = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <Header></Header>

      {product && (
        <div className={`${classes.container} ${darkMode && classes.darkMode}`}>
          <img src={product[0].flags.png} className={classes.image} />
          <div className={classes.details}>
            <h1> {product[0].name.official}</h1>
            <h3>Capital: {product[0].capital}</h3>
            <p>Area: {product[0].area} </p>
            <p>Population: {product[0].population} </p>
            <p>Language: {product[0].languages.kal} </p>
            <p>See on goole maps: {product[0].maps.googleMaps} </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
