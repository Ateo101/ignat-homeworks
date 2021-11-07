export type initStateType = typeof initState

const initState = {
    loading: false
}

export const loadingReducer = (state: initStateType = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: action.isLoading}
        }
        default: return state
    }
}

type loadingACReturnType = {
    type: 'LOADING', isLoading: boolean,
}
type loadingACType = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean):loadingACReturnType => {return {type: 'LOADING', isLoading,} as const} // fix any
