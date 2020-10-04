import { types } from '../types/types';


const initialState = {
    loaded: false,
    user: [{
        name: "",
        surnames: "",
        email: "",
        password: "",
        address: "",
        postalCode: "",
        telephone: "",
    }],
};

export const userReducer = ( state = initialState, action ) => {

    switch ( action.type ){
        case types.userLoaded:
            return {
                ...state,
                user: [ action.payload ],
                loaded: true,
            }
            case types.userUpdated:
                return {
                    ...state,
                    user: [ ...action.payload ]
                }   
        default:
            return state;
    }
}