import React from "react";
import "./Programs.css";
import programsData from "../../assets/data/programsData";

function Programs() {
  return (
    <div className="programs-div">
      <div className="programs-header">
        <h1>Programs</h1>
      </div>

      <div className="programs-cards">
        {programsData.map((service) => (
          <div key={service.id} className="programs-card">
            {/* Conditional Rendering */}
            {service.id % 2 == 0 ? (
              <>
                <div className="programs-even">
                  <div className="programs-image">
                    <img src={service.image} alt="Image" />
                  </div>
                  <div className="about-programs">
                    <h3>{service.name}</h3>
                    <p>{service.about}</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="programs-odd">
                  <div className="about-programs">
                    <h3>{service.name}</h3>
                    <p>{service.about}</p>
                  </div>
                  <div className="programs-image">
                    <img src={service.image} alt="Image" />
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
