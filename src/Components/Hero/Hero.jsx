import React from "react";
import './Hero.css';

import profileImg from '../../assets/my-image.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <img src={profileImg} alt="My image" />
            <h1><span> I'm Kacper Górski</span>, Software Engineer based in Poland.</h1>
            <p>I am a Software Engineer based in Warsaw, Poland, currently pursuing a Bachelor's degree in Computer Science at the Warsaw University of Technology.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect</div>
                <div className="hero-resume">Resume</div>
            </div>
        </div>
    )
}

export default Hero;