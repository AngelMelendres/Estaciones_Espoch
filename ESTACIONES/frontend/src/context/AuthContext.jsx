import React, { createContext, useEffect, useState } from "react";
import UsuarioAxios from "../config/usuarioAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
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
        setAuth(data);
      } catch (error) {}
    };

    authUser();
  }, []);

  const cerrarSesionAuth = () => {
    setAuth({});
  };

  return (
    <AuthContext.Provider value={{ setAuth, auth, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
