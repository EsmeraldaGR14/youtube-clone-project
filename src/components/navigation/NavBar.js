import React from "react";
import { NavLink } from "react-router-dom";
import YouTubeLogo from "./image/red-white-preview.jpeg";

import "./NavBar.css";
function NavBar() {
  return (
    <div className="nav_bar">
      <img className="logo" src={YouTubeLogo} alt="YouTube Logo" />

      {/* <h2>Youtube</h2> */}
      <div className="eachNav">
        <h3>
          <NavLink to="/">Home</NavLink>
        </h3>
        <h3>
          <NavLink to="/about">About</NavLink>
        </h3>
      </div>
    </div>
  );
}

export default NavBar;
