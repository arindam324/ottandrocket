import { collection, doc, setDoc } from "firebase/firestore";
import React, { FormEvent } from "react";
import { Layout, NextHead } from "../components";
import Button from "../components/Button";
import { useUser } from "../context/useProvider";
import { useUserDetail } from "../context/userDetailsProvider";
import { db } from "../lib/firebase";

const MyAccount = () => {
  const { user } = useUser();

  const updateDetails = async (e: FormEvent) => {
    e.preventDefault();

    await setDoc(doc(collection(db, "users"), user.uid), {
      firstname,
      lastname,
      email,
    });
  };

  const { firstname, lastname, email, setFirstname, setLastname, setEmail } =
    useUserDetail();

  return (
    <div>
      <NextHead />
      <Layout>
        <div className="flex flex-col items-center space-y-4 py-4">
          <h1 className="text-3xl font-semibold">
            Otter and Rocket has partnered with Stripe to manage our
            subscription.
          </h1>
          <Button bg="#D1155D" color="white" text="Manage Subscription" />

          <form className="max-w-[600px] w-full space-y-4">
            <div className="flex flex-col space-y-2 w-full">
              <label htmlFor="firstname">First Name</label>
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.currentTarget.value)}
                id="firstname"
                type="text"
                className="border  p-4"
              />
            </div>
            <div className="flex flex-col space-y-2  w-full">
              <label htmlFor="lastname">Last Name</label>
              <input
                value={lastname}
                onChange={(e) => setLastname(e.currentTarget.value)}
                type="text"
                id="lastname"
                className="border  p-4"
              />
            </div>
            <div className="flex flex-col space-y-2   w-full">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                type="email"
                id="email"
                className="border  p-4"
              />
            </div>
            <button
              onClick={updateDetails}
              className="bg-[#D1155D] mr-auto text-white font-semibold px-8 py-2"
            >
              Update Details
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default MyAccount;
