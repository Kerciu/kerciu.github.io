import React, {useState} from "react";

import './Marquee.css';

import marqueeCards from "../../assets/info/marqueeCards";

const Marquee = () => {

    const [isPaused, setPaused] = useState(false);

    return (
        <div className="marquee-container"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
            <div className={`marquee-content ${isPaused ? 'paused' : ''}`}>
                {marqueeCards.map(item => (
                    <div key={item.id} className="item">
                        <img src={item.iconPath} alt={item.label} />
                        <div className="label">{item.label}</div>
                    </div>
                ))}
                {marqueeCards.map(item => (
                    <div key={item.id + '-duplicate'} className="item">
                        <img src={item.iconPath} alt={item.label} />
                        <div className="label">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Marquee;