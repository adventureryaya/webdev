import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class SideBar extends Component {
  render() {
    return (
      <div id="SideBar">
        <NavLink className="sidebarposts" to="/posts/art"><span>Art</span></NavLink>
        <NavLink className="sidebarposts" to="/posts/code"><span>Code</span></NavLink>
        <NavLink className="sidebarposts" to="/posts/resources"><span>Resources</span></NavLink>
        <NavLink className="sidebarposts" to="/posts/music"><span>Music</span></NavLink>
        <span className="contactme">Contact me!</span>
        <a className="contactmecontents" href="mailto:atelyaya@gmail.com">atelyaya@gmail.com</a>
        <a href="http://www.github.com/adventureryaya" className="contactmecontents">Github</a>
      </div>
    );
  }
}

export default SideBar;