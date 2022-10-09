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
        <div class="page-header">
            <div class="page-block">
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="page-header-title">
                            <h5 class="m-b-10">Angsuran</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{ URL::to('/') }}/dashboard"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item"><a href="#!">Form Angsuran</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card card-user">
                    <div class="card-header">
                        <h5 class="card-title">
                            Form Angsuran
                        </h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                      <label>Jenis Jurnal</label>
                                      <input type="text" class="form-control" name="name" id="name" required="true" autocomplete="off">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                      <label>Nilai</label>
                                      <input type="text" class="form-control" name="code" id="code" required="true" autocomplete="off">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                      <label>Kategori</label>
                                      <input type="text" class="form-control" name="hp" id="hp" required="true" autocomplete="off">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                      <label>Jenis Pembayaran</label>
                                      <input type="text" class="form-control" name="username_admin" id="username_admin" required="true" autocomplete="off">
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn  btn-primary" id="submitBtn" data-toggle="modal" data-target="#confirmSubmit" onClick="inputSubmit()" data-backdrop="static" data-keyboard="false">Submit</button>
                        &nbsp;&nbsp;
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@stop

@section('styles')

@stop

@section('javascript')

@stop
