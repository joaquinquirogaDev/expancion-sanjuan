import { useState } from 'react'

// Styles
import style from './Sections.module.css'

// Images
import Micro from '../../assets/images/type/micro.svg'
import Pequeña from '../../assets/images/type/pequeña.svg'
import Mediana from '../../assets/images/type/mediana.svg'
import Grande from '../../assets/images/type/grande.svg'

export default function SectionOne() {

    const [amarillo, setAmarillo] = useState(false)
    const [rojo, setRojo] = useState(false)
    const [naranja, setNaranja] = useState(false)
    const [bordo, setBordo] = useState(false)

    return (
        <div className={style.section}>
            <h2>Selecciona tamaño de la empresa según SePyMe</h2>
            <br />
            <div className={style.sectionOne__cards}>
                <div className={style.sectionOne__card} onClick={() => {setNaranja(!naranja); setAmarillo(false); setRojo(false); setBordo(false)}}>
                    <div className={naranja ? style.sectionOne__card__naranja : style.sectionOne__card__image}>
                        <img className={style.sectionOne__card__img} src={Micro} alt="" />
                    </div>
                    <div className={style.sectionOne__card__title}>
                        <h3>Micro</h3>
                    </div>
                </div>
                <div className={style.sectionOne__card} onClick={() => {setNaranja(false); setAmarillo(!amarillo); setRojo(false); setBordo(false)}}>
                    <div className={amarillo ? style.sectionOne__card__amarillo : style.sectionOne__card__image}>
                        <img className={style.sectionOne__card__img} src={Pequeña} alt="" />
                    </div>
                    <div className={style.sectionOne__card__title}>
                        <h3>Pequeña</h3>
                    </div>
                </div>
                <div className={style.sectionOne__card} onClick={() => {setNaranja(false); setAmarillo(false); setRojo(!rojo); setBordo(false)}}>
                    <div className={rojo ? style.sectionOne__card__rojo : style.sectionOne__card__image}>
                        <img className={style.sectionOne__card__img} src={Mediana} alt="" />
                    </div>
                    <div className={style.sectionOne__card__title}>
                        <h3>Mediana</h3>
                    </div>
                </div>
                <div className={style.sectionOne__card} onClick={() => {setNaranja(false); setAmarillo(false); setRojo(false); setBordo(!bordo)}}>
                    <div className={bordo ? style.sectionOne__card__bordo : style.sectionOne__card__image}>
                        <img className={style.sectionOne__card__img} src={Grande} alt="" />
                    </div>
                    <div className={style.sectionOne__card__title}>
                        <h3>Grande</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}