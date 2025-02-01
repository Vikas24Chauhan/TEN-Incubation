import React from "react";
import "./About.css";
import AboutImage1 from "../../assets/images/aboutimage1.jpg";
import AboutFocus1 from "../../assets/images/aboutFocus1.png";
import AboutFocus2 from "../../assets/images/aboutFocus2.png";
import AboutFocus3 from "../../assets/images/aboutFocus3.png";
import AboutFocus4 from "../../assets/images/aboutFocus4.png";

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

  const whatWeDo = [
    {
      tag: "New venture creation",
      desc: "Nucleate new business by creating the environment and opportunities for know-how providers, entrepreneurs and financiers to meet each other and form business teams.",
    },
    {
      tag: "Funding and investment",
      desc: "Create and make available a continuum of early stage funding options for inventive enterprises Know more",
    },
    {
      tag: "Knowledge sharing",
      desc: "Organize and deliver a variety of events for information sharing, inspiration, training, showcasing and networking for the benefit of the larger innovation ecosystem.",
    },
    {
      tag: "Business incubation",
      desc: "Nurture businesses through their start-up phase by creating and running an efficient business incubator offering business mentoring, infrastructure support, access to scientific support, funding,  specialized advisory services, networks, scientific and information resources, and a generally friendly, conducive and supportive environment.",
    },
    {
      tag: "Innovation management",
      desc: "Facilitate activities and partnerships that support and promote the translation of ideas from academia to industry.",
    },
    {
      tag: "Innovation ecosystem",
      desc: "Develop and make available a rich, diverse, continuous and collaborative innovation ecosystem for deep tech entrepreneurs.",
    },
  ];

  const focusAreas = [
    {
      image: AboutFocus1,
      tag: "Health and Rehabilition",
    },
    {
      image: AboutFocus2,
      tag: "Energy and Environment",
    },
    {
      image: AboutFocus3,
      tag: "Engineering and Automation",
    },
    {
      image: AboutFocus4,
      tag: "Agriculture and Nutrition",
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
          <h2>Mission</h2>
          <br />
          <p>
            To nucleate and nurture world-leading inventive ventures out of
            India that solve the world's most pressing problems with science and
            technology-led interventions.
          </p>
        </div>
        <div className="vision-box">
          <h2>Vision</h2>
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

      <div className="about-do-focus">
        <div className="about-do">
          <h2>What we do</h2>
          <div className="about-do-cards">
            {whatWeDo.map((data, index) => (
              <div key={index} className="about-do-card">
                <h3>{data.tag}</h3>
                <p>{data.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-focus">
          <h2>Focus Areas</h2>
          <p>
            We focus on promoting inventive enterprises and spin-offs from
            <br />
            R&D institutions. We are sector agnostic but our strengths
            <br />
            lie in science based technologies in the following broad sectors:
          </p>
          <div className="about-focus-cards">
            {focusAreas.map((data, index) => (
              <div key={index} className="about-focus-card">
                <img src={data.image} alt="" />
                <p>{data.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-last">
        <h1>What if your idea doesn’t belong to any of the above sectors?</h1>
        <p>Watch out for the emerging sectors in our pipeline:</p>
        <p>
          Circular economy, defense, food security, advanced medical
          biotechnology, climate action/clean energy, digital/IT sensors,
          electronic wearables, carbon capture, utilization and storage (CCUS)/
          energy management.
        </p>
      </div>
    </div>
  );
};

export default About;
