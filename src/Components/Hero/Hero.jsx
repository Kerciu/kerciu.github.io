import React from "react";
import { Link }from "react-scroll";
import './Hero.css';

import profileImg from '../../assets/my-image.jpg';
import resume from "../../assets/files/resume.pdf";

const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profileImg} alt="My image" />
            <h1><span> I'm Kacper Górski</span>, Software Engineer based in Poland.</h1>
            <p>I am a Software Engineer based in Warsaw, Poland, currently pursuing a Bachelor's degree in Computer Science at the Warsaw University of Technology.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <Link to="contact" smooth={true} duration={500}>Connect With Me</Link>
                </div>
                <div className="hero-resume"><a href={resume} download={true}>Resume</a></div>
            </div>
        </div>
    )
}

export default Hero;