import React from 'react';
import '../../assets/css/topnewspaper.css';
import { getPopularNewspaper } from "../../action/index";
import { connect } from 'react-redux';

class Popular extends React.Component {
 
  changeUrl = (tag) => {
    window.open(tag);
  }
  componentDidMount = () => {
    // let tag = this.props.location.pathname.split('/')[2];
    this.props.dispatch(getPopularNewspaper());
  }
  render() {
    console.log(this.props.homeReducer.repo_data);
    return (
      <div id="newspaperDiv">
      <h2 id="headline">Top Headlines</h2>
        <ul className="topnewspaperList">{this.props.homeReducer.repo_data && this.props.homeReducer.repo_data.articles &&
          this.props.homeReducer.repo_data.articles.map((element, index) =>
            <li className="topnewspaperLi" key={index} onClick={() => this.changeUrl(element.url)} target="_blank">
              {element.urlToImage ? <img id="image" src={element.urlToImage} /> : <img id="image" src={require("../../assets/images/blank.jpg")} />}
              <h3 id="title">{element.title}</h3>
              <p id="description">{element.description}</p>
            </li>
          )
        }
        </ul>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
}

export default connect(state => state, mapDispatchToProps)(Popular);
