import React from 'react';
//import '../../assets/css/HomePage.css';

function Footer() {
  return (
    <footer className="main-block dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="copyright">
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              <p>Copyright &copy; 2018 Cerebral. You can now connect with us on these platforms.
                              <i className="ti-heart" aria-hidden="true"></i>
              </p>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
