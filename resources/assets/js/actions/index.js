import axios from 'axios' ;
import { localHash , publicHash , saveToken , getToken , savePassword , getPassword , checkPasswordAndToken , clearStorage } from '../helpers/index'
import SimpleCrypto from "simple-crypto-js";
import _ from 'lodash';

var simpleCrypto = new SimpleCrypto( getPassword() );

export const CHANGE_PAGE = "change_page" ;
export const SIGN_UP = 'sign_up' ;
export const SIGN_IN = 'sign_in' ;
export const CHECK_AUTH = ' check_auth' ;
export const SIGN_OUT = 'SIGNOUT'
export const SHOW_ADD_PASSWORD_PANEL = 'SHOW_ADD_PASSWORD_PANEL';
export const HIDE_ADD_PASSWORD_PANEL = 'HIDE_ADD_PASSWORD_PANEL';
export const ADD_PASSWORD = 'ADD_PASSWORD'
export const GET_PASSWORDS = 'GET_PASSWORDS'
export const SHOW_SNACKBAR = 'SHOW_SNACKBAR'
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR'
export const DELETE_PASSWORD = 'DELETE_PASSWORD'
export const RESTORE_PASSWORD = 'RESTORE_PASSWORD'
export const STAR_PASSWORD = 'STAR_PASSWORD'
export const UNSTAR_PASSWORD = 'UNSTAR_PASSWORD'
export const CHANGE_VIEW = 'CHANGE_VIEW'
export const SIGNUP_ERROR = 'SIGNUP_ERROR'
export const SIGNIN_ERROR = 'SIGNIN_ERROR'

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
            dispatch({
                type : SIGNUP_ERROR ,
                payload : true
            });
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
            simpleCrypto.setSecret( getPassword() ) ;

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
            dispatch({
                type : SIGNIN_ERROR ,
                payload : true
            });
        });
    }
}

export function checkAuth ( callback ) {
    return ( dispatch ) => {

        if ( checkPasswordAndToken() ) {
            const password = getPassword() ;
            const token = getToken() ;


            console.log('Trying to sign you up with your token ');
            console.log('Token : ' + token ) ;

            axios.post('/api/auth/me' , { token } )
            .then(function ( user ) {

                const payload = {
                    name : user.data.name ,
                    password : localHash(password) ,
                    email : user.data.email ,
                    token : token
                } ;

                dispatch ( {
                    type : SIGN_IN ,
                    payload
                })

                callback() ;

            })
            .catch ( function ( error ) {
                console.log('token is expired') ;
                dispatch({
                    type : CHANGE_PAGE ,
                    payload : 'signin'
                });
            });
        } else {
            dispatch ( {
                type : CHANGE_PAGE ,
                payload : 'signin'
            })
        }
    }
}

export function signout ( callback ) {

    return ( dispatch ) => {

        const token = getToken() ;

        console.log('Trying to sign you out with this token of yours : ');
        console.log('Token : ' + token ) ;



        axios.post('/api/auth/logout' , { token } )
        .then ( function (response) {
            console.log(response)
        })
        .catch (function (error) {
            console.log(error)
        });

        dispatch ( {
            type : SIGN_OUT ,
            payload : {}
        });

        clearStorage() ;
        callback() ;

    }
}

export function addPassword ( newPassword , callback ) {
    return ( dispatch ) => {

        const token = getToken() ;

        newPassword.token = token ;

        let newPasswordClone = _.clone(newPassword) ;

        // encrypting the password
        newPasswordClone.password = simpleCrypto.encrypt(newPasswordClone.password) ;

        console.log('Password will be sent to the server with the information below // NOTE THAT // the password is ecrypted ( encryption key is ' + getPassword() + ' which is a hash of the your password that is made locally and not sent to the server ) ') ;
        console.log(newPasswordClone);



        axios.post('/api/createPassword',  newPasswordClone )
        .then ( function ( response ) {

            response.data.password = simpleCrypto.decrypt(response.data.password) ;

            dispatch ({
                type : ADD_PASSWORD ,
                payload : response.data
            });

            callback () ;
        })
        .catch( function ( error ) {
            console.log(error) ;
        });


    }
}

export function deletePassword ( password_id ) {
    return ( dispatch ) => {

        const token = getToken() ;

        axios.post('api/deletePassword', { token , password_id } )
        .then ( function ( password ) {

            password.data.password = simpleCrypto.decrypt(password.data.password) ;

            dispatch ({
                type : DELETE_PASSWORD ,
                payload : password.data
            });
        })
        .catch ( function (error) {
            console.log(error);
        });
    }
}

export function restorePassword ( password_id ) {
    return ( dispatch ) => {

        const token = getToken() ;

        axios.post('api/restorePassword', { token , password_id } )
        .then ( function ( password ) {

            password.data.password = simpleCrypto.decrypt(password.data.password) ;

            dispatch ({
                type : RESTORE_PASSWORD ,
                payload : password.data
            });
        })
        .catch ( function (error) {
            console.log(error);
        });
    }
}

export function starPassword ( password_id ) {
    return ( dispatch ) => {

        const token = getToken() ;

        axios.post('api/starPassword', { token , password_id } )
        .then ( function ( password ) {

            password.data.password = simpleCrypto.decrypt(password.data.password) ;

            dispatch ({
                type : STAR_PASSWORD ,
                payload : password.data
            });
        })
        .catch ( function (error) {
            console.log(error);
        });
    }
}

export function unstarPassword ( password_id ) {
    return ( dispatch ) => {

        const token = getToken() ;

        axios.post('api/unstarPassword', { token , password_id } )
        .then ( function ( password ) {

            password.data.password = simpleCrypto.decrypt(password.data.password) ;

            dispatch ({
                type : UNSTAR_PASSWORD ,
                payload : password.data
            });
        })
        .catch ( function (error) {
            console.log(error);
        });
    }
}

export function getPasswords () {
    return ( dispatch ) => {
        const token = getToken() ;
        axios.post('api/getPasswords' , {token})
        .then( function (passwords) {

            passwords.data.map( password => {
                password.password = simpleCrypto.decrypt( password.password );
            });

            dispatch ({
                type : GET_PASSWORDS ,
                payload : passwords.data
            })
        })
        .catch ( function (error) {
            console.log(error) ;
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

export function showAddPasswordPanel () {
    return ( dispatch ) => {
        dispatch ({
            type : SHOW_ADD_PASSWORD_PANEL ,
            payload : true
        });
    }
}

export function hideAddPasswordPanel () {
    return ( dispatch ) => {
        dispatch ({
            type : HIDE_ADD_PASSWORD_PANEL ,
            payload : false
        });
    }
}

export function showSnackBar ( message , time ) {
    return ( dispatch ) => {
        dispatch ({
            type : SHOW_SNACKBAR ,
            payload : { open : true , message , time }
        });
    }
}

export function hideSnackBar () {
    return ( dispatch ) => {
        dispatch ({
            type : HIDE_SNACKBAR ,
            payload : { open : false , message : '' , time : 3000 }
        });
    }
}

export function changeView ( view ) {
    return ( dispatch ) => {
        dispatch ({
            type : CHANGE_VIEW ,
            payload : view
        });
    }
}
