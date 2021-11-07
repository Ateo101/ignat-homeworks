import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from "./bll/loadingReducer";

function HW10() {
    const loading = useSelector<AppStoreType, initStateType> (state => state.loading)
    const dispatch = useDispatch();

    const setLoading = () => {
        dispatch(loadingAC(true))
        window.setTimeout(()=>dispatch(loadingAC(false)), 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            --- homework 10

            {/*should work (должно работать)*/}
            {loading.loading
                ? (
                    <div>
                        <img width={'70px'}
                             src={'https://cutewallpaper.org/21/loading-gif-transparent-background/PolyRNN-Demo.gif'}/>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
