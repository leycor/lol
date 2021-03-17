import React from 'react'
import { Link } from 'react-router-dom'

function CardChampion({id, name, title, tags}) {

    const imgData = `http://ddragon.leagueoflegends.com/cdn/11.5.1/img/champion/${id}.png`
    return (
    <div className='flex  flex-col champion px-2 w-36 mb-3 '>
        <Link 
        to={`/${id}`}
        className='hover:opacity-80 duration-300 flex flex-col justify-end items-end w-20 h-20 md:w-24 md:h-24 bg-center bg-cover bg-no-repeat mb-1' 
        style={{ backgroundImage: `url('${imgData}')` }}
        >
            { tags.map( tag =><p key={tag} style={{backgroundColor:`#00000096`}} className='mb-0.5 text-white text-xs bg-gray-700 px-1 py-0.5'>{tag}</p> )}

        </Link>
        <p className='text-gray-800 font-poppins font-medium text-sm'>{name}</p>
        <p className='break-words text-gray-600 font-poppins font-medium text-xs'>{title}</p>
    </div>

    )
}

export default CardChampion
