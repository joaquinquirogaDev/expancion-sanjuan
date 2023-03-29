import { useNavigate } from "react-router"
import { useHookState } from "../../Hooks/useHookState"

export default function Login() {
    const navigate = useNavigate()
    const use = useHookState()
    console.log(use);
    return (
        <>
        <h1>Bienvenido {use.state}</h1>
            <input type="text" placeholder="dni" />
            <input type="text" placeholder="password" />
            <button>Acceder</button>
            <button onClick={() => {
                use.setUser('')
                navigate(-1)
                }}>Volver</button>
        </>
    )
}