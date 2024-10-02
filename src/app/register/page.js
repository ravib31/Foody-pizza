"use client";
import Image from "next/image";
import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers:{'Content-Type': 'application/json'}
    }).then((res) => {
      if (res.status === 200) {
        // window.location.href = "/login";
      }
    });
  };
  return (
    <section className="mt-8">
      <h1 className="text-red-600 text-center text-4xl mb-4">Register</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          Or Login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image src={"/google.png"} alt="google" width={32} height={32} />
          Login with Google
        </button>
      </form>
    </section>
  );
};

export default RegisterPage;
