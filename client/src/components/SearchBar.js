import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class SearchBar extends Component {
  render() {
    return (
      <div id="SearchBar">
        <form>
            <img src="/images/searchicon.svg" id="searchicon"></img>
            <input type="search" id="searchbar" placeholder="Search"></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;