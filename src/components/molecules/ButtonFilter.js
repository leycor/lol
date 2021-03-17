import React from 'react'

const ButtonFilter = ({handleChangeTags, tagNameList, champions, name}) => {

    return(
        <button 
        onClick={(e,tagNameList, champions) => handleChangeTags(e, tagNameList, champions) }
        className='focus:outline-none hover:text-gray-300 p-3 mx-2 uppercase text-white font-poppins font-medium text-base'
        name={name}>
            
        { name === 'Tank Mage Figther Assassin Support Marksman' ?'Alls': name }
        </button>
    );
}

export default ButtonFilter
