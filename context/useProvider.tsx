import React, { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../lib/firebase";

type User = {
  uid: string;
  email: string;
};

type userContext = {
  user: User;
  setUser: (user: User) => void;
};

const userContext = createContext<userContext>({} as userContext);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((auth) => {
      auth?.email &&
        setUser({
          uid: auth?.uid,
          email: auth?.email,
        });
    });

    return () => subscribe();
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;

export const useUser = () => useContext(userContext);
