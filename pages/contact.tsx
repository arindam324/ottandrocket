import React from "react";
import Head from "next/head";
import { Layout } from "../components";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex space-y-8 items-center h-full flex-col justify-center ">
          <h2 className="text-4xl py-6">You Can Contact us On:</h2>

          <div className="mb-auto text-lg font-semibold">
            <p>phone: 022 071 9397</p>
            <a href="mailto: abc@example.com">
              Email: sayhi@otterandrocket.com
            </a>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
