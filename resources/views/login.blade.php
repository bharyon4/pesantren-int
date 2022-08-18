@extends('layout.main_login')
@section('content')

<div class="vertical-align-wrap">
    <div class="vertical-align-middle auth-main">
        <div class="auth-box">
            <div class="card" style="background: #f8f8f8;">
                <div class="header">
                    <p class="lead">Login akun anda</p>
                </div>
                <div class="body">
                    <form class="form-auth-small" method="post" action="/login_admin">
                        {{ csrf_field() }}
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-user"></i></span>
                            </div>
                            <input type="text" class="form-control" id="admin_email" placeholder="Username" name="admin_username">
                        </div>
                        <div class="input-group mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="fa fa-lock"></i></span>
                            </div>
                            <input type="password" class="form-control" placeholder="Password" name="admin_password">
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg btn-block">LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

@stop
