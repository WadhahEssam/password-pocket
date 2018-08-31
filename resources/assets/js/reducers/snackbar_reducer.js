import { SHOW_SNACKBAR, HIDE_SNACKBAR, DELETE_PASSWORD, STAR_PASSWORD, RESTORE_PASSWORD, UNSTAR_PASSWORD } from "../actions";

export default function ( state = { open : false , message : '' , time : 1500 } , action ) {

    switch (action.type ) {

        case HIDE_SNACKBAR :
            return action.payload  ;

        case SHOW_SNACKBAR :
            return action.payload ;

        case DELETE_PASSWORD :
            return { open : true , message : action.payload.name + ' is moved to trash ! ' , time : 1500 } ;

        case RESTORE_PASSWORD :
            return { open : true , message : action.payload.name + ' is restored from trash ! ' , time : 1500 } ;

        case STAR_PASSWORD :
            return { open : true , message : action.payload.name + ' is starred ! ' , time : 1500 } ;

        case UNSTAR_PASSWORD :
            return { open : true , message : action.payload.name + ' is unstarred ! ' , time : 1500 } ;

        default :
            return state ;
    }
}
