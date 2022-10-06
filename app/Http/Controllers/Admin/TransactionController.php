<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

use DB;

use Illuminate\Support\Facades\Storage;


class TransactionController extends Controller {
    
    public function __construct(){
        
    }
    
    public function getPembayaran(){
        $dataUser = Auth::user();
        return view('admin.transaction.pembayaran')
                    ->with('dataUser', $dataUser);
    }
    
    
    
}