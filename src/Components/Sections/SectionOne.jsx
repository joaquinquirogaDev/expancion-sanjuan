// Styles
import style from './Sections.module.css'

// Images
import Micro from '../../assets/images/type/micro.svg'
import Pequeña from '../../assets/images/type/pequeña.svg'
import Mediana from '../../assets/images/type/mediana.svg'
import Grande from '../../assets/images/type/grande.svg'

export default function SectionOne() {
    return (
        <div className={style.section}>
            <h2>Selecciona tamaño de la empresa según SePyMe</h2>
            <br />
            <div className={style.sectionOne__cards}>
                <div className={style.sectionOne__card}>
                    <div className={style.sectionOne__card__image}>
                        <img src={Micro} alt="" />
                    </div>
                    <div className={style.sectionOne__card__title}>
                        <h3>Micro</h3>
                    </div>
                </div>
                <div className={style.sectionOne__card}>
                    <div className={style.sectionOne__card__image}>
                        <img src={Pequeña} alt="" />
                    </div>
                    <div className={style.sectionOne__card__title}>
                        <h3>Pequeña</h3>
                    </div>
                </div>
                <div className={style.sectionOne__card}>
                    <div className={style.sectionOne__card__image}>
                        <img src={Mediana} alt="" />
                    </div>
                    <div className={style.sectionOne__card__title}>
                        <h3>Mediana</h3>
                    </div>
                </div>
                <div className={style.sectionOne__card}>
                    <div className={style.sectionOne__card__image}>
                        <img src={Grande} alt="" />
                    </div>
                    <div className={style.sectionOne__card__title}>
                        <h3>Grande</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}