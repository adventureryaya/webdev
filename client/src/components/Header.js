import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div id="Header">
        <div id="logocontainer">
        <NavLink to="/" id="logo"></NavLink>
        </div>
      </div>
    );
  }
}

export default Header;