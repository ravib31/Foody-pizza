"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

export default function LoginPage(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginProgress,setLoginProgress]= useState(false);

  async function handleFormSubmit(e){
    e.preventDefault();
    console.log(email, password);
    setLoginProgress(true);
   await signIn('credentials',{email,password ,callbackUrl: '/'});
      setLoginProgress(false);
  }
  return(
    <section className="mt-8">
      <h1 className="text-red-600 text-center text-4xl mb-4">Login</h1>
      <form className="max-w-xs mx-auto " onSubmit={handleFormSubmit}>
      <input
          placeholder="email"
          type="email"
          name="email"
          value={email}
          disabled={loginProgress}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          name="password"
          disabled={loginProgress}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loginProgress}>Login</button>
        <div className="my-4 text-center text-gray-500">
          Or Login with provider
        </div>
        <button className="flex gap-4 justify-center"  >
          <Image src={"/google.png"} alt="google" width={32} height={32} />
          Login with Google
        </button>
        <div className="text-center my-4 text-gray-500 border-t py-3">
          Not a existing User? <Link className="underline" href={'/register'}>Register here &raquo;</Link>
        </div>
      </form>
    </section>
  )
}