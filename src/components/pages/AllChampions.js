import React, { useEffect, useState } from 'react'

const AllChampions = () => {

    const [champions, setChampions] = useState([])

    console.log('me ejecuté el componente mainapp')
    const getData = async() => {
        const respChampion = await fetch('http://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/champion.json')
        const { data }= await respChampion.json()
        setChampions(data)
    }

    useEffect(() => {
        getData();
    }, [])



    return (
        <section className='px-5 container mx-auto'>
            <div className='text-center font-poppins'>
                <p className='text-2xl font-medium text-gray-800 uppercase mb-2'>Elige tu</p>
                <p className='text-5xl font-semibold uppercase text-gray-900 mb-5'>Campeón</p>
                <p className='text-gray-800 text-sm'>Con más de 140 campeones, encontrarás el que se ajuste perfectamente a tu estilo de juego. Domina a uno o domínalos a todos.</p>
            </div>
        </section>
    )
}

export default AllChampions
