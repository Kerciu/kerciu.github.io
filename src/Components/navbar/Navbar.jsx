import React from "react";
import './Navbar.css';

import themePattern from "../../assets/theme_pattern.svg";

const Navbar = () => {
    return <div className="navbar">
        <div className="nav-logo">
            <div className="nav-logo-name">Kacper</div>
            <img src={themePattern} alt="Theme Pattern" />
        </div>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About me</li>
            <li>Skills</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">
            Connect With Me
        </div>
    </div>
};

export default Navbar;