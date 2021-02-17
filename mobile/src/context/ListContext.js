import React, { createContext, useState, useContext } from "react";

export const RowImcContext = createContext();

export function ListContext({ children }) {
  const [deleteRow, setDeleteRow] = useState(false);

  return(
    <RowImcContext.Provider value={{deleteRow, setDeleteRow}}>
      { children }
    </RowImcContext.Provider>
  )
}

export function useDeleteRow(id) {
    console.log(id);
    const contextProvider = useContext(RowImcContext);
    const {deleteRow, setDeleteRow} = contextProvider; 

    return {deleteRow, setDeleteRow};
}