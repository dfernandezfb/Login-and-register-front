import {
    SUCCESS_REGISTER,
    ERROR_REGISTER,
    SUCCESS_LOGIN,
    ERROR_LOGIN,
    LOGOUT,
    TOKEN,
    ERROR_TOKEN
} from './../../types/index'


const authReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case SUCCESS_LOGIN:
        case SUCCESS_REGISTER:
            localStorage.setItem('token', action.payload.token)
            return ({
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                auth: true
            });
        case ERROR_REGISTER:
            return ({
                ...state,
                errorMsg: action.payload
            });
        case ERROR_LOGIN:
            return ({
                ...state,
                errorMsg: action.payload
            });
        case LOGOUT:
            localStorage.removeItem('token')
            return ({
                ...state,
                auth: false,
                user: {}
            });
        case TOKEN:
            console.log(action.payload);
            return ({
                ...state,
                user: action.payload.user,
                auth: true
            });
        case ERROR_TOKEN:
            return ({
                ...state,
                errorMsg: action.payload,
                auth:false
            })
        default: return state;
    }
}

export default authReducer
