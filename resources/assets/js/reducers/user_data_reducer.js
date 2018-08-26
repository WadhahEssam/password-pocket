import { SIGN_UP } from '../actions/index' ;

export default function UserDataReducer ( state = { name : '' , email : '' , password : '' , token : '' } , action ) {
    switch ( action.type ) {

        case ( SIGN_UP ) :
            return action.payload ;

        default :
            return state ;

    }
}
