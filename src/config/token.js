import clientAxios from './axios'

const authToken = (token) => {
    if(token)
    {
        clientAxios.defaults.headers.common[]=token;
    }else
    {
        delete clientAxios.defaults.headers.common[];
    }
}

export default authToken
