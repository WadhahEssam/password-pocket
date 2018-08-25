
export const CHANGE_WELCOME_PAGE = "change_welcome_page" ;

export function changeWelcomePage ( page ) {
    return {
        type : CHANGE_WELCOME_PAGE ,
        payload : page
    } ;
}
