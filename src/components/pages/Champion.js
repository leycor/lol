import { info } from 'autoprefixer'
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Champion = () => {

    const [champion, setChampion] = useState({})
    const [loading, setLoading] = useState(true)

    const paramIdChampion = useParams()


    const getChampionData = async() => {
        const resp = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/${paramIdChampion.champion}.json`)
        const { data } = await resp.json()
        setChampion(data.valueOf()[`${paramIdChampion.champion}`])
        setLoading(false)
    }


    useEffect(() => {
        getChampionData();
    }, [])


    return (
        <Fragment>
            {
                loading ?
                (
                    <div className='h-screen flex items-center justify-center'>
                        <p className='font-poppins font-semibold text-base uppercase'>Cargando datos</p>
                    </div>
                )
                :
                (

                    <div style={{backgroundImage: `url(${`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${`${champion.id}`}_0.jpg`})`}} className='h-screen bg-no-repeat bg-cover bg-center bg-fixed'>
                        <div className='grid grid-cols-2  bg-gradient-to-r from-gray-900 via-transparent to-gray-900 h-screen'>
                            <div className='pt-10  px-5 md:px-10 container mx-auto'>
            
                                {/* Nombre y titulo */}
                                <p className='text-white text-4xl uppercase font-semibold font-poppins'>{champion.name}</p>
                                <p className='text-gray-400 text-2xl uppercase font-medium font-poppins mb-6'>{champion.title}</p>
                                {/* /Nombre y titulo */}
                                
                                {/* Atributos */}
                                <div className='flex mb-5'>
                                    <div 
                                    style={{ backgroundImage: `url(${`http://ddragon.leagueoflegends.com/cdn/11.5.1/img/champion/${`${champion.id}`}.png`})`}}
                                    className='flex flex-col  items-end justify-end mr-3 h-20 w-20 bg-no-repeat bg-cover bg-center'>
                                    {
                                        champion.tags.map( tag => 
                                                <p key={tag} style={{ backgroundColor: `${'#00000096'}` }}className='text-xs text-white px-1 py-0.5'>{tag}</p>
                                        )
                                    }
                                    </div>
            
                                    <div>
                                        <p className='mt-auto text-white text-sm font-medium font-poppins'>ATTACK: <span className='text-gray-300'>{champion.info.attack}</span></p>
                                        <p className='mt-auto text-white text-sm font-medium font-poppins'>DEFENSE: <span className='text-gray-300'>{champion.info.defense}</span></p>
                                        <p className='mt-auto text-white text-sm font-medium font-poppins'>MAGIC: <span className='text-gray-300'>{champion.info.magic}</span></p>
                                        <p className='mt-auto text-white text-sm font-medium font-poppins'>DIFFICULTY: <span className='text-gray-300'>{champion.info.difficulty}</span></p>
                                    </div>
            
                                </div>
            
                                {/* /Atributos */}
            
                                {/* SPELLS */}
            
                                <div className='flex mb-5'>
                                    <div className='Spell'>
                                        <div style={{ backgroundImage: `url(${`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/passive/${`${champion.passive.image.full}`}`})`}} className='mr-5 w-10 h-10 bg-no-repeat bg-cover bg-center mb-4'>
                                        </div>
                                        <p className='font-semibold font-poppins text-sm text-white uppercase mb-1'>{ champion.passive.name}</p>
                                        <p className='font-base font-poppins text-sm text-gray-300 mb-12'>{champion.passive.description}</p>
                                    </div>
                                        
                                    
                                    {
                                        champion.spells.map(({id, name, description })=>

                                            <div key={id} className='Spell'>
                                                <div style={{ backgroundImage: `url(${`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/spell/${`${id}`}.png`})`}} className='mr-5 w-10 h-10 bg-no-repeat bg-cover bg-center'>
                                                    <div style={{ backgroundColor: `#00000050`}} className='flex items-center justify-center w-10 h-10'>
                                                        <p className='text-white font-semibold text-xl'>{id.charAt( id.length - 1)}</p>
                                                    </div>
                                                </div>

                                                <p className='font-semibold font-poppins text-sm text-white uppercase mb-1'>Umbral Dash</p>
                                                <p className='font-base font-poppins text-sm text-gray-300 mb-12'>Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.</p>
                                            </div>
                                        
                                        )
                                    }
                                </div>
                                {/* Lore */}
                                <p className='font-semibold font-poppins text-sm text-white uppercase mb-1'>LORE</p>
                                <p className='text-gray-300 text-sm font-base font-poppins'>{champion.lore}</p>
                                {/* /Lore */}
                            </div>
                        </div>
                    </div>
                )
            }
        </Fragment>
    )
}

export default Champion
