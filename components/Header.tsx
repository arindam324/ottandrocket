import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Button from "./Button";
import { useUser } from "../context/useProvider";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { UserCredential } from "firebase/auth";

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
  const [user] = useAuthState(auth);

  const [signOut, loading, error] = useSignOut(auth);

  const logout = async () => {
    await signOut();
    // setUser(null);
    router.push("/");
  };

  return (
    <header className="">
      <div className="grid grid-cols-3  justify-items-center">
        <div />
        <Image src={"/image 1.svg"} width={250} height={250} alt="" />

        {user ? (
          <div className="space-x-8 py-8">
            <button
              onClick={() => router.push("/my-account")}
              className="px-10  font-semibold  cursor-pointer py-2 bg-[#F0F0F0]"
            >
              My Account
            </button>
            <button
              onClick={logout}
              className="px-10 font-semibold py-2 bg-[#F0F0F0] cursor-pointer"
            >
              Log out
            </button>
          </div>
        ) : (
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
        )}
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
