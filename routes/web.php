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
    Route::get('/adm/list/santri-pembayaran', 'App\Http\Controllers\Admin\TransactionController@getListSantriPembayaran')->name('adm_getListSantriPembayaran')->middleware('auth');
    Route::get('/adm/detail/santri-pembayaran/{id}', 'App\Http\Controllers\Admin\TransactionController@getDetailSantriPembayaran')->name('adm_getDetailSantriPembayaran')->middleware('auth');
    
    Route::get('/adm/setting/pembayaran', 'App\Http\Controllers\Admin\TransactionController@getSettingPembayaran')->name('adm_settingPembayaran')->middleware('auth');
    
    Route::get('/adm/list-pembayaran', 'App\Http\Controllers\Admin\TransactionController@getListPembayaran')->name('adm_listPembayaran')->middleware('auth');
    Route::get('/adm/detail-pembayaran/{id}', 'App\Http\Controllers\Admin\TransactionController@getDetailPembayaran')->name('adm_detailPembayaran')->middleware('auth');
    Route::get('/adm/kuitansi/pembayaran/{id}', 'App\Http\Controllers\Admin\TransactionController@getKuitansiDetailPembayaran')->name('adm_kuitansidetailPembayaran')->middleware('auth');
    
    //Siswa
    Route::get('/adm/list-siswa', 'App\Http\Controllers\Admin\SiswaController@getListSiswa')->name('adm_listSiswa')->middleware('auth');
    Route::get('/adm/list-kelas', 'App\Http\Controllers\Admin\SiswaController@getListKelas')->name('adm_getListKelas')->middleware('auth');
    Route::get('/adm/list-jabatan', 'App\Http\Controllers\Admin\SiswaController@getListJabatan')->name('adm_getListJabatan')->middleware('auth');
//    Route::get('/adm/list-gurupengurus', 'App\Http\Controllers\Admin\SiswaController@getListGuruPengurus')->name('adm_getListGuruPengurus')->middleware('auth');
    
    //Setting
    Route::get('/adm/list-settingpembayaran', 'App\Http\Controllers\Admin\SettingController@getListSettingPembayaran')->name('adm_ListSettingPembayaran')->middleware('auth');
    Route::get('/adm/list-jenisspp', 'App\Http\Controllers\Admin\SettingController@getListJenisSPP')->name('adm_ListJenisSPP')->middleware('auth');
    Route::get('/adm/list-jurusan', 'App\Http\Controllers\Admin\SettingController@getListJurusan')->name('adm_ListJurusan')->middleware('auth');
    Route::get('/adm/list-kodejurnal', 'App\Http\Controllers\Admin\SettingController@getListKodeJurnal')->name('adm_getListKodeJurnal')->middleware('auth');
    
    //contoh
    Route::get('/table', 'App\Http\Controllers\Admin\HomeController@getTable')->name('getTable')->middleware('auth');
    Route::get('/form', 'App\Http\Controllers\Admin\HomeController@getForm')->name('getForm')->middleware('auth');
});
