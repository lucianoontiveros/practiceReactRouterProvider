import { useUserContext } from "../context/UserContext"

const Dashboard = () => {
    const { user } = useUserContext();

    return(
        <>
            <h1>Dashboard {user.name}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem quaerat sunt suscipit commodi perspiciatis tempore quas inventore animi, porro deserunt magni dolorum accusamus ipsa quibusdam sequi laudantium culpa tenetur reprehenderit?</p>
        </>
    )
}
export default Dashboard