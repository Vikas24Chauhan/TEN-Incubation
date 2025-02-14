import React from "react";
import "./footer.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Corporate Presentation</h4>
                    <h4>Regulatory Services</h4>
                    <h4>Intellectual Property Services</h4>
                    <h4>Tenders</h4>
                </div>

                <div className="footer-section">
                    <h4>Technology Transfer Office</h4>
                    <h4>Medtech Cleanroom</h4>
                    <h4>Prototyping Facility & Support</h4>
                    <h4>Venture Center Library</h4>
                </div>

                <div className="footer-section">
                    <h4>Funding Database</h4>
                    <h4>Center for Biopharma Analysis</h4>
                </div>

                <div className="footer-section contact-info">
                    <h4>Contact</h4>
                    <p>India accelerator,</p>
                    <p>Noida 201301 UP, India</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/company/the-entrepreneurship-network/posts/?feedView=all">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:info@entrepreneurshipnetwork.net">
                            <FaEnvelope />
                        </a>
                    </div>
                    <div className="newsletter">
                        <h4>Newsletter Signup</h4>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Email" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright @2025, The Entrepreneurship Network, Noida, India.</p>
                <p>Developed by <span>Incubation & VC Team.</span></p>
            </div>
        </footer>
    );
};

export default Footer;
