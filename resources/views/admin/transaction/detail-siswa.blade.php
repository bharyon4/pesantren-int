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
                            <h5 class="m-b-10">Pembayaran</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{ URL::to('/') }}/dashboard"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item"><a href="#!">Form Pembayaran</a></li>
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
                            Form Pembayaran
                        </h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                      <label>Jenis Pembayaran</label>
                                      <input type="text" class="form-control" name="IDTrans" id="name" required="true" autocomplete="off">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                      <label>Bulan</label>
                                      <input type="text" class="form-control" name="Bulan" id="code" required="true" autocomplete="off">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                      <label>Tanggal</label>
                                      <input type="text" class="form-control" name="Bulan" id="code" required="true" autocomplete="off">
                                </div>
                            </div>
                            
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                      <label>No. Kuitansi</label>
                                      <input type="text" class="form-control" name="kuitansi" id="hp" required="true" autocomplete="off">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                      <label>Nominal</label>
                                      <input type="text" class="form-control allownumericwithoutdecimal" name="nominal" id="nominal" required="true" autocomplete="off">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                      <label>Potongan Bayar</label>
                                      <input type="text" class="form-control allownumericwithoutdecimal" name="potongan" id="potongan" required="true" autocomplete="off" placeholder="0">
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
<script>
        
        $(".allownumericwithoutdecimal").on("keypress keyup blur",function (event) {    
           $(this).val($(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });

</script>
@stop
