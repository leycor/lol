import React, { Fragment, useState } from 'react'
import CardChampion from './CardChampion'

const FormChampion = ({champions}) => {

    // Estado de buscador
    const [search, setSearch] = useState('')
    const [championInput, setchampionInput] = useState('')


    // Busca campeones
    const handleSearchChampion = (e) => {
        e.preventDefault();
        console.log(search)
        const championInput = champions.find( champion => champion.name.toLocaleLowerCase() === search.toLocaleLowerCase())
        championInput !== undefined ? setchampionInput( championInput ) : setchampionInput('El campeon no existe')
        setSearch('')

    }

    return (
        <Fragment>

        <form onSubmit={ handleSearchChampion } className='flex flex-col'>

            <div className='flex flex-col items-center'>
                <div className='flex justify-center items-center px-2 h-36 mb-3'>
                    {
                    championInput === '' || championInput === 'El campeon no existe'?
                    <p className='mt-auto text-center font-poppins text-gray-700 mb-2'>{ championInput }</p>
                    : 
                    <CardChampion
                    id={championInput.id} 
                    name={championInput.name}  
                    title={championInput.title} tags={championInput.tags}/>
                    }
                </div>

                <input 
                type='text' 
                placeholder='Search...' 
                className='text-center focus:outline-none border-2 border-gray-700 mb-1 p-3' 
                autoComplete='false'
                value={ search }
                onChange={ (e)=> setSearch(e.target.value) }
                />
            </div>

                <input 
                type='submit' 
                value='Search' 
                className='focus:outline-none cursor-pointer uppercase p-2  border-2 border-red-800 text-white  font-poppins font-medium bg-red-800 mb-5' />
        </form>
        </Fragment>

    )
}

export default FormChampion
