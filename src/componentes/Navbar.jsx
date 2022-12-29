import { NavLink } from "react-router-dom"
import { useUserContext } from "../context/UserContext"
const Navbar = () => {
    const { user, setUser } = useUserContext()  

    return(
        <> 
            <nav>
                <NavLink to="/">🏠🏠Home🏠🏠</NavLink>
                {
                    user && (
                        <>
                            <NavLink to="/dashboard">📉📉Dashboard📉📉</NavLink>
                            <button onClick={ () => setUser(false)}>Logout</button>
                        </>
                    )
                }
            </nav>
        </>
    )
}

export default Navbar

{/*
En este archivo treemos a useUserContext que es un minihook que trae la 
información del usuario, como ser si esta logueado o no. Al importarlo
desectructuramos para acceder a los datos  { user, setUser } y luego 
validamos si el user es true con:
    "user && (
    <NavLink to="/dashboard">📉📉Dashboard📉📉</NavLink>
    )"




*/} 