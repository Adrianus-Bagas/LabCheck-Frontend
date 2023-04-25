import { IS_LOADING, LOGIN, LOGOUT } from '../constants/ActionTypes';

export const LoginAction = (token) => {
    return {
        type: LOGIN,
        payload: token
    };
};

export const LoadingAction = (isLoading) => {
    return {
        type: IS_LOADING,
        payload: isLoading
    };
};

export const LogoutAction = () => {
    localStorage.clear();
    return {
        type: LOGOUT
    };
};