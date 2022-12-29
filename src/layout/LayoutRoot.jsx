import { Outlet } from "react-router-dom"
import Navbar from "../componentes/Navbar"

const LayoutRoot = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <div>Aqui va el footer</div>
        </>
    )
}
export default LayoutRoot