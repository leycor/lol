import React, { Fragment, useEffect, useState } from 'react'
import Banner from '../molecules/Banner'
import ButtonFilter from '../molecules/ButtonFilter'
import CardChampion from '../molecules/CardChampion'

const AllChampions = () => {

    console.log('Me estoy ejecutando')
    // Lista de todos los campeones
    const [championsState, setChampions] = useState( { champions: [], loading: true,})
    const { champions, loading } = championsState

    // Estado de buscador
    const [search, setSearch] = useState('')

    const championTagNameList = ['Tank Mage Figther Assassin Support Marksman','Tank', 'Fighther', 'Assassin', 'Mage', 'Marksman']



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

    // Busca campeones
    const handleSearchChampion = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

    // Recibir todos los campeones | Colocarlos en una lista | Actualizar State
    const getData = async() => {
        const respChampion = await fetch('http://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/champion.json')
        const { data } = await respChampion.json()
        const dataList = Object.values( data )
        setChampions({champions:dataList, loading: false})
    }


    return (

            <section className='container px-5 md:px-10 mx-auto mt-10 mb-10'>

                {/* Banner Principal */}
                <Banner
                title1 = 'Elige tu'
                title2 = 'Campeón'
                subtitle= 'Con más de 140 campeones, encontrarás el que se ajuste perfectamente a tu estilo de juego. Domina a uno o domínalos a todos.'
                />

                {
                    !loading
                    ?(  
                        <Fragment>
                            <div className='flex flex-col items-center justify-center flex-wrap mb-5'>

                                {/* Buscador */}
                                <form onSubmit={ handleSearchChampion }>
                                    <input 
                                    type='text' 
                                    placeholder='Search...' 
                                    className='text-center focus:outline-none border-2 border-gray-700 mb-5 p-3 mr-3' 
                                    autoComplete='false'
                                    value={ search }
                                    onChange={ (e)=> setSearch(e.target.value) }
                                    />

                                    <input 
                                    type='submit' 
                                    value='Buscar' 
                                    className='focus:outline-none cursor-pointer uppercase p-3  border-2 border-red-800 text-white  font-poppins font-medium bg-red-800' />
                                </form>

                                {/* Filtro de campeones */}
                                <div className='bg-gray-800'>
                                    {
                                        championTagNameList.map( tag =>
                                            <ButtonFilter
                                            key={ tag }
                                            handleChangeTags={ handleChangeTags }
                                            tagNameList={ tagNameList }
                                            champions = { champions}
                                            name={ tag }
                                            />
                                        )
                                    }

                                </div>
                            </div>

                            {/* Listar campeones */}
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
