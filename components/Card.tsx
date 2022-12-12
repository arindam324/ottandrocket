import React from "react";
import Image from "next/image";
import Button from "./Button";

type CardProps = {
  img: string;
  heading: string;
  text: string;
  btn_text: string;
};

const Card: React.FC<CardProps> = ({ img, heading, text, btn_text }) => {
  return (
    <article className="flex text-white min-h-[550px] justify-evenly flex-col max-w-[450px] w-full bg-[#131428] items-center p-4">
      <Image src={img} width={350} height={250} alt="" />
      <h2 className="text-4xl text-center  leading-9">{heading}</h2>
      <p className="text-2xl leading-9 text-center ">{text}</p>
      <Button bg={"#00AAD1"} color="white" text={btn_text} />
    </article>
  );
};

export default Card;
