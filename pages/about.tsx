import React from "react";
import Head from "next/head";
import { Layout, NextHead } from "../components";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col ">
      <NextHead />
      <Layout>
        <h1 className="text-3xl p-20 font-semibold leading-normal	">
          Stickers are a great way to add some fun and creativity to your life.
          For kids, stickers can be a great way to express themselves and show
          off their personality. And for adults, stickers can be a fun way to
          decorate your home or office, or to add a personal touch to gifts.
          There are even AI-generated stickers that can help you create unique
          and personal designs. And if you're looking for a more affordable
          option, there are also sticker subscription services that can provide
          you with a monthly selection of new and interesting stickers.
          <br />
        </h1>
        <h1 className="py-2 text-3xl p-20 font-semibold leading-normal">
          Otter and Rocket helps make stickers fun for everyone. So whatever
          your style or budget, there's sure to be a sticker option that's right
          for you.
        </h1>
      </Layout>
    </div>
  );
};

export default About;
