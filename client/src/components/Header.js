import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div id="Header">
        <NavLink to="/" id="logo">Logo</NavLink>
        <span id="searchbar">Search</span>
      </div>
    );
  }
}

export default Header;