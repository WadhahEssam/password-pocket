import axios from 'axios' ;
import { localHash , publicHash , saveToken , getToken } from '../helpers/index'

export const CHANGE_PAGE = "change_page" ;
export const SIGN_UP = 'sign_up' ;
export const SAVE_PASSWORD = 'save_password' ;


export function signup ( userInfo , callback ) {

    return ( dispatch ) => {

        const requestData = { email:userInfo.email , password: publicHash(userInfo.password) , name:userInfo.name  } ;

        console.log('A sign up request sent to the server with this data :') ;
        console.log(requestData) ;

        axios.post('/api/auth/signup' , requestData )
        .then ( function ( response ) {
            const token  = response.data.access_token ;
            saveToken(token) ;

            const payload = {
                name : userInfo.name ,
                password : localHash(userInfo.password) ,
                email : userInfo.email ,
                token : token
            } ;

            callback() ;

            dispatch ( {
                type : SIGN_UP ,
                payload : payload
            })
        })
        .catch ( function ( error ) {
            console.log(error) ;
        });
    }
}

export function savePassword ( password ) {
    return ( dispatch ) => {
        dispatch ( {
            type : SAVE_PASSWORD ,
            payload : localHash(password)
        }) ;
    }
}

export function changePage ( page ) {

    return ( dispatch ) => {
        dispatch({
            type : CHANGE_PAGE ,
            payload : page
        });
    }

}

