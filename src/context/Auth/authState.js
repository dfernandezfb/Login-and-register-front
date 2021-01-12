import { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from './authContext'
import authReducer from './authReducer'
import clientAxios from '../../config/Axios'
import authToken from './../../config/token'
import {
    SUCCESS_REGISTER,
    ERROR_REGISTER,
    SUCCESS_LOGIN,
    LOGOUT,
    ERROR_LOGIN,
    TOKEN,
    ERROR_TOKEN,
    LOADING
} from './../../types/index'

const AuthState = ({ children }) => {
    const initialState = {
        token: localStorage.getItem('token') || null,
        user: null,
        loading: true,
        errorMsg: ''
    }
    const history = useHistory();
    const [state, dispatch] = useReducer(authReducer, initialState)

    const isLoading = () => {
        dispatch({
            type: LOADING
        })
    }
    const login = async (data) => {
        try {
            const response = await clientAxios.post('/auth', data);
            dispatch(
                {
                    type: SUCCESS_LOGIN,
                    payload: response.data
                }
            )
            setTimeout(() => {
                isLoading()
            }, 2000);
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
        authToken(token);
        try {
            const response = await clientAxios.get('/auth')
            dispatch(
                {
                    type: TOKEN,
                    payload: response.data
                }
            )
            setTimeout(() => {
                isLoading()
            }, 2000);
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
            setTimeout(() => {
                isLoading()
            }, 2000);
            history.push('/users')
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
        setTimeout(() => {
            isLoading()
        }, 2000);
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                user: state.user,
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
