import React from 'react';
import '../../assets/css/set1.css';
import '../../assets/css/icons.css';

class Menu extends React.Component {
  showNewsPage = (tag) => {
    const path = `${tag}`;
    this.props.history.push(path);
  }
  changeUrl = (tag) => {
    window.open(tag);
  }
  render() {
    return (
      <div className="nav-menu">
        <div className="bg transition">
          <div className="container-fluid fixed">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" onClick={() => this.showNewsPage('/')}>Cerebral</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-menu"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a className="nav-link" onClick={() => this.changeUrl('/')} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Home
                        </a>
                      </li>
                      {/* <li className="nav-item dropdown">
                        <a className="nav-link" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Contact Us
                        </a>
                      </li> */}
                      <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
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
}
export default Menu;