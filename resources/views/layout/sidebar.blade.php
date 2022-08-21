<nav class="pcoded-navbar menupos-fixed menu-light ">
    <div class="navbar-wrapper  ">
        <div class="navbar-content scroll-div " >
            <ul class="nav pcoded-inner-navbar ">
                
                <li class="nav-item">
                    <a href="{{ URL::to('/') }}/dashboard" class="nav-link " >
                        <span class="pcoded-micon">
                            <i class="feather icon-home" style="color: #4099ff;"></i>
                        </span>
                        <span class="pcoded-mtext">
                            Dashboard
                        </span>
                    </a>
                </li>
                
                <li class="nav-item pcoded-hasmenu ">
                    <a href="#!" class="nav-link ">
                    <span class="pcoded-micon"><i class="feather icon-file-text"></i></span>
                    <span class="pcoded-mtext">Contoh</span>
                    </a>
                    <ul class="pcoded-submenu">
                        <li>
                             <a href="{{ URL::to('/') }}/table">Tabel</a>
                        </li>
                        <li>
                             <a href="{{ URL::to('/') }}/form">Form</a>
                        </li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a href="{{ URL::to('/') }}/logout_admin" class="nav-link ">
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