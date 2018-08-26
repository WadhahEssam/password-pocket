import axios from 'axios' ;

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

    const header = {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')} ;
    console.log($('meta[name="csrf-token"]').attr('content')) ;
    console.log(userInfo) ;

    return ( dispatch ) => {
        axios.post('/api/signup' , userInfo )
        .then ( function ( response ) {
            console.log(response) ;
        })
        .catch ( function ( error ) {
            console.log(error) ;
        });
    }
}
