import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType, action: tsarType): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === 'up'
                ? [...state].sort((a, b) => a.name < b.name ? -1 : 1)
                : [...state].sort((a, b) => a.name > b.name ? -1 : 1)
        }
        case 'check': {
            return state.filter(s=>s.age >= action.age)
        }
        default: return state
    }
}
export type tsarType = SortACType | CheckACType
export type SortACType = ReturnType<typeof SortAC>
export type CheckACType = ReturnType<typeof CheckAC>

export const SortAC = (payload: string) => {
    return {
        type: 'sort', payload,
    } as const
}
export const CheckAC = (age: number) => {
    return {
        type: 'check', age,
    } as const
}