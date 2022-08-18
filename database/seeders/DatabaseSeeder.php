<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;


class DatabaseSeeder extends Seeder {

    public function run() {
        ini_set("memory_limit", -1);
        ini_set('max_execution_time', 0);
        
        $users = array(
            array(
                'name' => 'Super Admin',
                'email' => 'superadmin@mail.com',
                'password' => bcrypt('superadmin_2022'),
                'hp' => '08111',
                'is_active' => 1,
                'user_type' => 1,
                'active_at' => date('Y-m-d H:i:s')
            ),
            array(
                'name' => 'Admin',
                'email' => 'admin@mail.com',
                'password' => bcrypt('admin_2022'),
                'hp' => '08222',
                'is_active' => 1,
                'user_type' => 2,
                'active_at' => date('Y-m-d H:i:s')
            ),
            array(
                'name' => 'Contoh Guru',
                'email' => 'guru1',
                'password' => bcrypt('guru_2022'),
                'hp' => '08333',
                'is_active' => 1,
                'user_type' => 20,
                'active_at' => date('Y-m-d H:i:s')
            ),
            array(
                'name' => 'Contoh Siswa',
                'email' => 'guru1',
                'password' => bcrypt('siswa_2022'),
                'hp' => '08444',
                'is_active' => 1,
                'user_type' => 50,
                'active_at' => date('Y-m-d H:i:s')
            ),
        );
        foreach($users as $row){
            DB::table('users')->insert($row);
        }


        dd('done seed');
    }
    
}
