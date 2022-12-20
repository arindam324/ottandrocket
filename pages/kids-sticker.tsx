import React from "react";
import Head from "next/head";
import { Layout, NextHead } from "../components";
import Button from "../components/Button";

const KidsStickerArt = () => {
  return (
    <div>
      <NextHead />
      <Layout>
        <div className="flex">
          <div className="w-1/2 flex flex-col items-center px-12">
            <h1 className="text-5xl text-center font-semibold leading-normal">
              High-quality 3" , Vinyl stickers from <br />
              Your Kids Art!
            </h1>

            <h3 className="leading-10 text-xl">
              Introducing Sticker creations by kids, the whimsical way to turn
              your child's artwork into cherished keepsakes!
            </h3>
            <h3 className="leading-10 text-xl py-4">
              Our high-quality custom 3" vinyl stickers are the perfect way to
              show off your little one's personality and impressive artistic
              skills. Each unique design is printed with vibrant inks on
              high-quality vinyl for long-lasting durability, making them ideal
              for sticking on laptops, water bottles, folders, notebooks, and
              more.
            </h3>
            <h3 className="leading-10 text-xl">
              Whether you're looking for a fun gift for a special occasion or a
              dynamic new way to showcase your child's art, Sticker creations by
              kids has you covered!
            </h3>
            <h3 className="leading-10 text-xl">
              Order now and let your child's creativity shine!
            </h3>
          </div>

          <div className="flex flex-col border-l justify-between items-center w-1/2 ">
            <div>
              <h2 className="text-4xl text-center">
                Sticker Creations by Kids
              </h2>

              <p className="text-xl py-3 text-center">
                Includes NZ postage in a DLE envelope via NZ Post
              </p>

              <ul className="list-disc w-[70%] mx-auto space-y-4 text-lg py-4">
                <li>Free Shipping</li>
                <li>Stickers will be approx 3" x 3" (75mm x 75mm)</li>
                <li>Easy to apply</li>
                <li>Made of high-quality vinyl</li>
                <li>Stick to any smooth surface</li>
              </ul>
            </div>
            <button className="px-16 py-4 bg-[#D1155D] text-white font-semibold">
              Contact us
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default KidsStickerArt;
