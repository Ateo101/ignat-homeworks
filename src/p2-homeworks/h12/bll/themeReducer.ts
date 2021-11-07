export type themeType = {
    currentTheme: string
}
const initState = {
    currentTheme: 'ateo'
};

export const themeReducer = (state:themeType = initState, action: changeThemeACType): themeType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, currentTheme: action.theme};
        }
        default: return state;
    }
};

type changeThemeACReturnType = {
    type: "CHANGE-THEME", theme: string
}
type changeThemeACType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme:string): changeThemeACReturnType =>
{ return { type: "CHANGE-THEME", theme} as const};