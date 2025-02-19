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
        {ServiceFacilities_Card.map((data) => (
          <a>
            <div key={data.id} className="service-facilities-item">
              <img src={data.image} alt={data.title} />
              <h2>{data.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
