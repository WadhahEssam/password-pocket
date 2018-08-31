import { GET_PASSWORDS, ADD_PASSWORD, SIGN_OUT, DELETE_PASSWORD, STAR_PASSWORD, RESTORE_PASSWORD, UNSTAR_PASSWORD } from "../actions";
import _ from 'lodash' ;

export default ( state = {} , action ) => {

    let newPasswords = {} ;

    switch ( action.type ) {

        case ADD_PASSWORD :
            return { ...state  , [action.payload.id]: action.payload } ;

        case GET_PASSWORDS :
            return _.mapKeys( action.payload , 'id' )  ;

        case DELETE_PASSWORD :
            return { ...state  , [action.payload.id]: action.payload } ;

        case STAR_PASSWORD :
            return { ...state  , [action.payload.id]: action.payload } ;

        case RESTORE_PASSWORD :
            return { ...state  , [action.payload.id]: action.payload } ;

        case UNSTAR_PASSWORD :
            return { ...state  , [action.payload.id]: action.payload } ;

        case SIGN_OUT :
            return {} ;

        default:
            return state
    }

}
