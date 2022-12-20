import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

import { Layout, NextHead } from "../components";
import { auth, db } from "../lib/firebase";

const Register = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const [createUserWIthEmailandPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const FormRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const createdUser = await createUserWIthEmailandPassword(email, password);
      if (createdUser) {
        const docref = doc(collection(db, "users"), createdUser?.user.uid);
        console.log(createdUser.user);
        await setDoc(docref, {
          firstname: firstname,
          lastname: lastname,
          email: createdUser?.user.email,
        });
      }
    } catch (err) {
      console.log(err);
    }

    router.push("/");
  };

  return (
    <div>
      <NextHead />
      <Layout>
        <form
          onSubmit={FormRegister}
          className={`flex max-w-[600px] ${
            loading && "opacity-50"
          } 	 space-y-4 mx-auto items-center py-20 flex-col `}
        >
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="firstname">First Name</label>
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.currentTarget.value)}
              type="text"
              className="border  p-4"
            />
          </div>
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="surname">Surname</label>
            <input
              value={lastname}
              onChange={(e) => setLastname(e.currentTarget.value)}
              type="text"
              className="border  p-4"
            />
          </div>
          {loading && (
            <div className="flex absolute top-[50%] items-center justify-center">
              <div
                className="spinner-border  animate-spin inline-block w-16 h-16 border-pink-500 border-8 rounded-full"
                role="status"
              ></div>
            </div>
          )}
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              className="border  p-4"
            />
          </div>
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="border  p-4"
              min={"6"}
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>

          <button
            className="bg-[#D1155D] mr-auto text-white font-semibold px-8 py-2"
            onClick={FormRegister}
          >
            Register
          </button>
        </form>
      </Layout>
    </div>
  );
};

export default Register;
