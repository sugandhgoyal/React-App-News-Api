import React from 'react';
//import '../../../css/HomePage.css';

class Categories extends React.Component {
  showNewsPage = (tag) => {
    const path = `/news/${tag}`;
    console.log(this.props.history);
    this.props.history.push(path);
  }
  render() {
    return (
      <section className="main-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="styled-heading">
                <h3>Browse Categories</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 category-responsive" onClick={() => this.showNewsPage('technology')}>
            <a className="category-wrap" >
              <div className="category-block">
                <i className="icons fa fa-pencil-square-o" aria-hidden="true"></i>
                <h6>Technology</h6>
              </div>
            </a>
          </div>
            <div className="col-md-3 category-responsive" onClick={() => this.showNewsPage('business')}>
              <a className="category-wrap" >
                <div className="category-block">
                  <i className="icons fa fa-pencil-square-o" aria-hidden="true"></i>
                  <h6>Business</h6>
                </div>
              </a>
            </div>
            <div className="col-md-3 category-responsive" onClick={() => this.showNewsPage('sports')}>
              <a href="#" className="category-wrap">
                <div className="category-block">
                  <i className="icons fa fa-bullseye"></i>
                  <h6>Sports</h6>
                </div>
              </a>
            </div>
            <div className="col-md-3 category-responsive" onClick={() => this.showNewsPage('general')}>
              <a href="#" className="category-wrap">
                <div className="category-block">
                  <i className="icons fa fa-bullseye"></i>
                  <h6>People</h6>
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 category-responsive" onClick={() => this.showNewsPage('general')}>
              <a href="#" className="category-wrap">
                <div className="category-block">
                  <i className="icons fa fa-tv"></i>
                  <h6>general</h6>
                </div>
              </a>
            </div>
            <div className="col-md-3 category-responsive" onClick={() => this.showNewsPage('entertainment')}>
              <a href="#" className="category-wrap">
                <div className="category-block">
                  <i className="icons fa fa-film"></i>
                  <h6>Entertainment</h6>
                </div>
              </a>
            </div>
            <div className="col-md-3 category-responsive" onClick={() => this.showNewsPage('science')}>
              <a href="#" className="category-wrap">
                <div className="category-block">
                  <i className="icons fa fa-users"></i>
                  <h6>science</h6>
                </div>
              </a>
            </div>
            <div className="col-md-3 category-responsive" onClick={() => this.showNewsPage('health')}>
              <a href="#" className="category-wrap">
                <div className="category-block">
                  <i className="icons fa fa-medkit"></i>
                  <h6>Health</h6>
                </div>
              </a>
            </div>
        </div>
      </section>
    );
  }
}

export default Categories;
