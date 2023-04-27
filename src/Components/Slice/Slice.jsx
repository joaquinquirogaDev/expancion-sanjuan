import style from '../Slice/Slice.module.css'

export default function Slice({setStep, step, array}){
    return array?.map(item => (
        <div className={ item?.item ? style.Slices : style.SlicesWhite }>{item?.id}</div>
    ))
}