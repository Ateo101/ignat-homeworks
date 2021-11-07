import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {TwoThumbInputRange} from "react-two-thumb-input-range";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value1: number) => {
        setValue1(value1)
    }
    const onDoubleChangeRange = (value: [number, number]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            --- homework 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={onChangeRange}
                            value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                {/*<SuperDoubleRange min={0} max={100} step={10} disable={false}
                                  onChangeRange={onDoubleChangeRange}
                    // сделать так чтоб value1 и value2 изменялось
                />*/}
                <TwoThumbInputRange onChange={onDoubleChangeRange}
                                    values={[value1 <= value2 ? value1 : value2,
                                        value2 >= value1 ? value2 : value1]}
                                    min={0} max={100}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
