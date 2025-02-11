import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-div">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-content">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4881512003035!2d77.313256!3d28.585129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45f132958f7%3A0x47a2083ee333fea0!2sBlock-B%2C%20B9%2C%20B%20Block%2C%20Sector%202%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1721295588605!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-popups"
          ></iframe>
        </div>

        <div className="contact-address">
          <h2>
            India accelerator,
            <br />
            Noida 201301 UP, India
          </h2>
          <h2>
            Email: <span>info@entrepreneurshipnetwork.net</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
