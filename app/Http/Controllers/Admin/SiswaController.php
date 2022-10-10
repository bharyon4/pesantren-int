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
    
    public function getListKelas(){
        $dataUser = Auth::user();
        $modelSiswa = New Siswa;
        $getData = $modelSiswa->getKelas();
        return view('admin.siswa.kelas')
                    ->with('getData', $getData)
                    ->with('dataUser', $dataUser);
    }
    
    public function getListJabatan(){
        $dataUser = Auth::user();
        $modelSiswa = New Siswa;
        $getData = $modelSiswa->getJabatan();
        return view('admin.siswa.jabatan')
                    ->with('getData', $getData)
                    ->with('dataUser', $dataUser);
    }
    
    public function getListGuruPengurus(){
        $dataUser = Auth::user();
        $modelSiswa = New Siswa;
        $getData = $modelSiswa->getGuruPengurus();
        return view('admin.siswa.gurupengurus')
                    ->with('getData', $getData)
                    ->with('dataUser', $dataUser);
    }
    
    
    
}