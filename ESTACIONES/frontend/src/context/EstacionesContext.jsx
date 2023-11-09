import React, { createContext, useContext, useState } from "react";

const EstacionesContext = createContext();

const EstacionesProvider = ({ children }) => {
  const [estaciones, setEstaciones] = useState([]);

  return (
    <EstacionesContext.Provider value={{ estaciones: [] }}>
      {children}
    </EstacionesContext.Provider>
  );
};

export { EstacionesProvider };

export default EstacionesContext;
