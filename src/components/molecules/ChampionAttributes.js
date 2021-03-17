import React from 'react'

const ChampionAttributes = ({id, tags, info}) => (

    <div className='flex mb-5'>
        <div 
        style={{ backgroundImage: `url(${`https://ddragon.leagueoflegends.com/cdn/11.5.1/img/champion/${`${id}`}.png`})`}}
        className='flex flex-col  items-end justify-end mr-3 h-20 w-20 bg-no-repeat bg-cover bg-center'>

            {
                tags.map( tag => 
                        <p key={tag} style={{ backgroundColor: `${'#00000096'}` }}className='text-xs text-white px-1 py-0.5'>{tag}</p>
                )
            }

        </div>

        <div>
            <p className='mt-auto text-white text-sm font-medium font-poppins'>ATTACK: <span className='text-gray-300'>{info.attack}</span></p>
            <p className='mt-auto text-white text-sm font-medium font-poppins'>DEFENSE: <span className='text-gray-300'>{info.defense}</span></p>
            <p className='mt-auto text-white text-sm font-medium font-poppins'>MAGIC: <span className='text-gray-300'>{info.magic}</span></p>
            <p className='mt-auto text-white text-sm font-medium font-poppins'>DIFFICULTY: <span className='text-gray-300'>{info.difficulty}</span></p>
        </div>
    </div>
)

export default ChampionAttributes
