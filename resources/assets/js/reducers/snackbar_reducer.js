import { SHOW_SNACKBAR, HIDE_SNACKBAR } from "../actions";

export default function ( state = { open : false , message : '' , time : 4000 } , action ) {

    switch (action.type ) {

        case HIDE_SNACKBAR :
            return action.payload  ;

        case SHOW_SNACKBAR :
            return action.payload ;

        default :
            return state ;
    }
}
