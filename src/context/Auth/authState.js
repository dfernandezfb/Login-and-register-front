import { useReducer } from 'react'
import AuthContext from './authContext'
import authReducer from './authReducer'
import clientAxios from './../../config/axios'
import authToken from './../../config/token'
import {
    SUCCESS_REGISTER,
    ERROR_REGISTER
} from './../../types/index'

const authState = ({ children }) => {
    const initialState = {
        token: localStorage.getItem('token') || null,
        user: {},
        auth: false, 
        errorMsg: '',
        successMsg: ''
    }
    const [state, dispatch] = useReducer(authReducer, initialState)
    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                user: state.user,
                auth: state.auth,
                errorMsg: state.errorMsg,
                successMsg: state.successMsg
            }}>
            {children}
        </AuthContext.Provider>
    )
}


export default authState
