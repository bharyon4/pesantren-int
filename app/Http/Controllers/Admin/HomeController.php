<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

use DB;
use Str;

class HomeController extends Controller {
    
    public function __construct(){
        
    }
    
    
    public function getFront(){
        return view('homepage');
    }
    
    public function getMemberLogin(){
        $dataUser = Auth::user();
        if($dataUser != null){
            return redirect()->route('admDashboard');
        }
        return view('login');
    }
    
    public function postMemberLogin(Request $request){
        $email = $request->admin_username;
        $password = $request->admin_password;
        $userdata = array('email' => $email, 'password'  => $password, 'is_active' => 1);
        
        if (Auth::guard("web")->attempt($userdata, $request->remember)) {
                $request->session()->regenerate();
                return redirect()->route('admDashboard');
        }
        return redirect()->route('memberLogin')
                ->with('message', 'Passowrd / Username salah')
                ->with('messageclass', 'error');
    }
    
    public function getDashboard(){
        $dataUser = Auth::user();
        return view('admin.home.dashboard')
                    ->with('dataUser', $dataUser);
    }
    
    public function getAdminLogout(Request $request) {
        $dataUser = Auth::user();
        Auth::logout();
        $request->session()->invalidate();
        return redirect()->route('memberLogin');
    }
    
    
    
}