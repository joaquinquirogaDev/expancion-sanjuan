import style from './Footer.module.css'

import Line from '../../assets/images/line.svg'
import LogoCompleto from '../../assets/images/logos/logoCompleto.svg'

export default function Footer(){
    return (
        <div className={style.footer}>
            <img src={Line} alt="Line" />
            <div className={style.footer__logo}>
                <img src={LogoCompleto} alt="Logo Ministerio de Produccon" />
            </div>
        </div>
    )
}