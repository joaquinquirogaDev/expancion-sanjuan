// Styles
import style from './Sections.module.css'

export default function SectionTwo(){
    return (
        <div className={style.section}>
            <h2>Selecciona que tipo de empresa </h2>
            <br />
            <select name="" id="">
                <option value="0" selected disabled>Seleccionar tipo de empresa </option>
                <option value="">Explotación unipersonal </option>
                <option value="">Persona Jurídica </option>
            </select>
        </div>
    )
}