import Head from "next/head";
import React from "react";
import { Card, Layout } from "../components";

const StickerSubscription = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout isSticker={true}>
        <div>
          <div className="flex">
            <div className="w-1/2 flex flex-col items-center px-12">
              <h1 className="text-5xl text-center font-semibold leading-normal">
                Three high-quality 3" vinyl stickers every month!
              </h1>

              <h3 className="leading-10 text-xl">
                With the world becoming increasingly digital, it is nice to have
                something to express yourself that you can touch and enjoy.
                Stickers are a perfect way to express yourself. Why not get a
                few stickers every month?
              </h3>
              <h3 className="leading-10 text-xl py-4">
                Vinyl stickers can stick to smooth surfaces, including journals,
                scrapbooks, laptops, stationery, guitars, amps, bicycles,
                helmets, mobile phones, lunch boxes, water bottles, and walls.
              </h3>
              <h3 className="leading-10 text-xl">
                Stickers ship around the 10th of each month and designs will be
                hidden from social media or spoilers till the 20th of each
                month.
              </h3>
            </div>

            <div className="flex flex-col border-l justify-between items-center w-1/2 ">
              <div>
                <h2 className="text-4xl text-center">Monthly Subscription</h2>

                <p className="text-xl py-3 text-center">
                  Includes NZ postage in a DLE envelope via NZ Post
                </p>

                <ul className="list-disc w-[70%] mx-auto space-y-4 text-lg py-4">
                  <li>Free Shipping</li>
                  <li>Stickers will be approx 3" x 3" (75mm x 75mm)</li>
                  <li>Easy to apply</li>
                  <li>Made of high-quality vinyl</li>
                  <li>Stick to any smooth surface</li>
                  <li>Each Pack includes at least three stickers</li>
                  <li>Diffrent sticker every month</li>
                </ul>
              </div>
              <div className="space-y-4 py-5">
                <h1 className="text-4xl font-bold text-center">USD 8.00 </h1>
                <button className="px-16 py-4 bg-[#D1155D] text-white font-semibold">
                  <a href="https://checkout.stripe.com/c/pay/plink_1LmAXVKWLC5b94TkDIvw8qe4#fidkdWxOYHwnPyd1blppbHNgWnExQUdMd0xDd0Y1VHR2b3FAU2FUT3JhUDU1c0s2a01iSUInKSd1aWxrbkB9dWp2YGFMYSc%2FJzJ2TGFQc2QzUGBLVDBSNWBQXCcpJ3dgY2B3d2B3SndsYmxrJz8nbXFxdXY%2FKiptYGlpaitqcXFgd2RrYXdqZm5gcStmamgqbWpoYCd4JSUl">
                    SubScribe Now
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4 justify-evenly flex justify-center">
            <Card
              img="/image 2.png"
              heading="Monthly Sticker Subscription"
              text="Get a stickers sent to you every month."
              btn_text="Learn More"
            />
            <Card
              img="/image 2.png"
              heading="Kids Sticker Art"
              text="Turn your kids art into stickers that you can use anywhere"
              btn_text="Learn More"
            />
            <Card
              img="/image 2.png"
              heading="Learn Cutting and Engraving"
              text="Create new and unique itmes."
              btn_text="Contact us"
            />
          </div>
          <div className="px-20 py-10 space-y-4">
            <div>
              <h3 className="font-semibold text-xl">
                What is the cut-off to get stickers for the next month?{" "}
              </h3>
              <p>
                Purchase your subscription by the 5th of the Month to get this
                month's stickers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                {" "}
                Where do the stickers ship from?
              </h3>
              <p>
                These stickers are printed in New Zealand and shipped via NZ
                Post in a DLE envelope.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                {" "}
                Who designs these stickers?{" "}
              </h3>
              <p>
                We work with several designers to make the stickers unique with
                various styles.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                {" "}
                Are stickers Matt or Glossy?
              </h3>
              <p>
                These stickers will come in a variety of surfaces. They could be
                Matt, Glossy, or even Holographic.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                {" "}
                Do stickers have a border?
              </h3>
              <p>Yes, we print our stickers with a 3mm border.</p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                Can I get more than three stickers?
              </h3>
              <p>
                Not right now, but keep an eye out for future packs with more
                stickers. We may add a bonus sticker from time to time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                Can I get stickers from previous months?
              </h3>
              <p>
                Get in touch with us. We may have some extras we could share.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl">
                Can you print custom stickers?
              </h3>
              <p> Yes, Contact us about custom stickers.</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default StickerSubscription;
