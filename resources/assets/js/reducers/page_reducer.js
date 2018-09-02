import { CHANGE_PAGE  , SIGN_UP } from '../actions' ;

export default function ( state = 'new' , action ) {

    switch ( action.type ) {

        case SIGN_UP :
            return 'home';

        case CHANGE_PAGE :
            return action.payload ;

        default :
            return state ;
    }

}
