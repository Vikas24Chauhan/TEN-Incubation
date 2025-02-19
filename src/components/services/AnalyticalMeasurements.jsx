import React from "react";
import "./AnalyticalMeasurements.css";
import { AnalyticalMeasurements_Card } from "../../assets/data/servicesData.js";

function AnalyticalMeasurements() {
  return (
    <>
      <div className="analytical-measurements-div">
        <div className="analytical-measurements-header">
          <h1>Analytical Measurements & Certifications</h1>
        </div>
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
