<!DOCTYPE html>
<html lang="en">
    <head>
        <title>e-PonPes</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <link rel="icon" href="/image/favicon.ico" type="image/x-icon">
        <meta name="description" content="e-PonPes">
        <meta name="author" content="e-PonPes">
        <link rel="stylesheet" href="{{ asset('lucid/vendor/bootstrap/css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('lucid/vendor/font-awesome/css/font-awesome.min.css') }}">
        <link rel="stylesheet" href="{{ asset('lucid/css/main.css') }}">
        <link rel="stylesheet" href="{{ asset('lucid/css/color_skins.css') }}">
        <link rel="stylesheet" href="{{ asset('lucid/vendor/toastr/toastr.min.css') }}">
        @yield('styles')

    </head>
    <body>
        <div id="wrapper">
            @yield('content')
        </div>
        <script src="{{ asset('lucid/bundles/libscripts.bundle.js') }}"></script>
        <script src="{{ asset('lucid/bundles/vendorscripts.bundle.js') }}"></script>
        <script src="{{ asset('lucid/bundles/mainscripts.bundle.js') }}"></script>
        <script src="{{ asset('lucid/vendor/toastr/toastr.js') }}"></script>
        @yield('javascript')
    </body>
</html>
