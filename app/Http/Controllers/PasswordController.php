<?php

namespace App\Http\Controllers;

use App\Password;
use Illuminate\Http\Request;

class PasswordController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['signin' , 'signup' ] ]);
    }

    public function createPassword ( Request $request ) {

        $new = new Password () ;
        $new->name = $request->name ;
        $new->login_cred = $request->login_cred ;
        $new->password = $request->password ;
        $new->color = $request->color ;
        $new->description = $request->description ;
        $new->user_id = auth()->user()->id ;
        $new->save() ;
        return $new ;

    }

    public function getPasswords () {
        return auth()->user()->passwords ;
    }

    public function deletePassword ( Request $request ) {
        $passwordID = $request->password_id ;

        $password = Password::find($passwordID) ;

        if ( $password->user_id == auth()->user()->id ) {
            $password->is_deleted = 1 ;
            $password->save() ;
            return $password ;
        }
    }

    public function starPassword ( Request $request ) {
        $passwordID = $request->password_id ;

        $password = Password::find($passwordID) ;

        if ( $password->user_id == auth()->user()->id ) {
            $password->is_starred = 1 ;
            $password->save() ;
            return $password ;
        }
    }

    public function restorePassword ( Request $request ) {
        $passwordID = $request->password_id ;

        $password = Password::find($passwordID) ;

        if ( $password->user_id == auth()->user()->id ) {
            $password->is_deleted = 0 ;
            $password->save() ;
            return $password ;
        }
    }

    public function unstarPassword ( Request $request ) {
        $passwordID = $request->password_id ;

        $password = Password::find($passwordID) ;

        if ( $password->user_id == auth()->user()->id ) {
            $password->is_starred = 0 ;
            $password->save() ;
            return $password ;
        }
    }



}
