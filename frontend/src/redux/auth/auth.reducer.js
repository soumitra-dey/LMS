import { LOGIN, LOGOUT } from "./auth.actionTypes";

if (typeof window !== 'undefined') {
    var item = localStorage.getItem('lms')
}

const initState = {
    isAuth: !!item,
    token: item,
}

export const authReducer = (state = initState, action) => {

    switch (action.type) {
        case LOGIN:
            localStorage.setItem('lms', action.payload)
            return {
                ...state,
                isAuth: true,
                token: action.payload
            }
        case LOGOUT:
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