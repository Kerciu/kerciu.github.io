import React from "react";
import socialMediaIcons from "../../assets/info/socialMediaIcons";

import './Footer.css';

const Footer = () => {
    return <div className="footer">
        <div className="icons-container">
            {socialMediaIcons.map((soc, idx) => {
                return <a key={idx} className="socmed-icon" href={soc.link} target="_blank">
                    <img src={soc.path} alt="Social media icon" />
                    </a>
            })}
        </div>
        <div className="copyright">@{new Date().getFullYear()} Kacper Górski, All Rights Reserved</div>
    </div>
}

export default Footer;