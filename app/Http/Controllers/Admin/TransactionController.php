<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

use DB;
use Illuminate\Support\Facades\Storage;
use App\Models\Siswa;


class TransactionController extends Controller {
    
    public function __construct(){
        
    }
    
    public function getPembayaran(){
        $dataUser = Auth::user();
        return view('admin.transaction.pembayaran')
                    ->with('dataUser', $dataUser);
    }
    
    public function getSettingPembayaran(){
        $dataUser = Auth::user();
        return view('admin.transaction.setting')
                    ->with('dataUser', $dataUser);
    }
    
    public function getListPembayaran(){
        $dataUser = Auth::user();
        return view('admin.transaction.list')
                    ->with('dataUser', $dataUser);
    }
    
    public function getDetailPembayaran($id){
        $dataUser = Auth::user();
        return view('admin.transaction.detail')
                    ->with('dataUser', $dataUser);
    }
    
    public function getKuitansiDetailPembayaran($id){
        $dataUser = Auth::user();
        return view('admin.transaction.kuitansi')
                    ->with('dataUser', $dataUser);
    }
    
    public function getListSantriPembayaran(){
        $dataUser = Auth::user();
        $modelSiswa = New Siswa;
        $getData = $modelSiswa->getSiswa();
        return view('admin.transaction.list-siswa')
                    ->with('getData', $getData)
                    ->with('dataUser', $dataUser);
    }
    
    public function getDetailSantriPembayaran($id){
        $dataUser = Auth::user();
        $modelSiswa = New Siswa;
        $getData = $modelSiswa->getSiswa();
        return view('admin.transaction.detail-siswa')
                    ->with('getData', $getData)
                    ->with('dataUser', $dataUser);
    }

    
    
    
}