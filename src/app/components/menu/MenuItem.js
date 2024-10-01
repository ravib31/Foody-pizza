import Image from 'next/image'
import React from 'react'

const MenuItem = () => {
  return (
    
       
        <div className='bg-lime-200 p-4 rounded-lg text-center'>
            <Image src={'/pizza-2.jpg'} alt="pizza" width={250} height={195}/>
            <h4 className='font-semibold text-xl my-3'>Chicken Pizza</h4>
            <p className='text-gray-500 text-sm'>Description
            </p>
            <button className='bg-orange-500 text-white px-4 py-2 rounded-3xl'>Add</button>
        </div>
   
    
  )
}

export default MenuItem