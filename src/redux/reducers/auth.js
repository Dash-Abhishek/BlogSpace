import {
    AUTHENTICATING_USER,
    AUTH_SUCCESS,
    REGISTER_API_ERROR,
    LOGIN_API_ERROR,
    AUTHENTICATION_FAIL,
    TOGGLE_AUTH_MODAL
} from '../actions/actiontypes';

export default (state = {}, action) => {
    switch(action.type) {
        case AUTHENTICATING_USER:
            return {
                ...state,
                loading: true,
                isLoggedIn: false,
                userData: {},
                loginError: null,
                registerError: null,
                authenticationFailed: false
            };
        case AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
                authenticationFailed: false,
                userData: {
                    ...action.userData
                },
                showAuthModal: false
            };
        case AUTHENTICATION_FAIL:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                userData: {},
                authenticationFailed: true
            };
        case REGISTER_API_ERROR:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                userData: {},
                registerError: action.errorMessage
            };
        case LOGIN_API_ERROR:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                userData: {},
                loginError: action.errorMessage
            };
        case TOGGLE_AUTH_MODAL:
            return {
                ...state,
                showAuthModal: !state.showAuthModal
            };
        default:
            return {
                ...state
            };
    }
}