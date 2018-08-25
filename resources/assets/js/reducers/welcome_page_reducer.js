import { CHANGE_WELCOME_PAGE } from '../actions/index' ;

export default function ( state = 'signin' , action ) {

    switch ( action.type ) {
        case CHANGE_WELCOME_PAGE :
            return action.payload ;
        default :
            return state ;
    }

}
