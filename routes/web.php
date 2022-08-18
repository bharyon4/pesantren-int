<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'App\Http\Controllers\Admin\HomeController@getFront');
Route::get('/login_admin', 'App\Http\Controllers\Admin\HomeController@getMemberLogin')->name('memberLogin');
Route::post('/login_admin', 'App\Http\Controllers\Admin\HomeController@postMemberLogin');

Route::prefix('/')->group(function () {
    Route::get('/adm/logout', 'App\Http\Controllers\Admin\HomeController@getAdminLogout')->middleware('auth');
    Route::get('/adm/dashboard', 'App\Http\Controllers\Admin\HomeController@getDashboard')->name('admDashboard')->middleware('auth');
});
