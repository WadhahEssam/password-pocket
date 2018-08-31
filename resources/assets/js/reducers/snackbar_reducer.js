import { SHOW_SNACKBAR, HIDE_SNACKBAR, DELETE_PASSWORD } from "../actions";

export default function ( state = { open : false , message : '' , time : 4000 } , action ) {

    switch (action.type ) {

        case HIDE_SNACKBAR :
            return action.payload  ;

        case SHOW_SNACKBAR :
            return action.payload ;

        case DELETE_PASSWORD :
            return { open : true , message : action.payload.name + ' is moved to trash ! ' , time : 3000 } ;

        default :
            return state ;
    }
}
