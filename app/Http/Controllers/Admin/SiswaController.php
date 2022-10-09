<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

use DB;
use App\Models\Siswa;
use Illuminate\Support\Facades\Storage;


class SiswaController extends Controller {
    
    public function __construct(){
        
    }
    
    public function getListSiswa(){
        $dataUser = Auth::user();
        $modelSiswa = New Siswa;
        $getData = $modelSiswa->getSiswa();
        return view('admin.siswa.list')
                    ->with('getData', $getData)
                    ->with('dataUser', $dataUser);
    }
    
    
    
}