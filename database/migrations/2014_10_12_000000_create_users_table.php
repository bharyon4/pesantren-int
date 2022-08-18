<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('name', 60);
            $table->string('email', 50)->nullable();
            $table->string('password', 100);
            $table->string('hp', 25)->nullable();
            $table->tinyInteger('is_active')->default(1)->comment('0 = tidak aktif, 1 = aktif');
            $table->smallInteger('user_type')->default(20)->comment('1 = super admin, 2 = admin, 20 = Guru, 50 = Siswa');
            $table->string('session', 25)->nullable();
            $table->string('permission', 220)->nullable();
            
            $table->timestamp('active_at')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable();
            $table->timestamp('deleted_at')->nullable();
            $table->rememberToken();
            
            
            $table->index('name');
            $table->index('email');
            $table->index('password');
            $table->index('hp');
            $table->index('is_active');
            $table->index('user_type');
            $table->index('session');
            $table->index('active_at');
            $table->index('created_at');
            $table->index('deleted_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
