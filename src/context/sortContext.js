import React, { createContext, useState } from "react"

export const SortContext = createContext()

export const SortProvider = ({ children }) => {
  const [sort, setSort] = useState("all");
  return (
    <SortContext.Provider value={{sort,setSort}}>
      {children}
    </SortContext.Provider>
  );
};