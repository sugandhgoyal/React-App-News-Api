import React from 'react';
import { searchNewsApiCall } from "../../action/index";
import { connect } from 'react-redux';
import '../../assets/css/searchBox.css';

class MainBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      hasMoreItems: true
    }
  }
  search = (e) => {
    console.log("search");
    if (e.keyCode === 13) {
      this.handleChange(e, true);
    }
    this.handleChange(e, false);
  }
  handleChange = (e, isEnter) => {
    console.log("handlechnage");
    if (!isEnter) {
      this.setState({
        searchString: e.target.value
      });
    } else {
      console.log("else", this.state.searchString);
      let searchedString = this.state.searchString;
      this.props.dispatch(searchNewsApiCall(searchedString));
    }
  }
  showNewsPage = (tag) => {
    const path = `/popular`;
    this.props.history.push(path);
  }
  render() {
    return (
      <section className="slider d-flex align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="slider-title_box">
                <div className="row">
                  <div className="col-md-12">
                    <div className="slider-content_wrap">
                      <h1>Read your favourite newspapers here</h1>
                      <h5>News teaches that every day is a new day, and it's never too late to fix something</h5>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-md-10">
                    <form className="form-wrap mt-4">
                      <div className="btn-group" role="group" aria-label="Basic example">
                        <input
                          value={this.state.searchString}
                          type="text"
                          placeholder="Search here.."
                          onChange={this.handleChange}
                          onKeyDown={this.search}
                          className="btn-group1" />
                        <button type="submit" className="btn-form">
                          <span className="icon-magnifier search-icon"></span>SEARCH
                                              <i className="pe-7s-angle-right"></i>
                        </button>
                      </div>
                    </form>
                    <div className="slider-link">
                      <a onClick={() => this.showNewsPage()}>Browse Popular</a>
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
}
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
}

export default connect(state => state, mapDispatchToProps)(MainBanner);

