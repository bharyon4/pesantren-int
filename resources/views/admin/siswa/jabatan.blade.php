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
                            <h5 class="m-b-10">List Jabatan</h5>
                        </div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{ URL::to('/') }}/dashboard"><i class="feather icon-home"></i></a></li>
                            <li class="breadcrumb-item"><a href="#!">Data Jabatan</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h5>Data Jabatan</h5>
                    </div>
                    <div class="card-body table-border-style">
                        <div class="table-responsive">
                            <table class="table table-bordered table-xs" id="simpletbl">
                                <thead class="bg-primary">
                                    <tr>
                                        <th>Kode Jabatan</th>
                                        <th>Jabatan</th>
                                        <th>Jenis Jabatan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($getData as $row)
                                    <tr>
                                        <td>{{$row->KodeJabatan}}</td>
                                        <td>{{$row->Jabatan}}</td>
                                        <td>{{$row->JenisJabatan}}</td>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
</div>
@stop

@section("styles")
<link rel="stylesheet" href="/css/dataTables.bootstrap4.min.css"/>
    <link rel="stylesheet" href="/css/bootstrap-datetimepicker.css"/>
@endsection

@section("javascript")
    <script src="/js/jquery.dataTables.min.js"></script>
    <script src="/js/dataTables.bootstrap4.min.js"></script>
    <script src="/js/moment.min.js"></script>
    <script src="/js/bootstrap-datetimepicker.js"></script>
    <script type="text/javascript">
    
    
    $(document).ready(function() {
            $("#simpletbl").DataTable({
                "paging": true,
                "lengthMenu": [[10, 25, 50, 100, 500, -1], [10, 25, 50, 100, 500, "semua"]],
                "searching": false,
                "ordering": true,
                "info": false,
                "responsive": true,
            });
        });
    </script>
@endsection

