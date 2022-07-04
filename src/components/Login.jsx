import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import pokedexImg from '/src/img/logo.png'

const Login = ({setLogged, setUserName}) => {

  const navigate = useNavigate()


  const onSubmit = e =>{
    e.preventDefault()
    setUserName(e.target.firstChild.value)
    setLogged(true)
    navigate('/')
  }
  
  return (
    <article className='login'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <section className='img-login'>
        <div>
          <img className='pokeball' src={pokedexImg} alt="" />
        </div>
      </section>

      <section className='text-login'>
        <div>
          <h1 className='login-h1'>
            pokedex
          </h1>
        </div>

        <div>
          <p className='login-p'>
            ¡Bienvenido entrenador!
          </p>
        </div>

        <div>
          <p>
            Escribe tu nombre para continuar:
          </p>
        </div>

        <form onSubmit={onSubmit} action="">
          <input
          className='input-login'
          type="text"
          placeholder='Nombre'
           />
           <button className='btn-login'>
            Continuar
           </button>
        </form>
      </section>
    </article>
  )
}

export default Login