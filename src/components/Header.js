import { Link } from "react-router-dom";


function Header() {

    return(
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp" height="15" alt="MDB Logo" loading="lazy"/>
      </a>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                
          <a class="nav-link">            <Link to="/login">    Login   </Link>  </a>
        </li>
        <li class="nav-item">
          <a class="nav-link"><Link to="/signup">Sign Up</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
      </ul>
    </div>

    <div class="d-flex align-items-center">
      <a class="link-secondary me-3"> <i class="fas fa-shopping-cart"></i> </a>
    </div>

  </div>
</nav>
    );
}

export default Header;