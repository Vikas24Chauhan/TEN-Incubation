import React from "react";
import img from "../../assets/images/Services & Facilitiesbg.jpg";
import { ServiceFacilities_Card } from "../../assets/data/servicesData.js";
import "./ServiceFacilities.css";

export default function ServiceFacilities() {
  return (
    <>
      <div className="page-hero">
        <div className="image">
          <picture>
            <img src={img} alt="Services_Hero" />
          </picture>
          <span className="overlay"></span>
        </div>
      </div>

      <div className="services-container">
        <div className="link-container">
          <ul className="links">
            <li>
              <a href="/services" style={{ backgroundColor: "#80792c" }}>
                Back
              </a>
            </li>
            <li>
              <a
                href="/services/scientific-services-and-facilities"
                style={{ backgroundColor: "#7295c6" }}
              >
                Scientific Services & Facilities
              </a>
            </li>
            <li>
              <a href="">Prototyping Facility & Support</a>
            </li>
            <li>
              <a href="">Analytical Measurements & Certifications</a>
            </li>
            <li>
              <a href="">Business Advisory & Consulting</a>
            </li>
            <li>
              <a href="">Infrastructural Support Services</a>
            </li>
          </ul>
        </div>

        <h1>Scientific Services & Facilities</h1>
        <div className="services-card">
          {ServiceFacilities_Card.map(({ id, image, title, link }) => (
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
                <h2 style={{ paddingBottom: "100px" }}>{title}</h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
