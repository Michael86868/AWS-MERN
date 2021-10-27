import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";

/**
 * 1. Vyplnit defaultní state
 */
const mainState = {
  material:""
};

export const GlobalContext = createContext(mainState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, mainState);
  /**
   * 
   * 3. Funkce která manipuluje s příslušným statem z bodu 1 
   */
 const editMaterial = (material) => {
   dispatch({
     type:"ZMENA_SUROVINY",
     payload:material
   })
 }

  return (
    <GlobalContext.Provider
    /**
     * 2. Propíšete tu hodnotu z toho statu
     */
      value={{
        material:state.material,
        editMaterial
      //Seznam vybraných surovin do receptu
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};