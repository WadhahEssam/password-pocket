import { SHOW_ADD_PASSWORD_PANEL, HIDE_ADD_PASSWORD_PANEL } from "../actions";

export default (state = false, action) => {

    switch (action.type) {

        case SHOW_ADD_PASSWORD_PANEL :
            return true ;

        case HIDE_ADD_PASSWORD_PANEL :
            return false ;

        default:
            return state

    }

}
