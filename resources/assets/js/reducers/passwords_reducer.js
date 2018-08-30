import { GET_PASSWORDS } from "../actions";
import _ from 'lodash' ;

export default ( state = {} , action ) => {

    switch ( action.type ) {

        case GET_PASSWORDS :
            return _.mapKeys( action.payload , 'id' )  ;

        default:
            return state
    }

}
