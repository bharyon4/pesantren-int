<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSiswa extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('siswa', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->bigIncrements('id');
            $table->string('nis', 25)->nullable();
            $table->string('nisn', 30)->nullable();
            $table->string('nama', 230);
            $table->string('tempat_lahir', 230);
            $table->date('tgl_lahir');
            $table->smallInteger('j_kelamin')->comment('1 = laki-laki, 2 => perempuan');
            $table->smallInteger('tinggi_badan')->nullable();
            $table->smallInteger('berat_badan')->nullable();
            $table->string('gol_darah', 25)->nullable();
            $table->string('alamat', 250)->nullable();
            $table->string('kelurahan', 100)->nullable();
            $table->string('kecamatan', 100)->nullable();
            $table->string('kota', 70)->nullable();
            $table->string('provinsi', 70)->nullable();
            $table->date('tgl_masuk')->nullable();
            $table->date('tgl_keluar')->nullable();
            $table->string('keterangan', 250)->nullable();
            $table->string('no_ijazah', 30)->nullable();
            $table->string('no_skhun', 30)->nullable();
            $table->string('sekolah_asal', 230)->nullable();
            $table->date('tgl_ijazah')->nullable();
            $table->date('tgl_skhun')->nullable();
            $table->string('ayah_nama', 230);
            $table->string('ayah_tempat_lahir', 230);
            $table->date('ayah_tgl_lahir');
            $table->string('ayah_pendidikan', 30)->nullable();
            $table->string('ayah_pekerjaan', 50)->nullable();
            $table->string('ayah_penghasilan', 20)->nullable();
            $table->string('ibu_nama', 230);
            $table->string('ibu_tempat_lahir', 230);
            $table->date('ibu_tgl_lahir');
            $table->string('ibu_pendidikan', 30)->nullable();
            $table->string('ibu_pekerjaan', 50)->nullable();
            
            $table->string('ortu_alamat', 250)->nullable();
            $table->string('ortu_kelurahan', 100)->nullable();
            $table->string('ortu_kecamatan', 100)->nullable();
            $table->string('ortu_kota', 70)->nullable();
            $table->string('ortu_provinsi', 70)->nullable();
            
            $table->string('wali_nama', 230);
            $table->string('wali_tempat_lahir', 230);
            $table->date('wali_tgl_lahir');
            $table->string('wali_pendidikan', 30)->nullable();
            $table->string('wali_pekerjaan', 50)->nullable();
            $table->string('wali_hubungan', 50)->nullable();
            $table->string('wali_alamat', 250)->nullable();
            $table->string('wali_kelurahan', 100)->nullable();
            $table->string('wali_kecamatan', 100)->nullable();
            $table->string('wali_kota', 70)->nullable();
            $table->string('wali_provinsi', 70)->nullable();
            
            $table->string('photo', 250)->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable();
            
            
            $table->index('nis');
            $table->index('nisn');
            $table->index('nama');
            $table->index('tempat_lahir');
            $table->index('tgl_lahir');
            $table->index('j_kelamin');
            $table->index('alamat');
            $table->index('kelurahan');
            $table->index('kecamatan');
            $table->index('kota');
            $table->index('provinsi');
            $table->index('tgl_masuk');
            $table->index('no_ijazah');
            $table->index('no_skhun');
            $table->index('photo');
            
            $table->index('created_at');
            $table->index('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('siswa');
    }
}
