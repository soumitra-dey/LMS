export enum AuthTypes {
    LOGIN = 'auth/login',
    LOGOUT = 'auth/logout'
}


interface LoginAction { type: AuthTypes.LOGIN, payload: string }
interface Logoutction { type: AuthTypes.LOGOUT }

export type authType = LoginAction | Logoutction;