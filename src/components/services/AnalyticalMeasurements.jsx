import React from "react";
import "./AnalyticalMeasurements.css";
import { AnalyticalMeasurements_Card } from "../../assets/data/servicesData.js";
import { NavLink } from "react-router-dom";

function AnalyticalMeasurements() {
  return (
    <>
      <div className="analytical-measurements-div">
        <div className="analytical-measurements-header">
          <h1>Analytical Measurements & Certifications</h1>
        </div>
      </div>

      <div className="analytical-measurements-navigation">
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

      <div className="analytical-measurements-card">
        {AnalyticalMeasurements_Card.map((data) => (
          <a>
            <div key={data.id} className="analytical-measurements-item">
              <img src={data.image} alt={data.title} />
              <h2>{data.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default AnalyticalMeasurements;
