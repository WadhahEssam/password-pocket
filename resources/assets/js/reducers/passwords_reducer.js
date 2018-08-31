import { GET_PASSWORDS, ADD_PASSWORD, SIGN_OUT } from "../actions";
import _ from 'lodash' ;

export default ( state = {} , action ) => {

    switch ( action.type ) {

        case ADD_PASSWORD :
            return { ...state  , [action.payload.id]: action.payload } ;

        case GET_PASSWORDS :
            return _.mapKeys( action.payload , 'id' )  ;

        case SIGN_OUT :
            return {} ;

        default:
            return state
    }

}
