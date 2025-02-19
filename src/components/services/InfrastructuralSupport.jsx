import React from "react";
import "./InfrastructuralSupport.css";
import { InfrastructuralSupport_Card } from "../../assets/data/servicesData";

function InfrastructuralSupport() {
  return (
    <>
      <div className="infrastructural-support-div">
        <div className="infrastructural-support-header">
          <h1>Infrastructural support services</h1>
        </div>
      </div>

      <div className="infrastructural-support-para">
        <p>
          With our all-inclusive infrastructure assistance, which is intended to
          foster creativity and teamwork right away, you can empower your
          startup journey.
        </p>
      </div>

      <div className="infrastructural-support-card">
        {InfrastructuralSupport_Card.map((data) => (
          <a>
            <div key={data.id} className="infrastructural-support-item">
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

export default InfrastructuralSupport;
