import React, { FormEvent, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

import { Layout } from "../components";
import { auth } from "../lib/firebase";
import { useUser } from "../context/useProvider";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const [createUserWIthEmailandPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const { setUser } = useUser();

  const FormRegister = async (e: FormEvent) => {
    e.preventDefault();
    await createUserWIthEmailandPassword(email, password);
    user && setUser(user);
    router.push("/");
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <form
          onSubmit={FormRegister}
          className={`flex max-w-[600px] ${
            loading && "opacity-50"
          } 	 space-y-4 mx-auto items-center py-20 flex-col `}
        >
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="border  p-4" />
          </div>
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="surname">Surname</label>
            <input type="text" className="border  p-4" />
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
