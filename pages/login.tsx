import React, { FormEvent, useState } from "react";

import { Layout, NextHead } from "../components";
import Link from "next/link";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { auth } from "../lib/firebase";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const [signInWithEmail, user, loading] = useSignInWithEmailAndPassword(auth);

  const formLogin = async (e: FormEvent) => {
    e.preventDefault();
    await signInWithEmail(email, password);
    router.push("/");
  };

  return (
    <div>
      <NextHead />
      <Layout>
        <form
          onSubmit={formLogin}
          className={`flex max-w-[600px] mx-auto items-center py-20 flex-col ${
            loading && "opacity-50"
          }`}
        >
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
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
          <div className="flex flex-col max-w-[600px] w-full space-y-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              className="border  p-4"
            />
            <span className="ml-auto font-semibold cursor-pointer text-[#D1155D] text-sm">
              <Link href={"/forget-password"}>Forget Password</Link>
            </span>
          </div>
          <input
            className="bg-[#D1155D] mr-auto text-white font-semibold px-8 py-2"
            type={"submit"}
            value="login"
          />
        </form>
      </Layout>
    </div>
  );
};

export default Login;
