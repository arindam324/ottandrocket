import { UserCredential } from "firebase/auth";
import React, { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

// type User = {
//   firstname: string;
//   lastname: string;
//   email: string;
// };

type userContext = {
  user: UserCredential;
  setUser: (user: UserCredential) => void;
};

const userContext = createContext<userContext>({} as userContext);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserCredential>({} as UserCredential);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(userContext);
