import {
    SUCCESS_REGISTER,
    ERROR_REGISTER,
    SUCCESS_LOGIN,
    ERROR_LOGIN,
    LOGOUT
} from './../../types/index'


const authReducer = (state, action) => {
    switch (action.type) {
        case SUCCESS_REGISTER:
            localStorage.setItem('token', action.payload.token)
            return ({
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                auth: true,
                successMsg: 'El usuario se registro correctamente'
            });
        case ERROR_REGISTER:
            return ({
                ...state,
                errorMsg: 'Hubo un problema con el registro'
            });
        case SUCCESS_LOGIN:
            localStorage.setItem('token', action.payload.token)
            return ({
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                auth: true,
                successMsg: 'El usuario se logueo correctamente'
            });
        case ERROR_LOGIN:
            return ({
                ...state,
                auth: false,
                errorMsg: 'Hubo un problema con el logueo'
            });
        case LOGOUT:
            localStorage.removeItem('token')
            return ({
                auth: false,
                user: {},

            })
        default: return state;
    }
}

export default authReducer
