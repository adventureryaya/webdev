import React, { Component } from 'react';
class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchstring: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({searchstring: event.target.value})
  }
  render() {
    return (
      <div id="SearchBar">
        <form onSubmit={(e) => this.props.handleSearch(e, this.state.searchstring)}>
            <img src="/images/searchicon.svg" id="searchicon" alt=""></img>
            <input type="search" id="searchbar" placeholder="Search" onChange={this.handleChange}></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;