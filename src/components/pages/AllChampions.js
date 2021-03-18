import React, { Fragment, useEffect, useState } from 'react'
import Banner from '../molecules/Banner'
import ButtonFilter from '../molecules/ButtonFilter'
import CardChampion from '../molecules/CardChampion'
import FormChampion from '../molecules/FormChampion'

const AllChampions = () => {

    // Lista de todos los campeones
    const [championsState, setChampions] = useState( { champions: [], loading: true,})
    const { champions, loading } = championsState

    const [championTagNameList] = useState(
        ['Tank Mage Figther Assassin Support Marksman','Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support']
    )



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

        if( tagNameList !== tag ) {
            
            const newList = champions.filter(({tags})=> tags.includes(tag) )
            setChampionWithTags({championWithTags: newList, tagNameList:tag})
        }
        
    }

    // Recibir todos los campeones | Colocarlos en una lista | Actualizar State
    const getData = async() => {
        const respChampion = await fetch('https://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/champion.json')
        const { data } = await respChampion.json()
        const dataList = Object.values( data )
        setChampions({champions:dataList, loading: false})
    }


    return (

            <section className='container px-5 md:px-10 mx-auto mt-10 mb-10'>

                {/* Banner Principal */}
                <Banner
                title1 = 'CHOOSE YOUR'
                title2 = 'CHAMPION'
                subtitle= 'With more than 140 champions, you’ll find the perfect match for your playstyle. Master one, or master them all.'
                />

                {
                    !loading
                    ?(  
                        <Fragment>
                            <div className='flex flex-col items-center justify-center flex-wrap mb-5'>

                                {/* Buscador */}
                                <FormChampion 
                                champions={ champions } 
                                />


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
                            <div className='justify-items-center grid gap-4 grid-cols-2 sm2:grid-cols-3 md:grid-cols-4 md2:grid-cols-5 lg:grid-cols-10'>
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
                        <p className='bg-gray-800 p-4 text-white text-center font-medium font-poppins uppercase'>LOADING ...</p>
                    )
                }

            </section>
    )
}

export default AllChampions
