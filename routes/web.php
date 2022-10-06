<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'App\Http\Controllers\Admin\HomeController@getFront');
Route::get('/login_admin', 'App\Http\Controllers\Admin\HomeController@getMemberLogin')->name('memberLogin');
Route::post('/login_admin', 'App\Http\Controllers\Admin\HomeController@postMemberLogin');
Route::get('/account_register', 'App\Http\Controllers\Admin\FrontendController@getRegister')->name('getRegister');
//register oleh siswa saja

Route::prefix('/')->group(function () {
    Route::get('/logout_admin', 'App\Http\Controllers\Admin\HomeController@getAdminLogout')->middleware('auth');
    Route::get('/dashboard', 'App\Http\Controllers\Admin\HomeController@getDashboard')->name('admDashboard')->middleware('auth');
    //admin register 10 = Pelayanan, 20 = Bendahara, 30 = TU, 40 = Tabsis, 50 = Guru, 100 = Siswa
    Route::get('/adm/register', 'App\Http\Controllers\Admin\MasteradminController@getRegister')->name('adm_getRegister')->middleware('auth');
    
    //Keuangan
    Route::get('/adm/pembayaran', 'App\Http\Controllers\Admin\TransactionController@getPembayaran')->name('adm_pembayaran')->middleware('auth');
    
    //contoh
    Route::get('/table', 'App\Http\Controllers\Admin\HomeController@getTable')->name('getTable')->middleware('auth');
    Route::get('/form', 'App\Http\Controllers\Admin\HomeController@getForm')->name('getForm')->middleware('auth');
});
