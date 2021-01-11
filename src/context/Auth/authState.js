import { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from './authContext'
import authReducer from './authReducer'
import clientAxios from './../../config/axios'
import authToken from './../../config/token'
import {
    SUCCESS_REGISTER,
    ERROR_REGISTER,
    SUCCESS_LOGIN,
    LOGOUT,
    ERROR_LOGIN,
    TOKEN,
    ERROR_TOKEN
} from './../../types/index'

const AuthState = ({ children }) => {
    const initialState = {
        token: localStorage.getItem('token') || null,
        user: {},
        auth: false,
        errorMsg: ''
    }
    const history = useHistory();
    const [state, dispatch] = useReducer(authReducer, initialState)

    const login = async (data) => {
        try {
            const response = await clientAxios.post('/auth', data);
            dispatch(
                {
                    type: SUCCESS_LOGIN,
                    payload: response.data
                }
            )
            history.push('/users')
        }
        catch (error) {
            dispatch({
                type: ERROR_LOGIN,
                payload: error.response.data.msg
            })
        }

    }
    const authUser = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            authToken(token);
        }
        try {
            const response = await clientAxios.get('/auth')
            console.log(response);
            dispatch(
                {
                    type: TOKEN,
                    payload: response.data
                }
                )
                console.log(state.auth);
        }
        catch (error) {
            dispatch(
                {
                    type: ERROR_TOKEN,
                    payload: error.response.data.msg
                }
            )
        }
    }
    const register = async (data) => {
        try {
            const response = await clientAxios.post('/users', data);
            dispatch(
                {
                    type: SUCCESS_REGISTER,
                    payload: response.data
                }
            )
            history.push('/users');
        }
        catch (error) {
            dispatch(
                {
                    type: ERROR_REGISTER,
                    payload: error.response.data.msg
                }
            )
        }
    }
    const logout = () => {
        dispatch(
            {
                type: LOGOUT
            }
        )
        history.push('/') //en duda si hace falta, al actualizar re renderiza (probar)
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                user: state.user,
                auth: state.auth,
                errorMsg: state.errorMsg,
                login,
                register,
                logout,
                authUser
            }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthState
