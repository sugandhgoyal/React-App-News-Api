import React from 'react';

class FeaturedNewspaper extends React.Component {
  showNewsPage = (tag) => {
    const path = `/topnewspaper/${tag}`;
    console.log(this.props.history);
    this.props.history.push(path);
  }
  render() {
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
            <div className="col-md-4 featured-responsive" onClick={() => this.showNewsPage('the-times-of-india')}>
              <div className="featured-place-wrap">
                  <img src={require("../../assets/images/toi-03.cms")} className="img-fluid" alt="#" />
                  <span className="featured-rating-orange">1</span>
                  <div className="featured-title-box">
                    <h6>The Times Of India</h6>
                    <p>13 Reviews</p>
                  </div>
              </div>
            </div>
            <div className="col-md-4 featured-responsive" onClick={() => this.showNewsPage('the-washington-post')}>
              <div className="featured-place-wrap">
                  <img src={require("../../assets/images/htcity-01.png")} className="img-fluid" alt="#" />
                  <span className="featured-rating-green">2</span>
                  <div className="featured-title-box">
                    <h6>Hindustan Times</h6>
                    <p>25 Reviews</p>
                  </div>
              </div>
            </div>
            <div className="col-md-4 featured-responsive" onClick={() => this.showNewsPage('nbc-news')}>
              <div className="featured-place-wrap">
                  <img src={require("../../assets/images/hindu-01.jpg")} className="img-fluid" alt="#" />
                  <span className="featured-rating">3</span>
                  <div className="featured-title-box">
                    <h6>The Hindu</h6>
                    <p>6 Reviews</p>
                  </div>
              </div>
            </div>
          </div>
          {/* <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="featured-btn-wrap">
              <a href="#" className="btn btn-danger">VIEW ALL</a>
            </div>
          </div>
        </div> */}
        </div>
      </section>
    );
  }
}

export default FeaturedNewspaper;
