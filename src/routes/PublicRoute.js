import { useEffect, useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from './../context/Auth/authContext'

const PublicRoute = ({component:Component,...props}) => {
    const { auth, authUser} = useContext(AuthContext);
    useEffect(() => {
        authUser();
    }, [])
    return (
        <Route {...props} render={props=> auth ? (<Redirect to='/users'/>):(<Component {...props}/>)}/>
    )
}

export default PublicRoute
