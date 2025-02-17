import React from "react";
import "./footer.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-details">
          <h4>Incubation & Support</h4>
          <ul>
            <li>
              <NavLink to="/incubation-support/preIncubation">
                Pre-Incubation
              </NavLink>
            </li>
            <li>
              <NavLink to="/incubation-support/virtualIncubation">
                Virtual Incubation
              </NavLink>
            </li>
            <li>
              <NavLink to="/incubation-support/residentIncubation">
                Resident Incubation
              </NavLink>
            </li>
            <li>
              <NavLink to="/incubation-support/softLandingProgram">
                Soft Landing Program
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-details">
          <h4>Funding</h4>
          <ul>
            <li>
              <NavLink to="/funding/fellowships">Fellowships</NavLink>
            </li>
            <li>
              <NavLink to="/funding/grants">Grants</NavLink>
            </li>
            <li>
              <NavLink to="/funding/seeds">Seed Investments</NavLink>
            </li>
            <li>
              <NavLink to="/funding/csr">
                Corporate Social Responsibility
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-details">
          <h4>Services</h4>
          <ul>
            <li>
              <NavLink to="/services/scientific-services-and-facilities">
                Scientific Services & Facilities
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/prototyping-facility-and-support">
                Prototyping Facility & Support
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/analytical-measurements-and-certifications">
                Analytical Measurements & Certifications
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/advisory-and-consulting">
                Business Advisory & Consulting
              </NavLink>
            </li>
            <li>
              <NavLink to="/services/infrastructural-support-services">
                Infrastructural support services
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-details contact-info">
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
          {/* <div className="newsletter">
            <h4>Newsletter Signup</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Email" />
              <button>Submit</button>
            </div>
          </div> */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright @2025, The Entrepreneurship Network, Noida, India.</p>
        <p>
          Developed by <span>Incubation & VC Team.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
