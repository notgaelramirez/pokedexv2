import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PokemonCard = ({pokemon}) => {

  let [info, setInfo] = useState()

  const getInfo = () =>{
    axios.get(pokemon.url)
    .then(res => setInfo(res.data))
  }

  useEffect(() => {
    getInfo()
  }, [])
  


  return (
    <div className='card'>
      {pokemon.name}
      <img src={info?.sprites.other['official-artwork'].front_default} alt="" />
    </div>
  )
  
}

export default PokemonCard