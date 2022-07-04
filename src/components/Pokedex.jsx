import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

const Pokedex = ({userName}) => {

  let [data, setData] = useState()

  const getData = () =>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res => setData(res.data.results))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])
  

  console.log(userName)
  return (
    <div>
      <nav className='nav'>
        <div className='title-zone'>
          <h1 className='title'>Bienvenidx {userName}!</h1>
        </div>
      </nav>

      {
        data?.map(pokemon => <PokemonCard pokemon={pokemon}/>)
      }
    </div>
  )
}

export default Pokedex