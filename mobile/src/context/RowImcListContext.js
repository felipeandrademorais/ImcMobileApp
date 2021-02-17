import React, { createContext } from "react";

export const RowImcContext = createContext();

export default function RowImcListProvider({ children }) {
  return(
    <RowImcContext.Provider>
      { children }
    </RowImcContext.Provider>
  )
}