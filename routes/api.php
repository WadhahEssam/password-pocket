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

