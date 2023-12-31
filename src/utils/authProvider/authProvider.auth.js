import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?email=${email}`
      );
      const users = response.data;
      const user = users.find((u) => u.username === password);
      if (user) {
        setUser(user);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Authentication error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
