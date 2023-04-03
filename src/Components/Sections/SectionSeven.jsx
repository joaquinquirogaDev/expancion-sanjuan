// Styles
import style from './Sections.module.css'

export default function SectionSeven(){
    return (
        <div className={style.section}>
            <p>Las siguientes son las líneas de créditos compatibles con las opciones seleccionadas anteriormente.</p>
            <br />
            <div className={style.sectionSeven__info}>
                <h2>Información del crédito</h2>
                <div className={style.sectionSeven__data}>
                    <div className={style.sectionSeven__data__box}>
                        <p>Plazo:</p>
                        <p>Perdiodo de gracia:</p>
                    </div>
                    <div className={style.sectionSeven__data__box}>
                        <p>Monto máximo:</p>
                        <p>Tasa inicial:</p>
                    </div>
                    <div className={style.sectionSeven__data__box}>
                        <p>Asistencia:</p>
                    </div>
                </div>
                <button className='btn__bordo'>CALCULAR MONTO A PAGAR POR MES</button>
            </div>
            <br /><br />
            <h2>Seleccionar líneas de crédito compatibles</h2>
            <br />
            <select name="" id="">
                <option value="0" selected disabled>Seleccionar líneas de crédito compatible</option>
                <option value="">Certificaciones internacionales</option>
                <option value="">Microemprendimientos</option>
            </select>
        </div>
    )
}