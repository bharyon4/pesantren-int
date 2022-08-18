<nav class="pcoded-navbar menupos-fixed menu-light ">
    <div class="navbar-wrapper  ">
        <div class="navbar-content scroll-div " >
            <ul class="nav pcoded-inner-navbar ">
                
                <li class="nav-item">
                    <a href="{{ URL::to('/') }}/adm/dashboard" class="nav-link " >
                        <span class="pcoded-micon">
                            <i class="feather icon-home" style="color: #4099ff;"></i>
                        </span>
                        <span class="pcoded-mtext">
                            Dashboard
                        </span>
                    </a>
                </li>
                @if($dataUser->user_type == 1 || $dataUser->user_type == 2)
                <li class="nav-item pcoded-hasmenu ">
                    <a href="#!" class="nav-link ">
                    <span class="pcoded-micon"><i class="feather icon-users"></i></span>
                    <span class="pcoded-mtext">Distributor</span>
                    </a>
                    <ul class="pcoded-submenu">
                        <li>
                             <a href="{{ URL::to('/') }}/adm/all/distributor">List Ditributor</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/adm/add/distributor">Tambah Ditributor</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item pcoded-hasmenu @if(Route::currentRouteName() == 'getDetailBetAdmin' || Route::currentRouteName() == 'getAllBetAdmin' || Route::currentRouteName() == 'getSearchAvailableNumber') active pcoded-trigger @endif">
                    <a href="#!" class="nav-link ">
                    <span class="pcoded-micon"><i class="feather icon-file-text"></i></span>
                    <span class="pcoded-mtext">Report</span>
                    </a>
                    <ul class="pcoded-submenu">
<!--                        <li>
                             <a href="{{ URL::to('/') }}/adm/bet-total">Total Taruhan</a>
                        </li>-->
                        <li @if(Route::currentRouteName() == 'getDetailBetAdmin' || Route::currentRouteName() == 'getAllBetAdmin' || Route::currentRouteName() == 'getSearchAvailableNumber') class="active" @endif>
                             <a href="{{ URL::to('/') }}/adm/bet-member">Taruhan</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/adm/summary/win-lose">Win / Lose</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/adm/detail/win-lose">Hasil</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/adm/settle">Settle</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/result/winning">Nomor Menang</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="{{ URL::to('/') }}/adm/input/result" class="nav-link ">
                        <span class="pcoded-micon"><i class="feather icon-star text-warning"></i>
                        </span>
                        <span class="pcoded-mtext">Input Result</span>
                    </a>
                </li>
                <li class="nav-item pcoded-hasmenu @if(Route::currentRouteName() == 'getInputDraw') active pcoded-trigger @endif">
                    <a href="#!" class="nav-link ">
                    <span class="pcoded-micon"><i class="feather icon-settings"></i></span>
                    <span class="pcoded-mtext">Setting</span>
                    </a>
                    <ul class="pcoded-submenu">
                        <li>
                             <a href="{{ URL::to('/') }}/adm/hadiah">Hadiah</a>
                        </li>
                        <li @if(Route::currentRouteName() == 'getInputDraw') class="active" @endif>
                             <a href="{{ URL::to('/') }}/adm/list-draw">Periode</a>
                        </li>
                    </ul>
                </li>
                @endif
                
                @if($dataUser->user_type == 3)
                
                <li class="nav-item">
                    <a href="{{ URL::to('/') }}/adm/all/confirm/hadiah" class="nav-link ">
                        <span class="pcoded-micon"><i class="feather icon-star text-warning"></i>
                        </span>
                        <span class="pcoded-mtext">List Pemenang</span>
                    </a>
                </li>
                @endif
                
                @if($dataUser->user_type == 10)
                <li class="nav-item pcoded-hasmenu ">
                    <a href="#!" class="nav-link ">
                    <span class="pcoded-micon"><i class="feather icon-users"></i></span>
                    <span class="pcoded-mtext">Agen</span>
                    </a>
                    <ul class="pcoded-submenu">
                        <li>
                             <a href="{{ URL::to('/') }}/dist/all/agent">List Agen</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/dist/add/agent">Tambah Agen</a>
                        </li>
                    </ul>
                </li>
                
                <li class="nav-item pcoded-hasmenu @if(Route::currentRouteName() == 'getDetailBetDistributor' || Route::currentRouteName() == 'getAllBetDistributor' || Route::currentRouteName() == 'getDistributorDetailWinLoseNew' || Route::currentRouteName() == 'getSearchAvailableNumber') active pcoded-trigger @endif">
                    <a href="#!" class="nav-link ">
                    <span class="pcoded-micon"><i class="feather icon-file-text"></i></span>
                    <span class="pcoded-mtext">Report</span>
                    </a>
                    <ul class="pcoded-submenu">
                        <li @if(Route::currentRouteName() == 'getDetailBetDistributor' || Route::currentRouteName() == 'getAllBetDistributor' || Route::currentRouteName() == 'getSearchAvailableNumber') class="active" @endif>
                             <a href="{{ URL::to('/') }}/distributor/bet-total">Total Taruhan</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/list/bet-all">List Taruhan</a>
                        </li>
                        <li @if(Route::currentRouteName() == 'getDistributorDetailWinLoseNew') class="active" @endif>
                             <a href="{{ URL::to('/') }}/distributor/summary/win-lose">Win / Lose</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/distributor/detail/win-lose">Hasil</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/dist/settle">Settle</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/result/winning">Nomor Menang</a>
                        </li>
                    </ul>
                    
                    <li class="nav-item pcoded-menu-caption"></li>
                    
                    <li class="nav-item">
                        <a href="{{ URL::to('/') }}/my/sponsor-tree" class="nav-link ">
                            <span class="pcoded-micon"><i class="fas fa-share-alt"></i>
                            </span>
                            <span class="pcoded-mtext">Struktur</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ URL::to('/') }}/my-profile" class="nav-link ">
                            <span class="pcoded-micon"><i class="feather icon-user"></i>
                            </span>
                            <span class="pcoded-mtext">Password</span>
                        </a>
                    </li>
                </li>
                @endif
                
                @if($dataUser->user_type == 20)
                <li class="nav-item pcoded-hasmenu ">
                    <a href="#!" class="nav-link ">
                    <span class="pcoded-micon"><i class="feather icon-users"></i></span>
                    <span class="pcoded-mtext">Agen</span>
                    </a>
                    <ul class="pcoded-submenu">
                        <li>
                             <a href="{{ URL::to('/') }}/agent/all/agent">List Agen</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/agent/add/agent">Tambah Agen</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item pcoded-hasmenu ">
                    <a href="#!" class="nav-link ">
                    <span class="pcoded-micon"><i class="feather icon-users"></i></span>
                    <span class="pcoded-mtext">Member</span>
                    </a>
                    <ul class="pcoded-submenu">
                        <li>
                             <a href="{{ URL::to('/') }}/agent/all/member">List Member</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/agent/add/member">Tambah Member</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item pcoded-hasmenu @if(Route::currentRouteName() == 'getDetailBetAgent' || Route::currentRouteName() == 'getAllBetAgent' || Route::currentRouteName() == 'getAgentDetailWinLoseNew') active pcoded-trigger @endif">
                    <a href="#!" class="nav-link ">
                    <span class="pcoded-micon"><i class="feather icon-file-text"></i></span>
                    <span class="pcoded-mtext">Report</span>
                    </a>
                    <ul class="pcoded-submenu">
                        <li @if(Route::currentRouteName() == 'getDetailBetAgent' || Route::currentRouteName() == 'getAllBetAgent') class="active" @endif>
                             <a href="{{ URL::to('/') }}/agent/bet-total">Total Taruhan</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/list/bet-all">List Taruhan</a>
                        </li>
                        <li @if(Route::currentRouteName() == 'getAgentDetailWinLoseNew') class="active" @endif>
                             <a href="{{ URL::to('/') }}/agent/summary/win-lose">Win / Lose</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/agent/detail/win-lose">Hasil</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/agent/settle">Settle</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/result/winning">Nomor Menang</a>
                        </li>
                    </ul>
                    <li class="nav-item pcoded-menu-caption"></li>
                    
                    <li class="nav-item">
                        <a href="{{ URL::to('/') }}/my/sponsor-tree" class="nav-link ">
                            <span class="pcoded-micon"><i class="fas fa-share-alt"></i>
                            </span>
                            <span class="pcoded-mtext">Struktur</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ URL::to('/') }}/my-profile" class="nav-link ">
                            <span class="pcoded-micon"><i class="feather icon-user"></i>
                            </span>
                            <span class="pcoded-mtext">Password</span>
                        </a>
                    </li>
                </li>
                @endif
                
                @if($dataUser->user_type == 21)
                <li class="nav-item">
                    <a href="{{ URL::to('/') }}/member/add/bet-v3" class="nav-link ">
                        <span class="pcoded-micon"><i class="feather icon-book"></i>
                        </span>
                        <span class="pcoded-mtext">Bet</span>
                    </a>
                </li>
                <li class="nav-item pcoded-hasmenu @if(Route::currentRouteName() == 'getDetailBetMember' || Route::currentRouteName() == 'getAllBetMember' || Route::currentRouteName() == 'getMemberDetailWinLoseNew') active pcoded-trigger @endif">
                    <a href="#!" class="nav-link ">
                    <span class="pcoded-micon"><i class="feather icon-file-text"></i></span>
                    <span class="pcoded-mtext">Report</span>
                    </a>
                    <ul class="pcoded-submenu">
                        <li @if(Route::currentRouteName() == 'getDetailBetMember' || Route::currentRouteName() == 'getAllBetMember' ) class="active" @endif>
                             <a href="{{ URL::to('/') }}/member/detail/bet">Detail Taruhan</a>
                        </li>
                        <li @if(Route::currentRouteName() == 'getMemberDetailWinLoseNew') class="active" @endif>
                             <a href="{{ URL::to('/') }}/member/summary/win-lose">Win / Lose</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/member/detail/win-lose">Hasil</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/result/winning">Nomor Menang</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item pcoded-menu-caption"></li>
                <li class="nav-item">
                    <a href="{{ URL::to('/') }}/my-profile" class="nav-link ">
                        <span class="pcoded-micon"><i class="feather icon-user"></i>
                        </span>
                        <span class="pcoded-mtext">Password</span>
                    </a>
                </li>
                @endif
                
<!--                <li>
                    <a href="#!" class="nav-link">
                        <span class="pcoded-micon"><i class="feather icon-unlock"></i></span>
                        <span class="pcoded-mtext">
                            Profile Saya
                        </span>
                    </a>
                </li>-->
                <li>
                    <a href="{{ URL::to('/') }}/termofcondition" class="nav-link">
                        <span class="pcoded-micon"><i class="feather icon-unlock"></i></span>
                        <span class="pcoded-mtext">
                            Syarat dan Ketentuan
                        </span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{ URL::to('/') }}/adm/logout" class="nav-link ">
                        <span class="pcoded-micon">
                            <i class="feather icon-power text-c-red"></i>
                        </span>
                        <span class="pcoded-mtext">Keluar</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>