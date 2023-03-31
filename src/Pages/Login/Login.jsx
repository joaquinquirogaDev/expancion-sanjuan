import { useNavigate } from "react-router"
import { useHookState } from "../../Hooks/useHookState"

// Styles
import style from './Login.module.css'

// Images
import Hero from '../../assets/images/hero.svg'

// Components
import LoginModal from "../../Components/Modals/Login/Login"
import Register from "../../Components/Modals/Register/Register"

import { HiArrowNarrowLeft } from 'react-icons/hi'

export default function Login() {
    const navigate = useNavigate()
    const use = useHookState()
    console.log(use);
    return (
        <div className="view">
            <div className={style.login__container}>
                <div className={style.login__left}>
                    <div>
                        <div className={style.login__left__text}>
                            <h3>Bienvenido/a {use.state}</h3>
                            <h1>EXPANSIÓN SAN JUAN</h1>
                            <h2>Prestamos activos para que puedas realizar tus proyectos de invertir en San Juan </h2>
                        </div>
                        <br />
                        <div className={style.login__left__btns}>
                            <LoginModal />
                            <Register />
                        </div>
                        <br /><br />
                        <div className={style.login__left__back}>
                            <button
                                className="btn__back"
                                onClick={() => {
                                    use.setUser('')
                                    navigate(-1)
                                }}> < HiArrowNarrowLeft /> Volver</button>
                        </div>
                    </div>
                </div>
                <div className={style.login__right}>
                    <img src={Hero} alt="" />
                </div>
            </div>
        </div>
    )
}