import React from 'react';
//import '../../assets/css/HomePage.css';

function SelectNewspaper() {
  return (
    <section className="main-block">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="styled-heading">
              <h3>Select your Newspaper!</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row find-img-align">
              <div className="col-md-12">
                <div className="find-place-img_wrap">
                  <div className="grid">
                    <figure className="effect-ruby">
                      <img src={require('../../assets/images/wpost-04.jpg')} className="img-fluid" alt="img13" />
                      <figcaption>
                        <h5>The washington Post</h5>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="find-place-img_wrap">
                  <div className="grid">
                    <figure className="effect-ruby">
                      <img src={require("../../assets/images/New_York_Times_logo_variation.jpg")} className="img-fluid" alt="img13" />
                      <figcaption>
                        <h5>The Newyork Times </h5>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row find-img-align">
              <div className="col-md-12">
                <div className="find-place-img_wrap">
                  <div className="grid">
                    <figure className="effect-ruby">
                      <img src={require("../../assets/images/BBC-01.png")} className="img-fluid" alt="img13" />
                      <figcaption>
                        <h5>BBC News</h5>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="find-place-img_wrap">
                  <div className="grid">
                    <figure className="effect-ruby">
                      <img src={require("../../assets/images/hindu-03.png")} className="img-fluid" alt="img13" />
                      <figcaption>
                        <h5>The Hindu </h5>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row find-img-align">
              <div className="col-md-12">
                <div className="find-place-img_wrap">
                  <div className="grid">
                    <figure className="effect-ruby">
                      <img src={require("../../assets/images/toi-03.cms")} className="img-fluid" alt="img13" />
                      <figcaption>
                        <h5>Times of India </h5>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="find-place-img_wrap">
                  <div className="grid">
                    <figure className="effect-ruby">
                      <img src={require("../../assets/images/htcity-01.png")} className="img-fluid" alt="img13" />
                      <figcaption>
                        <h5>HTcity </h5>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default SelectNewspaper;
