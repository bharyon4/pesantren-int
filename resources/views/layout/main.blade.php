<!DOCTYPE html>
<html lang="en">
    <head>
        <title>e-PonPes</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
        <meta http-equiv="X-UA-Compatible" content="IE=8, IE=9, IE=10, IE=edge, chrome=1" />
        <meta http-equiv="CHARSET" content="UTF-8" />
        <meta http-equiv="VW96.OBJECT TYPE" content="Document" />
        <meta http-equiv="x-dns-prefetch-control" content="off" />
        <meta name="description" content="e-PonPes" />
        <meta name="keywords" content="e-PonPes">
        <meta name="author" content="e-PonPes" />
        <link rel="icon" href="/image/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">
        @yield('styles')
    </head>
    <body class="">
        @yield('content')
        <script src="{{ asset('js/vendor-all.min.js') }}"></script>
        <script src="{{ asset('js/plugins/bootstrap.min.js') }}"></script>
        <script src="{{ asset('js/pcoded.min.js') }}"></script>
        <script>
            function showTime(){
                var date = new Date();
                var h = date.getHours();
                var m = date.getMinutes();
                var s = date.getSeconds();
                m = ( m < 10 ) ? m = "0" + m : m;
                s = ( s < 10 ) ? s = "0" + s : s;

                var time = h + ":" + m + ":" + s + " ";
                $('#clock').html(time); 
                setTimeout( showTime, 1000 );
          }
          showTime();
        </script>
        @yield('javascript')
        
        <div id="modal-session-expired"></div>
    </body>
</html>