import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({logo, title}) => {
    return (
        <nav className='flex items-center justify-center md:justify-start px-2 bg-gray-900 text-white font-poppins sticky top-0'>

            <Link to='/' className='flex items-center'>
                <img 
                src={ logo }
                alt={ title }
                className='h-12'
                />
                <p className='font-medium uppercase hover:text-gray-300'>{ title }</p>
            </Link>
        </nav>
    )
}

export default Nav
