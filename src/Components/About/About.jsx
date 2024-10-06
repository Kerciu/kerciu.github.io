import React from "react";
import './About.css';

import profileImage from '../../assets/my-image.jpg'

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
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur odio culpa nobis dolore, alias pariatur?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita adipisci commodi in! Ab assumenda, molestiae aperiam earum dolorem atque quo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;