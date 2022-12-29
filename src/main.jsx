import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { router } from '../src/router'
import { RouterProvider } from 'react-router-dom'
import UserProvider from './context/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)

{/* 

RouterProvider nos va a permitir pasar props con los datos incluso si estos 
datos necesita de una validacion de usuario, esto lo hace mas sencillo y practico
de usar cuando tenemos rutas protegidas 

UserProvider lo englobamos a toda nuestro aplicativo porque habrá ciertas componentes o
elementos que necesitará acceso, algún tipo de acreditacion. 


*/}