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
          Venture Center offers exciting employment and consulting opportunities
          for those who resonate with our mission and goals. Whether you're
          passionate about supporting technology innovators, entrepreneurs, and
          startups, or eager to be part of the dynamic teams within our
          startups, we have roles that allow you to make a meaningful impact.
        </p>
        <p>
          Explore opportunities to work directly with Venture Center or
          collaborate with our innovative startups, all while contributing to a
          thriving ecosystem built on a strong "service" ethos and a commitment
          to success.
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
