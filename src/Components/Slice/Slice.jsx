import style from '../Slice/Slice.module.css'

export default function Slice({setStep, step, array}){
    return array.map(item => (
        <div className={style.Slices} >{item}</div>
    ))
}