import React from "react";
import './Navbar.css';

const Navbar = () => {
    return <div className="navbar">
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