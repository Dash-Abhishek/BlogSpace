import Cookies from 'universal-cookie';
import {
    AUTHENTICATING_USER,
    AUTH_SUCCESS,
    REGISTER_API_ERROR,
    LOGIN_API_ERROR,
    TOGGLE_AUTH_MODAL,
    AUTHENTICATION_FAIL
} from './actiontypes';
import bridge from '../../utils/CommBridge/bridge';
 
const cookies = new Cookies();

export const login = e => async dispatch => {
    try {
        e.preventDefault();
        dispatch({
            type: AUTHENTICATING_USER
        });
        const email = e.target.email.value;
        const password = e.target.password.value;
        const { data } = await bridge.instance.post(`/login`, {
            email, password
        });
        cookies.set('token', data.token);
        bridge.setToken(data.token);
        dispatch({
            type: AUTH_SUCCESS,
            userData: { ...data }
        });
    } catch(err) {
        dispatch({
            type: LOGIN_API_ERROR,
            errorMessage: err.message
        });
    }
}

export const register = e => async dispatch => {
    try {
        e.preventDefault();
        dispatch({
            type: AUTHENTICATING_USER
        });
        const email = e.target.email.value;
        const phoneNum = e.target.phoneNum.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const reqBody = {email, password, name, phoneNum};
        const { data } = await bridge.instance.post(`/register`, reqBody);
        cookies.set('token', data.token);
        bridge.setToken(data.token);
        dispatch({
            type: AUTH_SUCCESS,
            userData: { ...data }
        });
    } catch(err) {
        dispatch({
            type: REGISTER_API_ERROR,
            errorMessage: err.message
        });
    }
}

const getToken = () => {
    if(bridge.token) {
        return bridge.token;
    } else {
        const token = cookies.get('token');
        token && bridge.setToken(token);
        return token;
    }
}

export const authenticate = () => async dispatch => {
    if(getToken()) {
        try {
            dispatch({
                type: AUTHENTICATING_USER
            });
            const { data } = await bridge.instance.get(`/authenticate`);
            bridge.setToken(data.token);
            dispatch({
                type: AUTH_SUCCESS,
                userData: { ...data }
            });
        } catch(err) {
            dispatch({
                type: AUTHENTICATION_FAIL,
                errorMessage: err.message
            });
        }
    } else {
        dispatch({
            type: AUTHENTICATION_FAIL,
            errorMessage: 'Authentication token not found'
        });
    }
}

export const toggleAuthModal = () => ({
    type: TOGGLE_AUTH_MODAL
});
