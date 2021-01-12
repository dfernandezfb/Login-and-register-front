import {
    SUCCESS_REGISTER,
    ERROR_REGISTER,
    SUCCESS_LOGIN,
    ERROR_LOGIN,
    LOGOUT,
    TOKEN,
    ERROR_TOKEN,
    LOADING
} from './../../types/index'


const authReducer = (state, action) => {
    switch (action.type) {
        case SUCCESS_LOGIN:
        case SUCCESS_REGISTER:
            localStorage.setItem('token', action.payload.token)
            return ({
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                loading: false
            });
        case ERROR_REGISTER:
            return ({
                ...state,
                errorMsg: action.payload,
            });
        case ERROR_LOGIN:
            return ({
                ...state,
                errorMsg: action.payload,
            });
        case LOGOUT:
            localStorage.removeItem('token')
            return ({
                ...state,
                user: null,
                token: null,
                loading: false
            });
        case TOKEN:
            return ({
                ...state,
                user: action.payload.user,
                loading: false
            });
        case ERROR_TOKEN:
            return ({
                ...state,
                errorMsg: action.payload,
                user: null,
            })
        case LOADING:
            return ({
                ...state,
                loading: true
            })
        default: return state;
    }
}

export default authReducer
