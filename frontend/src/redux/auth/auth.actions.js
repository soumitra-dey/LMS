import { url } from '@/components/url';
import axios from 'axios'
import { Dispatch } from 'redux';
import { LOGIN } from './auth.actionTypes';

export const userSignup = async (data) => {
    try {
        await axios.post(url + '/auth/signup', data);
        return true
    } catch (e) {
        return false
    }
}

export const userLogin = async (data, dispatch) => {
    try {
        let res = await axios.post(url + '/auth/login', data);
        console.log(res.data);
        dispatch({ type: LOGIN, payload: res.data.token })
        return true
    } catch (e) {
        return false
    }
}