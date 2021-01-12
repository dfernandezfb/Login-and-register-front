import { useEffect, useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from './../context/Auth/authContext'

const PrivateRoute = ({component:Component,...props}) => {
    const { user, authUser, loading} = useContext(AuthContext);
    useEffect(() => {
        authUser();
    }, [])
    if(loading) console.log('cargando...');
    return (
        <Route {...props} render={props=> user===null && !loading? (<Redirect to='/'/>):(<Component {...props}/>)}/>
    )
}

export default PrivateRoute

