import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-div">
      <div className="about-header">
        <h1>About Us</h1>
      </div>
      <div className="about-para">
        <p>
          We are India’s award-winning leading technology business incubator for
          science and technology startups.
        </p>
      </div>

      <div className="about-video-container">
        <iframe
          width="100%"
          height="100%"
          marginHeight="1"
          src="https://www.youtube.com/embed/I9562hY3fGg?si=Foi2PSOs8M_U2pMy"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
