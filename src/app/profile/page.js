"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const profilePage = () => {
  const session = useSession();
  const [userName, setUserName] = useState('');

  const { status } = session;
  useEffect(() => {
    if (status === "authenticated" && session?.data?.user?.name) {
      setUserName(session.data.user.name);
    }
  }, [status, session]);
  console.log(session);
  console.log(session?.data?.user?.name);
  const userImage = session.data?.user?.image;


  async function handleProfileForm(e) {
    e.preventDefault();
    const response = await fetch("/api/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: userName }),
    })
  }
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }
  if (status === "unauthenticated") {
    redirect("/login");
  }
  return (
    <div className="mt-8">
      <h1 className="text-orange-600 text-center text-4xl mb-4">Profile</h1>
      <div className="max-w-md mx-auto ">
        <div className="flex gap-4 items-center">
          <div>
            <div className=" p-2 rounded-lg relative">
              <Image
                src={userImage}
                alt="user image"
                className="rounded-lg w-full h-full mb-1"
                width={250}
                height={250}
              />
              <button type="button">Edit</button>
            </div>
          </div>
          <form className="grow" onSubmit={handleProfileForm}>
            <input
              type="text"
              placeholder="First and last name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="email"
              value={session.data?.user?.email}
              disabled={true}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default profilePage;
