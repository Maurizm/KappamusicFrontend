/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import appFirebase from '../credenciales'
import {getAuth,signOut} from 'firebase/auth'
const auth = getAuth(appFirebase)

export const Home = ({correoUsuario}) => {
  return (
    <h2>bienvenido usuario {correoUsuario}<button className='btn btn-primary'onClick={()=>signOut(auth)}>Logout</button></h2>
  )
}
export default Home
