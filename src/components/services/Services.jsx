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
        {Services_Card.map(({ id, image, title, desc, link }) => (
          <a href={link}>
            <div key={id} className="services-main-item">
              <img src={image} alt={title} />
              <h2>{title}</h2>
              <p>{desc}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
