import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-lime-400 px-4 py-2 rounded-xl mb-4">
      <Link className="text-red-600 font-extrabold text-2xl" href={'/'}>
        Pizza
      </Link>
      <nav className="flex items-center gap-10 text-gray-600 font-semibold ">
        <Link href="/">Home</Link>

        <Link href="/contact">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <nav className='flex items-center gap-4'>
      
      <Link
          href="/login"
          className="bg-orange-600 rounded-full text-white px-8 py-2"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-orange-600 rounded-full text-white px-8 py-2"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
