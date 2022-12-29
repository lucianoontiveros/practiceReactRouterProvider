import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = ({children}) => { 
    const [ user, setUser] = useState(false)  

    return(
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>        
    )

}

export default UserProvider
export const useUserContext = () => useContext(UserContext)



{/* 
Usercontext viene directamente de reac. Es igual que un hooks

El Js hook es usado cuando necesitamos asociar algo funcional a un componente que se repite en la página. 
De lo contrario si este es único y sabemos que no va a repetirse, es recomendable usar el ID

useState es un Hook que permite añadir el estado de React a un componente de función. useEffect, al usar este hook, 
le estamos indicando a React que el componente tiene que hacer algo después de renderizarse.

Children mos permite pasar datos de los props. Cualquier componente de React tiene esta propiedad.
En este caso nos servira para rendirizar cualquiera de los elementos de cada sección de la app. 

const [ user, setUser] = useState(false)   aquí iniciamos un useState para traer información del usuario. 


Provider es muy parecido a utilizar el context, en donde podemos pasarlos los propms
y que pueden ser modificados por el ususario. 

export const useUserContext = () => useContext(UserContext) creamos este minihook 
para llevarlo a todas los componentes y desestructurarlo. VER Navbar.jsx

Cada vez que usemos createContext nos va a permitir usar el Provider como propiedad. 
*/}