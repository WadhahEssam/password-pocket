
export const CHANGE_WELCOME_PAGE = "change_welcome_page" ;
export const SIGN_UP = 'sign_up' ;

export function changeWelcomePage ( page ) {

    return ( dispatch ) => {
        dispatch({
            type : CHANGE_WELCOME_PAGE ,
            payload : page
        });
    }

}

export function signup ( userInfo ) {


    return ( dispatch ) => {
        $.post('/api/signup' , userInfo , (response) => {
            console.log(response) ;
            dispatch ( { type : CREATE_POST , payload : userInfo } ) ;
        });
    }

}
