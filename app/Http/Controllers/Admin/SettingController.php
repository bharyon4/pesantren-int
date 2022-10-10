<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

use DB;
use App\Models\Setting;
use Illuminate\Support\Facades\Storage;


class SettingController extends Controller {
    
    public function __construct(){
        
    }
    
    public function getListSettingPembayaran(){
        $dataUser = Auth::user();
        $modelSetting = New Setting;
        $getData = $modelSetting->getSettingPembayaran();
        return view('admin.setting.pembayaran')
                    ->with('getData', $getData)
                    ->with('dataUser', $dataUser);
    }
    
    public function getListJenisSPP(){
        $dataUser = Auth::user();
        $modelSetting = New Setting;
        $getData = $modelSetting->getJenisSPP();
        return view('admin.setting.jenisspp')
                    ->with('getData', $getData)
                    ->with('dataUser', $dataUser);
    }
    
    public function getListJurusan(){
        $dataUser = Auth::user();
        $modelSetting = New Setting;
        $getData = $modelSetting->getJurusan();
        return view('admin.setting.jurusan')
                    ->with('getData', $getData)
                    ->with('dataUser', $dataUser);
    }
    
    public function getListKodeJurnal(){
        $dataUser = Auth::user();
        $modelSetting = New Setting;
        $getData = $modelSetting->getKodeJurnal();
        return view('admin.setting.kodejurnal')
                    ->with('getData', $getData)
                    ->with('dataUser', $dataUser);
    }
    
    
    
}