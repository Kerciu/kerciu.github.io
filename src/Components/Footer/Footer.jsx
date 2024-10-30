import React from "react";
import socialMediaIcons from "../../assets/info/socialMediaIcons";

const Footer = () => {
    return <div className="footer-container">
        {socialMediaIcons.map((soc, idx) => {
            console.log(soc);
            return <a key={idx} href={soc.link}><img src={soc.path} alt="Social media icon" /></a>
        })}
    </div>
}

export default Footer;