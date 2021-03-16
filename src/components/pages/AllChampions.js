import React, { Fragment, useEffect, useMemo, useState } from 'react'
import CardChampion from '../molecules/CardChampion'

const AllChampions = () => {

    console.log('Me estoy ejecutando')
    // Lista de todos los campeones
    const [championsState, setChampions] = useState( { champions: [], loading: true,})
    const { champions, loading } = championsState

    // Lista de campeones filtrados
    const [championWithTagsState , setChampionWithTags ] = useState({ championWithTags: [], tagNameList:''} )
    const {championWithTags, tagNameList } = championWithTagsState


    // Efecto al llamar componente
    useEffect(() => {
        
        window.scrollTo({top:0})
        getData();
    }, [])


    // Recibe el Tags para filtrar la lista de campeones, si el tags ya está disponible no hace falta tilrar.
    const handleChangeTags = (e) => {
        const tag = e.target.name
        if(tagNameList !== tag){

            const newList = champions.filter(({tags})=> tags.includes(tag) )
            setChampionWithTags({championWithTags: newList, tagNameList:tag})
            console.log('Estoy Filtrando campeones')
        }
        
    }

    // Recibir todos los campeones | Colocarlos en una lista | Actualizar State
    const getData = async() => {
        const respChampion = await fetch('http://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/champion.json')
        const { data } = await respChampion.json()
        const dataList = Object.values( data )
        setChampions({champions:dataList, loading: false})
    }


    return (

            <section className='px-5 md:px-10 mx-auto mb-10'>
                
                {/* Título principal */}
                <div className='text-center font-poppins mb-12'>
                    <p className='text-2xl font-medium text-gray-800 uppercase mb-2'>Elige tu</p>
                    <p className='text-5xl font-semibold uppercase text-gray-900 mb-5'>Campeón</p>
                    <p className='text-gray-800 text-sm'>Con más de 140 campeones, encontrarás el que se ajuste perfectamente a tu estilo de juego. Domina a uno o domínalos a todos.</p>
                </div>


                {/* Lista de campeones */}
                {
                    !loading
                    ?(  
                        <Fragment>
                            <div className='flex justify-center flex-wrap mb-5'>
                                <div className='bg-gray-800'>
                                    <button 
                                    onClick={(e, champions, tagNameList) => handleChangeTags(e, champions, tagNameList) }
                                    className=' focus:outline-none hover:text-red-300 p-3 mx-2 uppercase text-white font-poppins font-medium text-base' name='Tank Mage Figther Assassin Support Marksman'>Todos
                                    </button>

                                    <button 
                                    onClick={(e,tagNameList, champions) => handleChangeTags(e, tagNameList, champions) }
                                    className=' focus:outline-none hover:text-gray-300 p-3 mx-2 uppercase text-white font-poppins font-medium text-base' name='Tank'>Tanks
                                    </button>

                                    <button 
                                    onClick={(e,tagNameList, champions) => handleChangeTags(e, tagNameList, champions) }
                                    className=' focus:outline-none hover:text-gray-300 p-3 mx-2 uppercase text-white font-poppins font-medium text-base' name='Fighter'>Fighter
                                    </button>

                                    <button 
                                    onClick={(e,tagNameList, champions) => handleChangeTags(e, tagNameList, champions) }
                                    className=' focus:outline-none hover:text-gray-300 p-3 mx-2 uppercase text-white font-poppins font-medium text-base' name='Assassin'>Assassin
                                    </button>

                                    <button 
                                    onClick={(e,tagNameList, champions) => handleChangeTags(e, tagNameList, champions) }
                                    className=' focus:outline-none hover:text-gray-300 p-3 mx-2 uppercase text-white font-poppins font-medium text-base' name='Mage'>Mage
                                    </button>

                                    <button 
                                    onClick={(e,tagNameList, champions) => handleChangeTags(e, tagNameList, champions) }
                                    className=' focus:outline-none hover:text-gray-300 p-3 mx-2 uppercase text-white font-poppins font-medium text-base' name='Marksman'>Marksman
                                    </button>

                                    <button 
                                    onClick={(e,tagNameList, champions) => handleChangeTags(e, tagNameList, champions) }
                                    className=' focus:outline-none hover:text-gray-300 p-3 mx-2 uppercase text-white font-poppins font-medium text-base' name='Support'>Support
                                    </button>

                                </div>
                            </div>
                            <div className='flex flex-wrap justify-center'>
                            {
                                championWithTags.length > 0
                                ?
                                championWithTags.map( ({id, name, title, tags}) => <CardChampion key={id}  id={id} name={name} title={title} tags={tags} /> )
                                :
                                champions.map( ({id, name, title, tags}) => <CardChampion key={id}  id={id} name={name} title={title} tags={tags} /> )
                            }
                            </div>
                        </Fragment>
                    )
                    :(
                        <p className='bg-gray-800 p-4 text-white text-center font-medium font-poppins uppercase'>Cargando Campeones ...</p>
                    )
                }

            </section>
    )
}

export default AllChampions
