<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Validator;

class Siswa extends Model {
    
    public function getInsertSiswa($data){
        try {
            $lastInsertedID = DB::table('M_Siswa')->insertGetId($data);
            $result = (object) array('status' => true, 'message' => null, 'lastID' => $lastInsertedID);
        } catch (Exception $ex) {
            $message = $ex->getMessage();
            $result = (object) array('status' => false, 'message' => $message, 'lastID' => null);
        }
        return $result;
    }

    public function getUpdateSiswa($fieldName, $name, $data){
        try {
            DB::table('M_Siswa')->where($fieldName, '=', $name)->update($data);
            $result = (object) array('status' => true, 'message' => null);
        } catch (Exception $ex) {
            $message = $ex->getMessage();
            $result = (object) array('status' => false, 'message' => $message);
        }
        return $result;
    }
    
    public function getSiswa(){
        $sql = DB::table('M_Siswa')
                    ->get();
        return $sql;
    }
    
    
}