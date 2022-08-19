<header class="navbar pcoded-header navbar-expand-lg navbar-light headerpos-fixed header-blue">
    <div class="m-header">
        <a class="mobile-menu" id="mobile-collapse" href="#!"><span></span></a>
        <a href="#!" class="pop-search text-white" >
            <span>{{date('d M Y')}}</span>&nbsp;&nbsp;<span id="clock"></span>
            @if($dataUser->is_suspend == 1)
                <span class="badge bg-danger">Suspend</span>
            @endif
        </a>
        <a href="#!" class="mob-toggler">
            <i class="feather icon-more-vertical"></i>
        </a>
    </div>
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                    <a href="#!" class="pop-search text-white" ><span>{{$dataUser->name}}</span></a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <?php
                    $type = 'ADMIN';
                    if($dataUser->user_type == 20){
                        $type = 'GURU';
                    }
                    if($dataUser->user_type == 21){
                        $type = 'SISWA';
                    }
                ?>
                <a href="#!" class="pop-search text-white" ><span>{{$type}}</span></a>
            </li>
        </ul>
    </div>
</header>