import React from "react";
import Head from "next/head";
import { Layout } from "../components";

const ForgetPassword = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <form className="flex max-w-[600px] w-full space-y-4 mx-auto items-center py-20 flex-col">
          <div className="flex flex-col space-y-2  max-w-[600px] w-full">
            <label htmlFor="foprgetpassowrd">Email</label>
            <input type="email" className="border p-4" />
          </div>
          <input
            className="bg-[#D1155D] mr-auto text-white font-semibold px-8 py-2"
            type={"submit"}
            value="Submit"
          />
        </form>
      </Layout>
    </div>
  );
};

export default ForgetPassword;
