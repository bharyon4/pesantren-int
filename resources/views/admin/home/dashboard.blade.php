@extends('layout.main')
@section('content')
<div class="loader-bg">
    <div class="loader-track">
        <div class="loader-fill"></div>
    </div>
</div>
@include('layout.sidebar')
@include('layout.header')
<div class="pcoded-main-container">
    <div class="pcoded-content">
        <div class="row">
                                                            
            <div class="col-md-6 col-xl-6">
                <div class="card bg-success notification-card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-4 notify-icon"><i class="feather icon-tag float-start"></i></div>
                            <div class="col-8 notify-cont">
                                <h4 class="fa-2x">1231</h4>
                                <p>Total Siswa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xl-6">
                <div class="card bg-success notification-card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-4 notify-icon"><i class="feather icon-tag text-white"></i></div>
                            <div class="col-8 notify-cont">
                                <h4 class="fa-2x">77</h4>
                                <p>Total Pengajar/Petugas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                                
        </div>
    </div>
</div>
@stop