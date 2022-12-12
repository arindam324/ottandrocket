import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "./Button";

const NavItmes = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "About",
    href: "/about",
  },
  {
    id: 2,
    name: "Sticker Subscription",
    href: "/sticker-subscription",
  },
  {
    id: 3,
    name: "Kids Sticker art",
    href: "kids-sticker",
  },
  {
    id: 4,
    name: "contact",
    href: "/contact",
  },
];

const Header = () => {
  const router = useRouter();
  return (
    <header className="">
      <div className="grid grid-cols-3  justify-items-center">
        <div />
        <Image src={"/image 1.svg"} width={250} height={250} alt="" />

        <div className="space-x-8 py-8">
          <Button
            onClick={() => router.push("/login")}
            text="Login"
            bg="#F0F0F0"
            color="black"
          />
          <Button
            onClick={() => router.push("/register")}
            text="Register"
            bg="#D1155D"
            color="white"
          />
        </div>
      </div>
      <nav className="flex w-full bg-[#131428] justify-center space-x-24 text-lg font-semibold text-white py-5">
        {NavItmes.map((item) => (
          <li key={item.id} className="list-none cursor-pointer">
            <Link href={item.href} passHref>
              {item.name}
            </Link>
          </li>
        ))}
      </nav>
    </header>
  );
};

export default Header;
