import React from "react";
import './Hero.css';

import profileImg from '../../assets/my-image.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <img src={profileImg} alt="My image" />
            <h1><span> I'm Kacper Górski</span>, Software Engineer based in Poland.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, reprehenderit?</p>
            <div className="hero-action">
                <div className="hero-connect">Connect</div>
                <div className="hero-resume">Resume</div>
            </div>
        </div>
    )
}

export default Hero;