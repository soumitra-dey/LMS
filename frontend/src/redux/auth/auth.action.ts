import { url } from '@/components/url';
import axios from 'axios'
import { Dispatch } from 'redux';
import { AuthSelectorType } from '../store';
import { authType, AuthTypes } from './auth.actionTypes';


interface loginDataType {
    email: string,
    password: string
}

interface signupDataType extends loginDataType { username: string }

export const userSignup = async (data: signupDataType) => {
    try {
        await axios.post(url + '/auth/signup', data);
        return true
    } catch (e) {
        return false
    }
}


export const userLogin = async (dispatch: Dispatch<authType>, data: loginDataType) => {
    try {
        let res = await axios.post(url + '/auth/login', data);
        console.log(res.data)
        dispatch({ type: AuthTypes.LOGIN, payload: res.data.token })
        return true
    } catch (e) {
        return false
    }
}



export const userLogout = () => (dispatch: Dispatch<authType>) => {
    return {
        type: AuthTypes.LOGOUT
    }
}