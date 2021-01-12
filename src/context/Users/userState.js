import UserContext from './userContext'
import { useReducer } from 'react'
import userReducer from './userReducer'
import clientAxios from '../../config/Axios'
import {
    GETUSER,
    GETUSERS,
    EDITUSER,
    REQERROR
} from '../../types/index'

const UserState = ({ children }) => {
    const initialState = {
        userSelected:{
            name:'',
            lastname:'',
            country:'',
            email:''
        },
        users:[],
        errorMsg: ''
    }
    const [state, dispatch] = useReducer(userReducer, initialState)

    const getUsers = async () => {
        try {
            const response = await clientAxios.get('/users')
            dispatch(
                {
                    type:GETUSERS,
                    payload:response.data
                }
            )
        } catch (error) {
            dispatch(
                {
                    type:REQERROR,
                    payload:error.response.data.msg
                }
            )
        }
    }
    const getUser = async (id) =>{
        try {
            const response = await clientAxios.get(`/users/${id}`)
            dispatch(
                {
                    type:GETUSER,
                    payload:response.data
                }
            )
        } catch (error) {
            dispatch(
                {
                    type:REQERROR,
                    payload:error.response.data.msg
                }
            )
        }
    }
    const deleteUser = async (id) =>{
        try {
            const response = await clientAxios.delete(`/users/${id}`);
        } catch (error) {
            dispatch(
                {
                    type:REQERROR,
                    payload:error.response.data.msg
                }
            )
        }
    }
    const editUser = async (id,values) => {
        try {
            const response = await clientAxios.put(`/users/${id}`,values)
            dispatch(
                {
                    type:EDITUSER,
                    payload:response.data
                }
            )
        } catch (error) {
            dispatch(
                {
                    type:REQERROR,
                    payload:error.response.data.msg
                }
            )
        }
    }

    return (
        <UserContext.Provider
            value={{
                userSelected: state.userSelected,
                users: state.users,
                errorMsg: state.errorMsg,
                getUsers,
                getUser,
                editUser,
                deleteUser
            }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserState