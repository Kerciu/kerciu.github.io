import React, { useState } from "react";
import { Link } from "react-scroll";
import './Navbar.css';

import themePattern from "../../assets/theme_pattern.svg";
import menuOpen from "../../assets/menu_open.svg";
import menuClose from "../../assets/menu_close.svg";

const Navbar = () => {


    return <div className="navbar">
        <div className="nav-logo">
            <div className="nav-logo-name">Kacper</div>
            <img src={themePattern} alt="Theme Pattern" />
        </div>
        <img src={menuOpen} alt="Hamburger Menu" className="nav-mobile-open"/>
        <ul className="nav-menu">
            <img src={menuClose} alt="Close Hamburger Menu" className="nav-mobile-close" />
            <li>
                <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>About Me</Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>Skills</Link>
            </li>
            <li>
                <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>
        <div className="nav-connect">
            <Link to="contact" smooth={true} duration={500}>Connect With Me</Link>
        </div>
    </div>
};

export default Navbar;