import React from "react";
import Head from "next/head";

import { Layout } from "../components";

const Register = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <form className="flex max-w-[600px] space-y-4 mx-auto items-center py-20 flex-col">
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="border  p-4" />
          </div>
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="surname">Surname</label>
            <input type="text" className="border  p-4" />
          </div>
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="email">Email</label>
            <input type="email" className="border  p-4" />
          </div>
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="password">Password</label>
            <input type="password" className="border  p-4" />
          </div>

          <input
            className="bg-[#D1155D] mr-auto text-white font-semibold px-8 py-2"
            type={"submit"}
            value="Register"
          />
        </form>
      </Layout>
    </div>
  );
};

export default Register;
