<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePasswordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('passwords', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name' , 30 ) ;
            $table->string('login_cred' , 80 ) ;
            $table->string('password' , 180 ) ;
            $table->string('color' , 30 ) ;
            $table->text('description')->nullable() ;
            $table->boolean('is_deleted')->default(false) ;
            $table->boolean('is_starred')->default(false) ;
            $table->unsignedInteger('user_id') ;
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.`
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('passwords');
    }
}
