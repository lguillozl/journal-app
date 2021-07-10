import { types } from '../types/types';

/* {
    uuid: aasdasd131
    name: 'Guillermo'
} */


export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
            }
        case types.logout:
            return {}
    
        default:
            return state;
    }
}