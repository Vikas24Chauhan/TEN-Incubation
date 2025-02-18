import React from "react";
import "./About.css";
import AboutImage1 from "../../assets/images/aboutImage1.webp";
import AboutImage2 from "../../assets/images/aboutImage2.jpg";
import AboutImage3 from "../../assets/images/aboutImage3.webp";
import AboutImage4 from "../../assets/images/aboutImage4.jpg";
import AboutImage5 from "../../assets/images/aboutImage5.jpg";
import AboutFocus1 from "../../assets/images/aboutFocus1.png";
import AboutFocus2 from "../../assets/images/aboutFocus2.png";
import AboutFocus3 from "../../assets/images/aboutFocus3.png";
import AboutFocus4 from "../../assets/images/aboutFocus4.png";

const About = () => {
  const cardData = [
    {
      image: AboutImage1,
      tag: "History and Milestones",
    },
    {
      image: AboutImage2,
      tag: "Life at VC",
    },
    {
      image: AboutImage3,
      tag: "Awards and Recognition",
    },
    {
      image: AboutImage4,
      tag: "Corporate Governance",
    },
    {
      image: AboutImage5,
      tag: "Our People",
    },
  ];

  const whatWeDo = [
    {
      tag: "New venture creation",
      desc: "Create the conditions and chances for entrepreneurs, financiers, and know-how suppliers to connect and create business teams in order to spark new ventures.",
    },
    {
      tag: "Funding and investment",
      desc: "Provide and make accessible a range of early-stage finance alternatives for creative businesses. Find out more.",
    },
    {
      tag: "Knowledge sharing",
      desc: "For the benefit of the greater innovation ecosystem, plan and conduct a range of events for networking, inspiration, training, information exchange, and showcasing.",
    },
    {
      tag: "Business incubation",
      desc: "Create and manage an effective business incubator that provides funding, specialized advisory services, networks, scientific and information resources, infrastructure support, business mentoring, access to scientific support, and a generally welcoming, comfortable, and encouraging environment to help businesses through their start-up phase.",
    },
    {
      tag: "Innovation management",
      desc: "Encourage collaborations and initiatives that help advance the transfer of concepts from academics to business.",
    },
    {
      tag: "Innovation ecosystem",
      desc: "Provide deep tech entrepreneurs with a rich, varied, ongoing, and cooperative innovation ecosystem.",
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
          We are the top technological business incubator for science and
          technology businesses in India, having won several awards.
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
          Under CSIR's "Scheme for setting up incubation centers in CSIR
          laboratories," the National Chemical Laboratory launched the Venture
          Center project.
        </p>
        <br />
        <p>
          Under Section 25 of the Companies Act of 1956 (currently Section 8 of
          the Companies Act of 2013), Venture Center was established as the
          "Entrepreneurship Development Center," and we are an authorized
          incubator of both the Department of Biotechnology's (DBT) and the
          Department of Science and Technology's (DST-NSTEDB) National Science
          and Technology Entrepreneurship Development Board.
        </p>
      </div>

      <div className="about-mission-vision">
        <div className="mission-box">
          <h2>Mission</h2>
          <br />
          <p>
            To establish and support globally recognized innovative projects
            from India that use science and technology-led solutions to address
            the most urgent issues facing the globe.
          </p>
        </div>
        <div className="vision-box">
          <h2>Vision</h2>
          <br />
          <p>
            To be the company recognized for establishing, forming, and
            maintaining a "Pune cluster" of cutting-edge technology companies
            that have a major economic influence on a regional, national, global
            worldwide throughout the ensuing two decades (Venture Center was
            established on January 10, 2007).
          </p>
        </div>
      </div>

      <div className="about-section">
        <h2>Who we are</h2>
        <p>
          We are the top technological business incubator for science and
          technology businesses in India, having won several awards. The
          National Chemical Laboratory launched the Venture Center as part of
          the CSIR program. entitled "Scheme for setting up incubation centers
          in CSIR laboratories" .
          <br />
          Under Section 25 of the Companies Act, 1956 (now Section 8 under the
          Companies Act, 2013), Venture Center was established as a
          "Entrepreneurship Development Center." We are an authorized incubator
          of the Department of Biotechnology's (DBT) Biotechnology Industry
          Research Assistance Council (BIRAC) and the National Science and
          Technology Entrepreneurship Development Board (DST-NSTEDB) of the
          Department of Science and Technology, Government of India.
        </p>
      </div>

      <div className="about-cards">
        {cardData.map((data, index) => (
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
            Our main objective is to support innovative businesses and spin-offs
            from research and development organizations.
            <br />
            Although we are not sector specific, the following general areas'
            science-based technologies are where we excel:
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
        <h1>
          What if none of the aforementioned industries apply to your idea?
        </h1>
        <p>Keep an eye out for the new industries we are developing:</p>
        <p>
          Defense, advanced medical biotechnology, renewable energy and climate
          action, digital/IT sensors, electronic wearables, food security, the
          circular economy, and carbon capture, use, and storage (CCUS) energy
          control.
        </p>
      </div>
    </div>
  );
};

export default About;
