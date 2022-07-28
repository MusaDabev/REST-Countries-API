import React, { useContext } from "react";
import classes from "./SortMenu.module.css";
import { SortContext } from "../../../context/sortContext";

function SortMenu() {
  const { setSort } = useContext(SortContext);
  return (
    <ul className={classes.container}>
      <li className={classes.item}>
        <p className={classes.title}>Regions</p>
        <button onClick={() => setSort("region-europe")} className={classes.button}>Europe</button>
        <button onClick={() => setSort("region-asia")}  className={classes.button}>Asia</button>
        <button onClick={() => setSort("region-americas")}  className={classes.button}>Americas</button>
      </li>
      <li className={classes.item}>
      <p className={classes.title}>Currency</p>
        <button onClick={() => setSort("currency-dollar")} className={classes.button}>
          Dollar
        </button>
        <button onClick={() => setSort("currency-euro")} className={classes.button}>
        Euro
        </button>
      </li>
      <li className={classes.item}>
      <p className={classes.title}>Language</p>
        <button onClick={() => setSort("lang-english")} className={classes.button}>
          English
        </button>
        <button onClick={() => setSort("lang-french")} className={classes.button}>
          French
        </button>
      </li>
    </ul>
  );
}

export default SortMenu;
