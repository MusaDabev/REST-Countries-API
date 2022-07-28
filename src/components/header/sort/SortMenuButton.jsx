import React, { useState } from "react";
import classes from "./SortMenuButton.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import SortMenu from "./SortMenu";

function SortMenuButton() {
  const [showMenu, setShowMenu] = useState(false);
  const showSortMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div onClick={showSortMenu} className={classes.sortMenuContainer}>
      <div className={classes.sortMenuButton}>
        <button className={classes.sortButton}>Sort</button>
        <AiFillCaretDown />
      </div>
      {showMenu && <SortMenu />}
    </div>
  );
}

export default SortMenuButton;
