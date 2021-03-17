import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ChampionAttributes from '../molecules/ChampionAttributes'
import ChampionInfo from '../molecules/ChampionInfo'
import ChampionSpells from '../molecules/ChampionSpells'

const Champion = () => {

    const [champion, setChampion] = useState({})
    const [loading, setLoading] = useState(true)

    const paramIdChampion = useParams()


    const getChampionData = async(paramIdChampion ) => {
        const resp = await fetch(`http://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/${paramIdChampion.champion}.json`)
        const { data } = await resp.json()
        setChampion(data.valueOf()[`${paramIdChampion.champion}`])
        setLoading(false)
    }


    useEffect(() => {
        getChampionData(paramIdChampion );
    }, [paramIdChampion ])


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

                    <div 
                    style={{backgroundImage: `url(${`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${`${champion.id}`}_0.jpg`})`}} 
                    className='min-h-screen bg-cover'>
                        <div className='grid md:grid-cols-2  bg-gradient-to-r from-black via-transparent to-black min-h-screen'>
                            <div className='pt-10  px-5 md:px-10 container mx-auto'>
            
                                {/* Nombre y titulo */}
                                <ChampionInfo name={ champion.name} title={ champion.title } />
                                
                                
                                {/* Atributos */}
                                <ChampionAttributes
                                id = {champion.id}
                                tags = { champion.tags}
                                info = { champion.info }
                                />
            
                                {/* Habilidades */}
                                <ChampionSpells id={champion.id} passive={ champion.passive } spells={ champion.spells } />

                                {/* Lore */}
                                <p className='font-semibold font-poppins text-sm text-white uppercase mb-1'>LORE</p>
                                <p className='text-gray-300 text-sm font-base font-poppins mb-10'>{champion.lore}</p>

                            </div>
                        </div>
                    </div>
                )
            }
        </Fragment>
    )
}

export default Champion
