import React, { Fragment } from 'react'

const ChampionInfo = ({name, title}) => (

    <Fragment>
        <p className='text-white text-4xl uppercase font-semibold font-poppins'>{name}</p>
        <p className='text-gray-400 text-2xl uppercase font-medium font-poppins mb-6'>{title}</p>
    </Fragment>
)
export default ChampionInfo
