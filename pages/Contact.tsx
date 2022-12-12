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
        <h2>you can contact us on</h2>

        <div>
          <p>Phone: 022 071 9397</p>
          <a href="mailto: sayhi@otterandrocket.com">
            Email: sayhi@otterandrocket.com
          </a>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
