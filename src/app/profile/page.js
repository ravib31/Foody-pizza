"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const profilePage = () => {
  const session = useSession();
  const { status } = session;
  console.log(session);
  const userImage = session.data?.user?.image;
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (status === "unauthenticated") {
    redirect("/login");
  }
  return (
    <div className="mt-8">
      <h1 className="text-orange-600 text-center text-4xl mb-4">Profile</h1>
      <form className="max-w-md mx-auto ">
        <div className="flex gap-4 items-center">
          <div>
          <div className=" p-2 rounded-lg relative">
            <Image
              src={userImage}
              alt="user image"
              className="rounded-lg w-full h-full mb-1"
              width={250} height={250}
              
            />
            <button type="button">Edit</button>
          </div>
          </div>
          <div className="grow">
            <input type="text" placeholder="First and last name" />
            <input type="email" value={session.data?.user?.email}  disabled={true}/>
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default profilePage;
