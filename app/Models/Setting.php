<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Validator;

class Setting extends Model {
    
    public function getInsert($table, $data){
        try {
            $lastInsertedID = DB::table($table)->insertGetId($data);
            $result = (object) array('status' => true, 'message' => null, 'lastID' => $lastInsertedID);
        } catch (Exception $ex) {
            $message = $ex->getMessage();
            $result = (object) array('status' => false, 'message' => $message, 'lastID' => null);
        }
        return $result;
    }

    public function getUpdate($table, $fieldName, $name, $data){
        try {
            DB::table($table)->where($fieldName, '=', $name)->update($data);
            $result = (object) array('status' => true, 'message' => null);
        } catch (Exception $ex) {
            $message = $ex->getMessage();
            $result = (object) array('status' => false, 'message' => $message);
        }
        return $result;
    }
    
    public function getSettingPembayaran(){
        $sql = DB::table('M_Setingpembayaran')
                    ->get();
        return $sql;
    }
    
    public function getJenisSPP(){
        $sql = DB::table('M_Jenisspp')
                    ->get();
        return $sql;
    }
    
    public function getJurusan(){
        $sql = DB::table('M_Jurusan')
                    ->get();
        return $sql;
    }
    
    public function getKodeJurnal(){
        $sql = DB::table('M_Kodejurnal')
                    ->get();
        return $sql;
    }
    
    
}