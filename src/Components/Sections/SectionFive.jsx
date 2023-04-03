// Styles
import style from './Sections.module.css'

export default function SectionFive() {
     return (
          <div className={style.section}>
               <h2>Seleccionar necesidad de financiamiento</h2>
               <br />
               <select name="" id="">
                    <option value="0" selected disabled>Seleccionar necesidad financiera</option>
                    <option value="">Capital de trabajo</option>
                    <option value="">Inversiones</option>
               </select>
          </div>
     )
}