import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../css/navbar.css";
export default function NavBarLinks() {
  return (
    <div className="navbar">
      <span>
        <Link to="/home" className="navBar-element">
          Home
        </Link>
      </span>
      <span>
        <Link to="/search" className="navBar-element">
          Search
        </Link>
      </span>
      <span>
        <Link to="/favourites" className="navBar-element">
          Favourites
        </Link>
      </span>
      <div id="nasaLogo">
      <span>
        <img
          src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
          width="50"
          height="50"
        />
      </span>
      </div>
    </div>
  );
}
