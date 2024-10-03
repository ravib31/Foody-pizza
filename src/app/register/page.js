"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    // console.log(email, password);

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    // .then((res) => {
    //   if (res.status === 200) {
    //     // window.location.href = "/login";
    //   }
    // });
    // console.log(response);
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  };

  return (
    <section className="mt-8">
      <h1 className="text-red-600 text-center text-4xl mb-4">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">
          <p className="text-center text-orange-600">
            User Created Successfully.
            <br />
            Now you can{" "}
            <Link href={"/login"} className="underline">
              Login &raquo;
            </Link>
          </p>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          <p className="text-center text-orange-600">
            Something went wrong.
            <br />
            Please try again{" "}
            <Link href={"/login"} className="underline">
              Login &raquo;
            </Link>
          </p>
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          placeholder="email"
          type="email"
          value={email}
          disabled={creatingUser}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          disabled={creatingUser}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
        <div className="my-4 text-center text-gray-500">
          Or Login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt="google" width={32} height={32} />
          Login with Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t py-3">
          Existing User? <Link className="underline" href={'/login'}>Login here &raquo;</Link>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
