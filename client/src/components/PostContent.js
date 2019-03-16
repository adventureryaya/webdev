import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
class PostContent extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/posts/${this.props.match.params.category}/${this.props.match.params.post_id}`).then(res => this.setState({
      data: res.data
    }));
  }
  render() {
    return (
      <div id="MainContentContainer">
        <SearchBar></SearchBar>
        <div id="MainContent">
          {this.state.data.map((item, i) =>
            <div key={i} id="post">
              <div id="title">{item.title}</div>
              <div id="maincontent">{item.content}</div>
            </div>
          )}
        </div>
      </div>

    );
  }
}

export default PostContent;