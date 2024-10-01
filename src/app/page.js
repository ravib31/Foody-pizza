import Image from "next/image";
import Link from "next/link";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <HomeMenu/>
    </div>
  );
}
