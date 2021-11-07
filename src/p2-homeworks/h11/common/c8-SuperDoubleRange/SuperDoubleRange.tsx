import React, {ChangeEvent} from 'react'
import s from "../c7-SuperRange/SuperRange.module.css";
// import "../c8-SuperDoubleRange/SuperDoubleRange"

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min: number, max:number, step:number, disable:boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,

        min, max, step, disable, ...restProps
    }
) => {

    /*const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }*/

    // const finalRangeClassName = `${s.range} ${className ? className : ''}`

    // сделать самому, можно подключать библиотеки



    return (
        <>
            {/*<div>
                <span id={'range1'}>0</span>
                <span> - </span>
                <span id={'range2'}>100</span>
            </div>*/}
            <input
                id={'lower'}
                type={'range'}
                min={min}
                max={max}
                step={step}
                {...restProps}
            />
            <input
                id={'upper'}
                type={'range'}
                min={min}
                max={max}
                step={step}
                {...restProps}
            />
        </>
    )
}

export default SuperDoubleRange
