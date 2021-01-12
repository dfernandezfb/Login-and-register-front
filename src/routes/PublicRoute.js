import { useEffect, useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from './../context/Auth/authContext'

const PublicRoute = ({component:Component,...props}) => {
    const { user, authUser, loading} = useContext(AuthContext);
    useEffect(() => {
        authUser();
    }, [])
    return (
        <Route {...props} render={props=> user !==null && !loading? (<Redirect to='/users'/>):(<Component {...props}/>)}/>
    )
}

export default PublicRoute
