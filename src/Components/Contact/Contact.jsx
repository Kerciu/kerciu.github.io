import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import './Contact.css';

import themePattern from "../../assets/theme_pattern.svg";
import mailIcon from "../../assets/mail_icon.svg";
import callIcon from "../../assets/call_icon.svg";
import locationIcon from "../../assets/location_icon.svg";

import contactInfo from "../../assets/info/contactInfo";

const Contact = () => {

    const [result, setResult] = useState("");
    const [isLoading, setLoading] = useState(false);
    const recaptchaRef = useRef(null);

    const onSubmit = async (event) => {
        event.preventDefault();

        const captchaValue = recaptchaRef.current.getValue();
        if (!captchaValue) {
            setResult("Please complete the CAPTCHA.");
            return;
        }

        setLoading(true);
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "bf1f07e5-fce3-4257-a8c9-93fcb0bab28f"); // static page, no backend so hardcoded
        formData.append("g-recaptcha-response", captchaValue);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form submitted successfully!");
                event.target.reset();
                recaptchaRef.current.reset();
            } else {
                console.log("Error: ", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setResult("An error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div id="contact" className="contact">
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
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name.." name="name" required/>

                    <label htmlFor="">Your Name</label>
                    <input type="email" placeholder="Enter your email.." name="email" required/>

                    <label htmlFor="">Your Message</label>
                    <textarea name="message" rows={8} placeholder="Enter your message.." required></textarea>

                    <div className="submit-container">
                        <button type="submit" className="contact-submit">Submit now</button>
                        <ReCAPTCHA
                            className="recaptcha-submit"
                            ref={recaptchaRef}
                            sitekey="6LewDXcqAAAAAHhB8q_Sc6rw31315THMuhwIxadJ"
                            theme="dark"
                        />
                    </div>
                    {isLoading && <div className="spinner"></div>}
                    <p>{result}</p>
                </form>
            </div>
            {result && <p>{result}</p>}
        </div>
    )
}

export default Contact;