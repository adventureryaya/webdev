import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div id="Header">
        <NavLink to="/" id="logo"></NavLink>
      </div>
    );
  }
}

export default Header;