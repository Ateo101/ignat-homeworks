import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {AppStoreType} from "../h10/bll/store";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC, themeType} from "./bll/themeReducer";

const themes = ['ateo', 'dark', 'red', 'some'];

function HW12() {
    // const theme = 'some'; // useSelector
    const theme = useSelector<AppStoreType, themeType> (state => state.theme); // useSelector

    // useDispatch, onChangeCallback
    const dispatch = useDispatch();
    const onThemeChange = (value: string) => {
        dispatch(changeThemeAC(value))
    }

    return (
        <div className={s[theme.currentTheme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                --- homework 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div><SuperSelect options={themes} onChangeOption={onThemeChange}/></div>

            <hr/>
        </div>
    );
}

export default HW12;
