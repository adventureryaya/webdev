import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './SearchBar';
class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filtereddata: []
    };
  }
  componentDidMount() {
    if (this.props.match.params.category === undefined) {
      axios.get('http://localhost:5000/posts').then(res => this.setState({
        data: res.data,
        filtereddata: res.data
      }));
    }
    else {
      axios.get(`http://localhost:5000/posts/${this.props.match.params.category}`).then(res => this.setState({
        data: res.data,
        filtereddata: res.data
      }));
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname === this.props.location.pathname) {
      return;
    }
    if (this.props.match.params.category === undefined) {
      axios.get('http://localhost:5000/posts').then(res => this.setState({
        data: res.data,
        filtereddata: res.data
      }));
    }
    else {
      axios.get(`http://localhost:5000/posts/${this.props.match.params.category}`).then(res => this.setState({
        data: res.data,
        filtereddata: res.data
      }));
    }
  }
  handleSearch(e, searchstring){
    e.preventDefault();
    let filterdata = [];
    this.state.data.forEach(element => {
      let filteredstring = element.title.search(searchstring);
      if(filteredstring !== -1){
        filterdata.push(element);
      }
    });
    this.setState({
      filtereddata: filterdata
    })
  }
  render() {
    return (
      <div id="MainContentContainer">
        <SearchBar handleSearch={this.handleSearch.bind(this)}></SearchBar>
        <div id="MainContent">
          {this.state.filtereddata.map((item, i) =>
            <NavLink key={i} to={`/posts/${item.category}/${item.post_id}`}>
              <div id="post">
                <div id="title">{item.title}</div>
                <div id="maincontent">{item.content}</div>
                <div id="maincontenttimestamp">{item.timestamp}</div>
              </div>
            </NavLink>
          )}
        </div>
      </div>
    );
  }
}
export default MainContent;

/*
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal () {
    this.setState({ showModal: true });
    console.log("aaa");
  }

  handleCloseModal () {
    this.setState({ showModal: false });
    console.log("bbb");
  }

<ReactModal
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
</ReactModal>
*/