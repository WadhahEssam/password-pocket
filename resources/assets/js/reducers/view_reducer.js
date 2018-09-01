import { CHANGE_VIEW } from "../actions";

export default function ( state = 'all' , action ) {

    switch ( action.type ) {
        case CHANGE_VIEW :
            return action.payload ;

        default :
            return state ;
    }
}
