import React from "react";
import "./About.css";
import AboutImage1 from "../../assets/images/aboutimage1.jpg";

const About = () => {
  const dummyData = [
    {
      image: AboutImage1,
      tag: "History and Milestones",
    },
    {
      image: AboutImage1,
      tag: "Life at VC",
    },
    {
      image: AboutImage1,
      tag: "Awards and Recognition",
    },
    {
      image: AboutImage1,
      tag: "Corporate Governance",
    },
    {
      image: AboutImage1,
      tag: "Our People",
    },
  ];

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

      <div className="about-overview">
        <h2>Overview</h2>
        <p>
          Venture Center was set up as an initiative of the National Chemical
          Laboratory under CSIR's scheme titled "Scheme for setting up
          incubation centers in CSIR laboratories".
        </p>
        <br />
        <p>
          Venture Center was incorporated as “Entrepreneurship Development
          Center” under Section 25 of the Companies Act, 1956 (now Section 8
          under the Companies Act, 2013), and we are an approved incubator of
          the National Science and Technology Entrepreneurship Development Board
          of the Department of Science and Technology, Government of India
          (DST-NSTEDB) and Department of Biotechnology’s (DBT) .
        </p>
      </div>

      <div className="about-mission-vision">
        <div className="mission-box">
          <h1>Mission</h1>
          <br />
          <p>
            To nucleate and nurture world-leading inventive ventures out of
            India that solve the world's most pressing problems with science and
            technology-led interventions.
          </p>
        </div>
        <div className="vision-box">
          <h1>Vision</h1>
          <br />
          <p>
            To be the organization that will be credited with creating, shaping,
            and sustaining a "Pune cluster" of innovative technology businesses
            with a significant economic impact regionally, nationally, and
            globally within the next 20 years (Venture Center was founded on
            10th Jan 2007).
          </p>
        </div>
      </div>

      <div className="about-section">
        <h2>Who we are</h2>
        <p>
          We are India’s award-winning leading technology business incubator for
          science and technology startups. Venture Center was set up as an
          initiative of the National Chemical Laboratory under CSIR's scheme
          titled "Scheme for setting up incubation centers in CSIR
          laboratories".
          <br />
          Venture Center was incorporated as “Entrepreneurship Development
          Center” under Section 25 of the Companies Act, 1956 (now Section 8
          under the Companies Act, 2013), and we are an approved incubator of
          the National Science and Technology Entrepreneurship Development Board
          of the Department of Science and Technology, Government of India
          (DST-NSTEDB) and Department of Biotechnology’s (DBT) Biotechnology
          Industry Research Assistance Council (BIRAC).
        </p>
      </div>

      <div className="about-cards">
        {dummyData.map((data, index) => (
          <div key={index} className="about-card">
            <img src={data.image} alt="" />
            <h2>{data.tag}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
