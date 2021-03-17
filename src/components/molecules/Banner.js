import React from 'react'

const Banner = ({title1, title2, subtitle}) => (

    <div className='text-center font-poppins mb-12'>
        <p className='text-2xl font-medium text-gray-800 uppercase mb-2'>{ title1 }</p>
        <p className='text-5xl font-semibold uppercase text-gray-900 mb-5'>{ title2 } </p>
        <p className='text-gray-800 text-sm'> { subtitle } </p>
    </div>

)

export default Banner
