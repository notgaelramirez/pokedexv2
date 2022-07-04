import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Error404 from './components/Error404'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'

function App() {

  let [userName, setUserName] = useState()
  let [isLogged, setLogged] = useState(false)

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login setLogged={setLogged} setUserName={setUserName}/>}/>

        <Route element={<ProtectedRoutes isLogged={isLogged} setLogged={setLogged} />}>
          <Route path='/' element={<Navigate to='/pokedex'/>}/>
          <Route path='/pokedex' element={<Pokedex userName={userName}/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
