// Styles
import style from './Sections.module.css'

export default function SectionThree(){
    return (
        <div className={style.section}>
            <h2>Seleccionar sector económico  </h2>
            <br />
            <select name="" id="">
                <option value="0" selected disabled>Seleccionar sector económico </option>
                <option value="">Construcción </option>
                <option value="">Servicios </option>
                <option value="">Industria y Minería </option>
                <option value="">Agropecuario</option>
            </select>
        </div>
    )
}