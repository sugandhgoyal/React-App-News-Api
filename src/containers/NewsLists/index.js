import React from 'react';
import '../../assets/css/list.css';
import { getNewsList } from "../../action/index";
import { connect } from 'react-redux';

class NewsLists extends React.Component {
  showNewsPage = (tag) => {
    const path = `/news/${tag}`;
    console.log(this.props.history);
    this.props.history.push(path);
  }
  changeUrl = (tag) => {
    window.open(tag);
  }
  componentDidMount = () => {
    let tag = this.props.location.pathname.split('/')[2];
    this.props.dispatch(getNewsList(tag));
  }
  render() {
    return (
      <div id="listDiv">
        <ol className="list">{this.props.homeReducer.repo_data && this.props.homeReducer.repo_data.sources &&
          this.props.homeReducer.repo_data.sources.map((element, index) =>
            <li className="listLi" key={index} onClick={() => this.changeUrl(element.url)}>
              {/* {element.urlToImage ?  <img id="image" src={element.urlToImage} /> :  <img id="image" src={require("../../assets/images/blank.jpg")} />} */}
              <a>
                <h3 id="title">{element.name}</h3>
                <p id="description">{element.description}</p>
              </a>
            </li>
          )
        }
        </ol>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
}

export default connect(state => state, mapDispatchToProps)(NewsLists);
