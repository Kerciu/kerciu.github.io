import React from "react";
import './Hero.css';

import profileImg from '../../assets/my-image.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <img src={profileImg} alt="My image" />
            <h1>Hi, I am Kacper Górski, Software Engineer based in Poland</h1>
        </div>
    )
}

export default Hero;