import React from "react";
import { ServiceFacilities_Card } from "../../assets/data/servicesData.js";
import "./ServiceFacilities.css";

export default function ServiceFacilities() {
  return (
    <>
      <div className="service-facilities-div">
        <div className="service-facilities-header">
          <h1>Scientific Services & Facilities</h1>
        </div>
      </div>

      <div className="service-facilities-card">
        {ServiceFacilities_Card.map(({ id, image, title, link }) => (
          <a href={link}>
            <div key={id} className="service-facilities-item">
              <img src={image} alt={title} />
              <h2>{title}</h2>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
