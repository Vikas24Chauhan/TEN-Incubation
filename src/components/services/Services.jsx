import React from "react";
import "./Services.css";
import Services_Card from "../../assets/data/servicesData.js";

export default function Services() {
  return (
    <>
      <div className="services-main-div">
        <div className="services-main-header">
          <h1>Services</h1>
        </div>
      </div>

      <div className="services-main-para">
        <h2>Various startup services to help you succeed</h2>
        <p>
          Enhance your startup experience with our array of services, which
          include world-class analytical measures, advising and development
          services, prototyping facilities to bring ideas to life, and full
          scientific assistance for R&D. integrated infrastructure solutions for
          a quick operational start and advisory services for overcoming
          obstacles. We serve researchers, businesses, and individuals who are
          dedicated to fostering innovation and boosting achievement.
        </p>
      </div>

      <div className="services-main-card">
        {Services_Card.map((data) => (
          <a href={data.link}>
            <div key={data.id} className="services-main-item">
              <img src={data.image} alt={data.title} />
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
