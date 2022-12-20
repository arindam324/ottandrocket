import { collection, doc, getDoc } from "firebase/firestore";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { db } from "../lib/firebase";
import { useUser } from "./useProvider";

type userDetailsType = {
  firstname: string;
  lastname: string;
  email: string;
  setFirstname: (firstname: string) => void;
  setLastname: (lastname: string) => void;
  setEmail: (email: string) => void;
};

const userDetailsContext = createContext<userDetailsType>(
  {} as userDetailsType
);

const userDetailsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user } = useUser();
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const fetchDetails = async () => {
    const docref = doc(collection(db, "users"), user.uid);
    const data = await getDoc(docref);

    if (data.exists()) {
      setFirstname(data.data()?.firstname);
      setLastname(data.data()?.lastname);
      setEmail(data.data()?.email);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <userDetailsContext.Provider
      value={{
        firstname,
        lastname,
        email,
        setFirstname,
        setLastname,
        setEmail,
      }}
    >
      {children}
    </userDetailsContext.Provider>
  );
};

export default userDetailsProvider;

export const useUserDetail = () => useContext(userDetailsContext);
