import { GET_PASSWORDS, ADD_PASSWORD, SIGN_OUT, DELETE_PASSWORD } from "../actions";
import _ from 'lodash' ;

export default ( state = {} , action ) => {

    switch ( action.type ) {

        case ADD_PASSWORD :
            return { ...state  , [action.payload.id]: action.payload } ;

        case GET_PASSWORDS :
            return _.mapKeys( action.payload , 'id' )  ;

        case DELETE_PASSWORD :
            let newPasswords = _.clone(state) ;
            const id = action.payload.id ;
            newPasswords[id].is_deleted = 1 ;
            return  newPasswords ;

        case SIGN_OUT :
            return {} ;

        default:
            return state
    }

}
