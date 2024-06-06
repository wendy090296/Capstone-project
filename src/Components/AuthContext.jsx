import React, { createContext, useState, useContext } from "react";

// Creazione del contesto di autenticazione
const AuthContext = createContext();

// Hook per utilizzare il contesto di autenticazione
export const useAuth = () => {
  return useContext(AuthContext);
};

// Componente Provider del contesto di autenticazione
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Logica per effettuare l'accesso dell'utente
    setUser(userData);
  };

  const logout = () => {
    // Logica per effettuare il logout dell'utente
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
