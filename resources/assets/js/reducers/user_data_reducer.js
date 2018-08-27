import { SIGN_UP, SIGN_IN } from '../actions/index' ;

export default function UserDataReducer ( state = { name : '' , email : '' , password : '' , token : '' } , action ) {
    switch ( action.type ) {

        case ( SIGN_IN ) :
            return action.payload ;

        case ( SIGN_UP ) :
            return action.payload ;

        default :
            return state ;

    }
}
