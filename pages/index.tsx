import type { NextPage } from "next";
import { Card, Layout, NextHead } from "../components";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col ">
      <NextHead />
      <Layout>
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
      </Layout>
    </div>
  );
};

export default Home;
