import React, { ReactNode, useContext } from "react";
import { createContext } from "react";

type User = {
  firstname: string;
  lastname: string;
  email: string;
};

const userContext = createContext<User | null>(null);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <userContext.Provider value={null}>{children}</userContext.Provider>;
};

export default UserProvider;

export const useUser = () => useContext(userContext);
