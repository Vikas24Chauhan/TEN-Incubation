import React from "react";
import "./BusinessAdvisory.css";
import { BusinessAdvisory_Card } from "../../assets/data/servicesData";
import { NavLink } from "react-router-dom";

function BusinessAdvisory() {
  return (
    <>
      <div className="business-advisory-div">
        <div className="business-advisory-header">
          <h1>Business Advisory & Consulting</h1>
        </div>
      </div>

      <div className="business-advisory-navigation">
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
