<?php


Route::group([

    'prefix' => 'auth'

], function () {
    Route::post('signin', 'AuthController@signin');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('signup', 'AuthController@signup');
});


Route::post('createPassword' , 'PasswordController@createPassword' ) ;
Route::post('getPasswords' , 'PasswordController@getPasswords') ;
Route::post('deletePassword' , 'PasswordController@deletePassword') ;
Route::post('restorePassword' , 'PasswordController@restorePassword') ;
Route::post('starPassword' , 'PasswordController@starPassword') ;
Route::post('unstarPassword' , 'PasswordController@unstarPassword') ;

