import Image from 'next/image'
import React from 'react'
import MenuItem from '../menu/MenuItem'

const HomeMenu = () => {
    return (
      <div className=''>
        <div className='absolute left-0 right-0 w-full justify-start'>
        <div className=' absolute left-52 --top-14 -z-10'>
            <Image src={"/cilantro-1.png"}  alt={'menu'} width={109} height={195}/>
        </div>
        {/* <div className='absolute -top-20 right-0 -z-10'>
            <Image src={"/cilantro-2.png"}  alt={'menu'} width={200} height={350}/>
        </div> */}
        </div>
      <div className='text-center mb-4'>
        <h3 className='uppercase text-gray-500 font-semibold leading-3'>Check Out</h3>
        <h2 className='uppercase text-orange-500 font-bold text-4xl '>Menu</h2>
    </div>
    <div className='grid grid-cols-3 gap-4'>
    <MenuItem/>
    <MenuItem/>
    <MenuItem/>
    <MenuItem/>
    <MenuItem/>
    <MenuItem/>
    </div>
    </div>
  )
}

export default HomeMenu