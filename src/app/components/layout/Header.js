'use client';
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { data: session, status } = useSession();  
  console.log(session, status);
  console.log(status);

  return (
    <header className="flex items-center justify-between bg-lime-400 px-4 py-2 rounded-xl mb-4">
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link className="text-red-600 font-extrabold text-2xl" href="/">
          Pizza
        </Link>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <nav className="flex items-center gap-10 text-gray-600 font-semibold">
        {/* Check if the session is loading */}
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : session ? (
          <>
          {/* <Image src={session.user.image} alt="user" width={40} height={40} className="rounded-full" /> */}
            <Link href={'/profile'} className="text-white whitespace-nowrap">Welcome, {session?.user?.email.slice(0, 4)}</Link>
            <button
              className="bg-orange-600 rounded-full text-white px-8 py-2"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className=" rounded-full text-black px-8 py-2">
              Login
            </Link>
            <Link href="/register" className="bg-orange-600 rounded-full text-white px-8 py-2">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
