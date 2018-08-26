<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\User ;


class UserController extends Controller
{
    public function test () {

        return User::all() ;
    }

    public function signup ( Request $request ) {


        $validator = Validator::make( $request->all() ,[
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);


        $response = array('response' => '', 'success'=>false);

        if ($validator->fails()) {
            return 'there is an error' ;
        }else{
            $newUser = new User () ;
            $newUser->name = $request->username ;
            $newUser->email = $request->email ;
            $newUser->password = Hash::make( $request->password ) ;
            $newUser->save() ;

            $credentials = $request->only('email', 'password');

            if (Auth::attempt($credentials)) {
                // Authentication passed...
                return 'created and auth' ;
            }

            return $newUser ;

        }


    }

}
