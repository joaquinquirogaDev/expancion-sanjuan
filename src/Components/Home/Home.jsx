import { useNavigate } from "react-router"

export default function Home(){
    const navigate = useNavigate()
    return   <>
    <h1>Home</h1>
    <button onClick={() => navigate('/login')}>Admin</button>
    <button onClick={() => navigate('/login')}>Ciudadano</button>
   </>
}

