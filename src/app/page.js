import Image from "next/image";
import Link from "next/link";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";

export default function Home() {
  return (
    <div>
     
      <Hero />
      <HomeMenu />
      <section className="text-center my-12 mt-4">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <p className="max-w-md mx-auto mt-4 text-gray-500">
          At Pizza Up, we’re passionate about serving fresh, delicious, and
          authentic pizzas made from the finest ingredients. Our hand-tossed
          dough, house-made sauces, and premium toppings come together to create
          unforgettable flavors in every bite. Our commitment to quality extends
          beyond just our food—we take pride in providing a welcoming
          atmosphere, friendly service, and fast delivery, ensuring a great
          experience for dine-in, takeout, or delivery. At Pizza Up, it’s more
          than just pizza; it’s a celebration of flavor, community, and joy.
        </p>
      </section>
      <section className="text-center my-8 mt-4">
        <SectionHeaders
          subHeader={"Dont\'t hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className='mt-8 underline text-gray-500'>

        <a className='text-4xl' href='+0123456789'>+0123456789</a>
        </div>
      </section>
      
    </div>
  );
}
