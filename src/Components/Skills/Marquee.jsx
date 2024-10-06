import React from "react";

import marqueeCards from "../../assets/info/marqueeCards";

const Marquee = () => {
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {marqueeCards.map(item => (
                    <div key={item.id} className="item">
                        <img src={item.iconPath} alt={item.label} />
                        <div className="label">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Marquee;