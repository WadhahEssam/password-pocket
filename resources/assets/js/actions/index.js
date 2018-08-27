import axios from 'axios' ;
import { localHash , publicHash , saveToken , getToken , savePassword , getPassword } from '../helpers/index'

export const CHANGE_PAGE = "change_page" ;
export const SIGN_UP = 'sign_up' ;
export const SIGN_IN = 'sign_in' ;
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
            savePassword( localHash(userInfo.password) ) ;

            const payload = {
                name : userInfo.name ,
                password : localHash(userInfo.password) ,
                email : userInfo.email ,
                token : token
            } ;

            dispatch ( {
                type : SIGN_UP ,
                payload : payload
            })

            // the callback should be after the dispatch
            callback() ;

        })
        .catch ( function ( error ) {
            console.log(error) ;
        });
    }
}

export function signin ( userInfo , callback ) {
    return ( dispatch ) => {
        const requestData = { email : userInfo.email , password : publicHash( userInfo.password ) } ;

        console.log('A sign in request sent to the server with this data :') ;
        console.log(requestData) ;

        axios.post('/api/auth/signin' , requestData )
        .then ( function (response) {
            const token  = response.data.access_token ;
            saveToken(token) ;
            savePassword( localHash(userInfo.password) ) ;

            axios.post('/api/auth/me' , { token } )
            .then ( function (user) {
                const payload = {
                    name : user.data.name ,
                    password : localHash(userInfo.password) ,
                    email : userInfo.email ,
                    token : token
                } ;

                dispatch ( {
                    type : SIGN_IN ,
                    payload
                })

                callback() ;
            } );
        })
        .catch ( function ( error ) {
            console.log('error with auth') ;
        });
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

