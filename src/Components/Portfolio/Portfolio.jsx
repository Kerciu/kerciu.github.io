import React from "react";
import './Portfolio.css';

import themePattern from "../../assets/theme_pattern.svg";
import projectInfo from "../../assets/info/projectInfo";
import arrowIcon from "../../assets/arrow_icon.svg";

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-title">
                <h1>Portfolio</h1>
                <img src={themePattern} alt="Theme Pattern" />
            </div>
            <div className="portfolio">
                {projectInfo.map((project, idx) => {
                    return <div key={idx} className="project-format">
                        <h3>{project.pNum}</h3>
                        <h2>{project.pName}</h2>
                        <p>{project.pDesc}</p>
                        <div className="project-srccode">
                            <p>Source Code</p>
                            <a href={project.pLink} target="_blank"><img src={arrowIcon} alt="Arrow Icon" /></a>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Portfolio;