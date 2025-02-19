import React from "react";
import "./BusinessAdvisory.css";
import { BusinessAdvisory_Card } from "../../assets/data/servicesData";

function BusinessAdvisory() {
  return (
    <>
      <div className="business-advisory-div">
        <div className="business-advisory-header">
          <h1>Business Advisory & Consulting</h1>
        </div>
      </div>

      <div className="business-advisory-para">
        <p>
          Offering a wide range of internal consulting services, we are
          committed to helping business owners, associations, and innovators
          overcome obstacles pertaining to intellectual property, financing, and
          the source and commercialization of technology, among other important
          aspects.
        </p>
      </div>

      <div className="business-advisory-card">
        {BusinessAdvisory_Card.map((data) => (
          <a>
            <div key={data.id} className="business-advisory-item">
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

export default BusinessAdvisory;
