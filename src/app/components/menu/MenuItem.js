import Image from 'next/image'
import React from 'react'

const MenuItem = () => {
  return (
    
       
        <div className='bg-lime-200  hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all p-4 rounded-lg text-center'>
            <div className='text-center'>

            <img src={'/pizza-4.png'} alt="pizza" className='max-h-auto max-h-24 block mx-auto'/>
            </div>
            <h4 className='font-semibold text-xl my-3'>Chicken Pizza</h4>
            <p className='text-gray-500 text-sm'>Description
            </p>
            <button className='bg-orange-500 text-white px-4 py-2 rounded-3xl'>Add</button>
        </div>
   
    
  )
}

export default MenuItem