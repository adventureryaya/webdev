import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class SideBar extends Component {
  render() {
    return (
      <div id="SideBar">
        <NavLink to="/posts/art">Art</NavLink>
        <NavLink to="/posts/code">Code</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    );
  }
}

export default SideBar;