import React from 'react';
import '../../assets/css/newspaper.css';
import { getNewspaper } from "../../action/index";
import { connect } from 'react-redux';

class Newspaper extends React.Component {
  showNewsPage = (tag) => {
    const path = `/newspaper/${tag}`;
    this.props.history.push(path);
  }
  changeUrl = (tag) => {
    console.log(tag);
    //this.props.history.push(tag);
    window.open(tag);
  }
  componentDidMount = () => {
    let tag = this.props.location.pathname.split('/')[2];
    this.props.dispatch(getNewspaper(tag));
  }
  render() {
    console.log(this.props.homeReducer.repo_data);
    return (
      <div id="newspaperDiv">
        <ul className="newspaperList">{this.props.homeReducer.repo_data && this.props.homeReducer.repo_data.articles &&
          this.props.homeReducer.repo_data.articles.map((element, index) =>
            <li className="newspaperLi" key={index} onClick={() => this.changeUrl(element.url)} target="_blank">
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

export default connect(state => state, mapDispatchToProps)(Newspaper);
