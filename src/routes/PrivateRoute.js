import { useEffect, useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from './../context/Auth/authContext'

const PrivateRoute = ({component:Component,...props}) => {
    const { auth, authUser} = useContext(AuthContext);
    useEffect(() => {
        authUser();
    }, [])
    console.log(auth);
    return (
        <Route {...props} render={props=> !auth ? (<Redirect to='/'/>):(<Component {...props}/>)}/>
    )
}

export default PrivateRoute

