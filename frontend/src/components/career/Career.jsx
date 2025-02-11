import React from "react";
import "./Career.css";
import careerImage1 from "../../assets/images/career-image1.jpg";
import careerImage2 from "../../assets/images/career-image2.jpg";

function Career() {
  const cardData = [
    {
      image: careerImage1,
      tag: "Work with Venture Center",
    },
    {
      image: careerImage2,
      tag: "Work with our StartUps",
    },
  ];

  return (
    <div className="career-div">
      <div className="career-header">
        <h1>Careers</h1>
      </div>

      <div className="career-para">
        <h2>Join Our Innovation Ecosystem</h2>
        <p>
          For those who share our aim and objectives, Venture Center provides
          interesting job and consultancy possibilities. Whether you have a
          strong desire to assist entrepreneurs, IT innovators, and businesses,
          or interested in joining the vibrant teams inside our startups, we
          have positions that let you contribute significantly.
        </p>
        <p>
          Investigate options to work directly with Venture Center or partner
          with our creative entrepreneurs, all while supporting a flourishing
          ecosystem based on a dedication to and a strong "service" mentality.
          to achievement.
        </p>
      </div>

      <div className="career-cards">
        {cardData.map((data, index) => (
          <div key={index} className="career-card">
            <img src={data.image} alt="" />
            <h2>{data.tag}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;
