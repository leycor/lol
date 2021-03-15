import React from 'react'

const Nav = ({logo, title}) => {
    return (
        <nav className='flex items-center justify-center md:justify-start px-2 bg-gray-900 text-white font-poppins sticky top-0 mb-10'>
            <img 
            src={ logo }
            alt={ title }
            className='h-12'
            />
            <p className='font-medium uppercase'>{ title }</p>
        </nav>
    )
}

export default Nav
