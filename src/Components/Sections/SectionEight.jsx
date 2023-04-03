// Styles
import style from './Sections.module.css'

export default function SectionSix() {
     return (
          <div className={style.section}>
               <h2>Por ultimo selecciona una fecha y hora para solicitar un turno</h2>
               <br />
               <div className={style.sectionEight__inputs}>
                    <input type="date" />
                    <input type="time" />
               </div>
          </div>
     )
}