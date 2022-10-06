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
                                                            
            <div class="col-md-4 col-xl-4">
                <div class="card bg-success notification-card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-4 notify-icon"><i class="feather icon-tag float-start"></i></div>
                            <div class="col-8 notify-cont">
                                <h4 class="fa-2x">1231</h4>
                                <p>Siswa Aktif</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-xl-4">
                <div class="card bg-success notification-card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-4 notify-icon"><i class="feather icon-tag text-white"></i></div>
                            <div class="col-8 notify-cont">
                                <h4 class="fa-2x">77</h4>
                                <p>Total Pengajar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-xl-4">
                <div class="card bg-success notification-card">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-4 notify-icon"><i class="feather icon-tag text-white"></i></div>
                            <div class="col-8 notify-cont">
                                <h4 class="fa-2x">350.000</h4>
                                <p>Total Penerimaan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                                                
        </div>
    </div>
</div>
@stop