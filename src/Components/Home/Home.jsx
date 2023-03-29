import { useNavigate } from "react-router"
import { useHookState } from "../../Hooks/useHookState"

export default function Home(){
    const navigate = useNavigate()
    const use = useHookState()
    console.log(use);
    return   <>
    <h1>Home</h1>
    <button onClick={() => {
        use.setUser('Admin')
        navigate('/login')
        }}>Admin</button>
    <button onClick={() => {
        use.setUser('ciudadano')
        navigate('/login')
        }}>Ciudadano</button>
   </>
}

