import React from "react";
import './Portfolio.css';

import themePattern from "../../assets/theme_pattern.svg";

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-title">
                <h1>Portfolio</h1>
                <img src={themePattern} alt="Theme Pattern" />
            </div>
            <div className="portfolio">
                
            </div>
        </div>
    )
}

export default Portfolio;