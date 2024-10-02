import React from 'react'

const SectionHeaders = ({subHeader,mainHeader}) => {
  return (
    <div>
        
        <h3 className='uppercase text-gray-500 font-semibold leading-3'>{subHeader}</h3>
        <h2 className='uppercase text-orange-500 font-bold text-4xl '>{mainHeader}</h2>

    </div>
  )
}

export default SectionHeaders