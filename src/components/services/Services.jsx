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
        <h2>Diverse startup services for success</h2>
        <p>
          Elevate your startup journey with our diverse services, including
          comprehensive scientific support for R&D, prototyping facilities to
          bring ideas to life, world-class analytical measurements, advisory and
          consulting services for navigating challenges, and seamless
          infrastructure solutions for a swift operational launch. We cater to
          individuals, organizations, and researchers with a commitment to
          empowering innovation and accelerating success.
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
