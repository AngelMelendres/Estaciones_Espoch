import React, { createContext, useContext, useEffect, useState } from "react";
import UsuarioAxios from "../config/usuarioAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    usuario: "123",
    contrasena: "123",
  });

  /* useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const data = await UsuarioAxios("/usuarios/perfil", config);
        console.log("token ok");
      } catch (error) {}
    };

    authUser();
  }, []); */

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export { AuthProvider };

export default AuthContext;
