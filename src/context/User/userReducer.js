import {
    GETUSER,
    GETUSERS,
    EDITUSER,
    REQERROR
} from '../../types/index'


const userReducer = (state, action) => {
    switch (action.type) {
        case GETUSER:
            return ({
                ...state,
                userSelected:action.payload
            });
        case GETUSERS:
            return ({
                ...state,
                users:action.payload
            });
        case EDITUSER:
            return ({
                ...state,
                errorMsg: action.payload,
            });
        case REQERROR:
            return({
                ...state,
                errorMsg:action.payload
            })
        default: return state;
    }
}

export default userReducer
