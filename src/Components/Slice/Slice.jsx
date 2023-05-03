import style from '../Slice/Slice.module.css'

export default function Slice({setStep, step, array}){
    
    return (
        <>
            <div className={step <= 0 ? style.SlicesWhite : style.Slices}></div>
            <div className={step <= 1 ? style.SlicesWhite : style.Slices}></div>
            <div className={step <= 2 ? style.SlicesWhite : style.Slices}></div>
            <div className={step <= 3 ? style.SlicesWhite : style.Slices}></div>
            <div className={step <= 4 ? style.SlicesWhite : style.Slices}></div>
            <div className={step <= 5 ? style.SlicesWhite : style.Slices}></div>
            <div className={step <= 6 ? style.SlicesWhite : style.Slices}></div>
            <div className={step <= 7 ? style.SlicesWhite : style.Slices}></div>
        </>
    )
}