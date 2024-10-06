import React from "react";
import Marquee from "./Marquee";

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="skills-title">
                <h1>Skills</h1>
            </div>
            <div className="skills">
                <Marquee />
            </div>
        </div>
    )
}

export default Skills;