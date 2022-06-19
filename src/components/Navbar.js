import React from "react";
import { Link } from "react-router-dom";
import icon from './icon.png'
import "../App.css";


function Navbar() {
    return(
        <div className="Navbar">
          <div className="leftside">
          <div className="links">
          <Link exact to="/">Home</Link>
            <Link to="/donate">Donate Here</Link>
            <Link to="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="rightside"> 
          <img src={icon} alt=""/>
          <Link className="link" to="/contact">LetEarthLive</Link>
          </div>
        </div>
    )
}

export default Navbar;