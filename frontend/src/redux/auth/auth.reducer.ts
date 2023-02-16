import { authType, AuthTypes } from "./auth.actionTypes";

var item;

if (typeof window !== 'undefined') {
    item = localStorage.getItem('lms');
}

const initState = {
    isAuth: !!item,
    token: item || "",
}

export type authStateType = { isAuth: boolean, token: string }


export const authReducer = (state: authStateType = initState, action: authType) => {

    switch (action.type) {
        case AuthTypes.LOGIN:
            localStorage.setItem('lms', action.payload)
            return {
                ...state,
                isAuth: true,
                token: action.payload
            }
        case AuthTypes.LOGOUT:
            localStorage.removeItem('lms')
            return {
                ...state,
                isAuth: false,
                token: ''
            }
        default:
            return state;
    }

}