'use client'
import React, { useContext, useState, useEffect } from "react";


const AppContext = React.createContext({

});


export const AppProvider = ({ children }) => {
  const [searchterm, setsearchterm] = useState();
  
  return (
    <AppContext.Provider value={{searchterm,setsearchterm}}>
      {children}
    </AppContext.Provider>
  )
}
export function GlobalContext() {
  const context = useContext(AppContext)
  return context
}





