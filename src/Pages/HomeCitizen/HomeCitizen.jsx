import { useState } from 'react'

// Style
import style from './HomeCitizen.module.css'

// Components
import SectionOne from '../../Components/Sections/SectionOne'
import SectionTwo from '../../Components/Sections/SectionTwo'
import SectionThree from '../../Components/Sections/SectionThree'
import SectionFour from '../../Components/Sections/SectionFour'
import SectionFive from '../../Components/Sections/SectionFive'
import SectionSix from '../../Components/Sections/SectionSix'
import SectionSeven from '../../Components/Sections/SectionSeven'
import SectionEight from '../../Components/Sections/SectionEight'
import Turn from '../../Components/Modals/Turn/Turn'
import Slice from '../../Components/Slice/Slice'


export default function HomeCitizen() {

    const [step, useStep] = useState(1)
    const [array, setArray] = useState([{item: true, id: 1},{item: false, id: 2},{item: false, id: 3},{item: false, id: 4},{item: false, id: 5},{item: false, id: 6}])

    return (
        <div className={style.homeCitizen}>
            <div className={style.homeCitizen__text}>
                <h2>¡Hola user!</h2>
                <h3>¿Necesitas un crédito?</h3>
                <p>¡Responde el proximo cuestionaro y te brindaremos la mejor opción para vos y tu empresa!</p>
            </div>
            <br />
            {step == 1
                ? <section ><SectionOne/></section>
                : step == 2
                    ? <section><SectionTwo /></section>
                    : step == 3
                        ? <section><SectionThree /></section>
                        : step == 4
                            ? <section><SectionFour /></section>
                            : step == 5
                                ? <section><SectionFive /></section>
                                : step == 6
                                    ? <section><SectionSix /></section>
                                    : step == 7
                                        ? <section><SectionSeven /></section>
                                        : step == 8
                                            ? <section><SectionEight /></section>
                                            : <></>
            }
            <br />
            <br />
            <div className={style.homeCitizen_slice}>
               <Slice setStep={useStep} step={step} array={array}/>
            </div>
            <br />
            <div className={style.homeCitizen__btns}>
                {step == 1
                    ? <button className='btn__gris'>ATRAS</button>
                    : <button onClick={() => {
                        useStep(step - 1)
                    }} className='btn__bordo'>ATRAS</button>
                }
                {
                    step == 8
                    ? <Turn />
                    : <button onClick={() => {
                        useStep(step + 1)
                    }} className='btn__bordo'>SIGUIENTE</button>
                }
            </div>
      
        </div>
    )
}