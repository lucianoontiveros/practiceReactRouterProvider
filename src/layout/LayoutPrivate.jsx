import { useEffect } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { useUserContext } from "../context/UserContext"

const LayoutPrivate = () => {
    const { user} = useUserContext()

    return (
        <>
            {
                user ? <Outlet /> : <Navigate to="/" />
            }
        </>
    )
}

export default LayoutPrivate

{ /* 

esta es una opción para validar si un usuario tiene acceseo o no
al componenete que estamos mostrando. 
    const navigate = useNavigate()

    useEffect(() => {
        if(!user){
            navigate('/')
        }
    }, [user])


*/ }