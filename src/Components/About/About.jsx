import React from "react";
import './About.css';

import profileImage from '../../assets/my-image.jpg'
import aboutInfo from "../../assets/info/aboutInfo";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about">
                <div className="about-left">
                    <img src={profileImage} alt="My image" />
                </div>
                <div className="about-right">
                    <div className="about-paragraph">
                        {Object.values(aboutInfo).map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;