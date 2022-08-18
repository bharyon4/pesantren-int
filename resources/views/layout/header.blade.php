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
            <?php
                    $name = $dataUser->name;
                    if($dataUser->user_type >= 10){
                        $name = $dataUser->name.' - '.$dataUser->code;
                    }
                ?>
            <li class="nav-item">
                    <a href="#!" class="pop-search text-white" ><span>{{$name}}</span></a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <?php
                    $type = 'ADMIN';
                    if($dataUser->user_type == 3){
                        $type = 'FINANCE';
                    }
                    if($dataUser->user_type == 10){
                        $type = 'DISTRIBUTOR';
                    }
                    if($dataUser->user_type == 20){
                        $type = 'AGENT';
                    }
                    if($dataUser->user_type == 21){
                        $type = 'MEMBER';
                    }
                ?>
                <a href="#!" class="pop-search text-white" ><span>{{$type}}</span></a>
            </li>
        </ul>
    </div>
</header>