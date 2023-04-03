// Styles
import style from './Sections.module.css'

export default function SectionSix(){
    return (
        <div className={style.section}>
            <h2>Seleccionar de que manera te enteraste de expansión San Juan </h2>
            <br />
            <select name="" id="">
                <option value="0" selected disabled>Seleccionar de que manera te enteraste de expansión San Juan </option>
                <option value="">Capital de trabajo</option>
                <option value="">Inversiones</option>
            </select>
        </div>
    )
}