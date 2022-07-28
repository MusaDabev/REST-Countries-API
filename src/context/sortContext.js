import React, { createContext, useState } from "react"

export const SortContext = createContext()

export const SortProvider = ({ children }) => {
  const [sort, setSort] = useState("all");
  const [filteredData, setFilteredData] = useState(null);
  const [searching, setSearching] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <SortContext.Provider value={{sort,setSort, filteredData, setFilteredData, searching, setSearching, darkMode, setDarkMode}}>
      {children}
    </SortContext.Provider>
  );
};