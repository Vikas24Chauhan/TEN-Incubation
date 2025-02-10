import React from "react";
import "./Services.css";
import Services_Card from "../../assets/data/servicesData.js";
import bgImg from "../../assets/images/servicesbgimage.jpg";

export default function Services() {
  return (
    <>
      <div className="page-hero">
        <div className="image">
          <picture>
            <img
              src={bgImg}
              alt="Services_Hero"
            />
          </picture>
          <span className="overlay"></span>
        </div>

        <div className="content">
          <div className="content-wrapper">
            <h1 className="page-title">Services</h1>
            <ul className="breadcrumb">
              <li >
                <a href="/">Home</a>
              </li>
              <li >
                <a href="/services"style={{ color: "rgb(200, 195, 57)" }}>Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="services-container">
        
        <p className="services-description">
          Elevate your startup journey with our diverse services, including
          comprehensive scientific support for R&D, prototyping facilities to
          bring ideas to life, world-class analytical measurements, advisory and
          consulting services for navigating challenges, and seamless
          infrastructure solutions for a swift operational launch. We cater to
          individuals, organizations, and researchers with a commitment to
          empowering innovation and accelerating success.
        </p>
        <div className="services-card">
          {Services_Card.map(({ id, image, title, desc, link }) => (
            <a href={link}>
              <div key={id} className="service-item">
                <img
                  src={image}
                  alt={title}
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
