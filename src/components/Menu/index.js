import React from 'react';
import '../../assets/css/set1.css';

function Menu() {
  return (
    <div className="nav-menu">
      <div className="bg transition">
        <div className="container-fluid fixed">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html">Cerebral</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                  aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-menu"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Explore
                                          <span className="icon-arrow-down"></span>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Listing
                                          <span className="icon-arrow-down"></span>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Newspapers</a>
                        <a className="dropdown-item" href="#">Premium</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                                          <span className="icon-arrow-down"></span>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                      </div>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Blog</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Menu;