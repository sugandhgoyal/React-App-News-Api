import React from 'react';
//import '../../assets/css/HomePage.css';

function FeaturedNewspaper() {
  return (
    <section className="main-block light-bg" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">

            <div className="styled-heading">
              <h3>Top Rated Newspapers</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 featured-responsive">
            <div className="featured-place-wrap">
              <a href="detail.html">
                <img src={require("../../assets/images/toi-03.cms")} className="img-fluid" alt="#" />
                <span className="featured-rating-orange">1</span>
                <div className="featured-title-box">
                  <h6>The Times Of India</h6>
                  <p>13 Reviews</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 featured-responsive">
            <div className="featured-place-wrap">
              <a href="detail.html">
                <img src={require("../../assets/images/htcity-01.png")} className="img-fluid" alt="#" />
                <span className="featured-rating-green">2</span>
                <div className="featured-title-box">
                  <h6>Hindustan Times</h6>
                  <p>25 Reviews</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-4 featured-responsive">
            <div className="featured-place-wrap">
              <a href="detail.html">
                <img src={require("../../assets/images/hindu-01.jpg")} className="img-fluid" alt="#" />
                <span className="featured-rating">3</span>
                <div className="featured-title-box">
                  <h6>The Hindu</h6>
                  <p>6 Reviews</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="featured-btn-wrap">
              <a href="#" className="btn btn-danger">VIEW ALL</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedNewspaper;
