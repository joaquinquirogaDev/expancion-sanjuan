import style from './Nav.module.css'

import Logo from '../../assets/images/logos/logo.svg'

export default function Nav() {
    return (
        <div className={style.nav}>
            <img src={Logo} alt="" />
        </div>
    )
}