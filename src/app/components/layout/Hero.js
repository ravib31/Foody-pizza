import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="hero mt-4">
      <div className='py-12'>
        <h1 className='text-4xl font-semibold '>You can't make everyone happy.<br/> You're not &nbsp; <span className='text-orange-600'>Pizza</span></h1>
        <p className='my-6 text-gray-500'>Slice to meet you!</p>
        <div className='flex gap-4'>
            <button className='bg-orange-600 uppercase text-white rounded-full px-4 py-2 flex justify-center gap-2 text-sm items-center'>Order Now
                <Right/>
            </button>
            <button className='text-gray-500  items-center rounded-full px-8 py-2 flex gap-2 bg-lime-100'>Learn More  <Right/> </button>
        </div>
      </div>
      <div className="relative ">
        <Image
          src={"/pizza-6.png"}
          alt={'pizza'}
          layout={'fill'}
          objectFit={'contain'}
        />
      </div>
    </section>
  );
};

export default Hero;
