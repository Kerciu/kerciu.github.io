import React from "react";
import Marquee from "./Marquee";

import './Skills.css';
import themePattern from "../../assets/theme_pattern.svg";

const Skills = () => {
    return (
        <div id="skills" className="skills-container">
            <div className="skills-title">
                <h1>Skills</h1>
                <img src={themePattern} alt="Theme Pattern" />
            </div>
            <div className="skills">
                <Marquee />
            </div>
        </div>
    )
}

export default Skills;