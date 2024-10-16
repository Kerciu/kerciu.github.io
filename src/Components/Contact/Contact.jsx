import React from "react";
import './Contact.css';

import themePattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import callIcon from "../../assets/call_icon.svg";
import locationIcon from "../../assets/location_icon.svg";

import contactInfo from "../../assets/info/contactInfo";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-title">
                <h1>Contact</h1>
                <img src={themePattern} alt="Theme Pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's get in touch</h1>
                    <p>{contactInfo.contactDesc}</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={locationIcon} alt="Location Icon" />
                            <p>{contactInfo.location}</p>
                        </div>
                        <div className="contact-detail">
                            <img src={mailIcon} alt="Mail Icon" />
                            <p>{contactInfo.mail}</p>
                        </div>
                        <div className="contact-detail">
                            <img src={callIcon} alt="Call Icon" />
                            <p>{contactInfo.call}</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name.." name="name"/>

                    <label htmlFor="">Your Name</label>
                    <input type="email" placeholder="Enter your email.." name="email"/>

                    <label htmlFor="">Your Message</label>
                    <textarea name="message" rows={8} placeholder="Enter your message.."></textarea>

                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;