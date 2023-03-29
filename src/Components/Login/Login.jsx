import { useNavigate } from "react-router"

export default function Login() {
    const navigate = useNavigate()

    return (
        <>
            <input type="text" placeholder="dni" />
            <input type="text" placeholder="password" />
            <button>Acceder</button>
            <button onClick={() => navigate(-1)}>Volver</button>
        </>
    )
}