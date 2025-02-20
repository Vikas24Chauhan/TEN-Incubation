import React from "react";
import { ServiceFacilities_Card } from "../../assets/data/servicesData.js";
import "./ServiceFacilities.css";
import { NavLink } from "react-router-dom";

export default function ServiceFacilities() {
  return (
    <>
      <div className="service-facilities-div">
        <div className="service-facilities-header">
          <h1>Scientific Services & Facilities</h1>
        </div>
      </div>

      <div className="service-facilities-navigation">
        <NavLink to="/services">Back</NavLink>
        <NavLink to="/services/scientific-services-and-facilities">
          Scientific Services & Facilities
        </NavLink>
        <NavLink to="/services/analytical-measurements-and-certifications">
          Analytical Measurements & Certifications
        </NavLink>
        <NavLink to="/services/advisory-and-consulting">
          Business Advisory & Consulting
        </NavLink>
        <NavLink to="/services/infrastructural-support-services">
          Infrastructural support services
        </NavLink>
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
