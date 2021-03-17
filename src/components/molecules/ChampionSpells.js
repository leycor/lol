import React, { useEffect, useState } from 'react'

const ChampionSpells = ({passive, spells, id}) => {

    const [championSpell, setChampionSpell] = useState({ name: '', description:''})

    const handleChangeSpell = (e) => {
        
        const idChampion = e.currentTarget.name
        const championSpellData = spells.find(({id})=> id === idChampion )
        setChampionSpell( championSpellData )
    }

    useEffect(() => {

        setChampionSpell(spells[0])
    }, [spells])

    return(
        <div className='flex flex-col mb-4'>

            {/* Pasive */}
            <div className='flex Pasive'>
                {/* <div style={{ backgroundImage: `url(${`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/passive/${`${passive.image.full}`}`})`}} className='mr-5 w-10 h-10 bg-no-repeat bg-cover bg-center mb-3'></div> */}
                <img 
                src={`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/passive/${passive.image.full}`}
                alt={passive.name}
                className='mr-4 w-20 h-20 object-cover'/>
                <div>
                    <p className='font-semibold font-poppins text-sm text-white uppercase mb-1'>{passive.name}</p>
                    <p className='font-base font-poppins text-sm text-gray-300 mb-8'>{passive.description}</p>
                </div>
            </div>


            {/* Spells */}
            <div className='flex flex-col'>
                <div className='mb-5'>
                    {
                        spells.map(({id, name, description, active })=>

                            <button key={id}
                            onClick={ handleChangeSpell }
                            style={{ backgroundImage: `url(${`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/spell/${`${id}`}.png`})`}} className='mr-5 w-10 h-10 bg-cover bg-center'
                            name={id}>
                            </button>

                        )
                    }

                </div>
                <p className='font-semibold font-poppins text-sm text-white uppercase mb-1'>{championSpell.name}</p>
                <p className='font-base font-poppins text-sm text-gray-300 mb-12'>{championSpell.description}</p>
            </div>

        </div>
    );
}

export default ChampionSpells