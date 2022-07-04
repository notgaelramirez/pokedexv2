import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './Login'

const ProtectedRoutes = ({isLogged, setLogged}) => {

  if (isLogged == true){
    return <Outlet />
  }else{
    return <Navigate to='/login'/>
  }

}

export default ProtectedRoutes