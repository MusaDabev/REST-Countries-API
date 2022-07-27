import React from "react";
import classes from "./SortMenu.module.css";
import { AiFillCaretDown } from "react-icons/ai";

function SortMenu() {
  return (
    <div className={classes.sortMenuContainer}>
      <button>Sort</button>
      <AiFillCaretDown />
    </div>
  );
}

export default SortMenu;
