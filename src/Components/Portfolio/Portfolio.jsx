import React from "react";
import './Portfolio.css';

import themePattern from "../../assets/theme_pattern.svg";
import projectInfo from "../../assets/info/projectInfo";

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-title">
                <h1>Portfolio</h1>
                <img src={themePattern} alt="Theme Pattern" />
            </div>
            <div className="portfolio">
                {Object.values().map((card, idx) => {

                })}
            </div>
        </div>
    )
}

export default Portfolio;