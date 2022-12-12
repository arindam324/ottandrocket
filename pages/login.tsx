import React from "react";
import Head from "next/head";

import { Layout } from "../components";
import Link from "next/link";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <form className="flex max-w-[600px] mx-auto items-center py-20 flex-col">
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="email">Email</label>
            <input type="email" className="border  p-4" />
          </div>
          <div className="flex flex-col max-w-[600px] w-full space-y-2">
            <label htmlFor="password">Password</label>
            <input type="password" className="border  p-4" />
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
