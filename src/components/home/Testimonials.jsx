import React, { useRef } from "react";
import "./Testimonials.css";
import PreviousIcon from "../../assets/images/previous-icon.svg";
import NextIcon from "../../assets/images/next-icon.svg";

function Testimonials() {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(".home-testimonials-card");
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 30; // Adjust based on your CSS
        const scrollAmount = cardWidth + gap;

        carouselRef.current.scrollBy({
          left: direction === "next" ? scrollAmount : -scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  const testimonialsData = [
    {
      desc: "We approached the incubation center with a mere idea and a determination to succeed. They equipped us with the essential infrastructure and seed funding to begin our journey.",
      name: "User 1",
      company: "The Entrepreneurship Network",
    },
    {
      desc: "The expert mentorship we received was priceless, providing us with strategic advice on intellectual property, stakeholder management, and networking.",
      name: "User 2",
      company: "The Entrepreneurship Network",
    },
    {
      desc: "The center's investment in our later funding rounds allowed us to rapidly scale our operations.",
      name: "User 3",
      company: "The Entrepreneurship Network",
    },
    {
      desc: "The support from the incubation center was crucial in helping us realize our vision.",
      name: "User 4",
      company: "The Entrepreneurship Network",
    },
    {
      desc: "The collaborative atmosphere at the center made our team flourish and enabled us to tackle challenges effectively.",
      name: "User 5",
      company: "The Entrepreneurship Network",
    },
    {
      desc: "Connecting with industry leaders and potential investors through the center was immensely beneficial.",
      name: "User 6",
      company: "The Entrepreneurship Network",
    },
  ];

  return (
    <div className="home-testimonials">
      <div className="home-testimonials-header">
        <h1>Customer Testimonials</h1>
        <div className="home-testimonials-icons">
          <img
            onClick={() => handleScroll("prev")}
            src={PreviousIcon}
            alt="Previous"
          />
          <img
            style={{ marginLeft: "1rem" }}
            onClick={() => handleScroll("next")}
            src={NextIcon}
            alt="Next"
          />
        </div>
      </div>

      <div className="home-testimonials-cards" ref={carouselRef}>
        {testimonialsData.map((data, index) => (
          <div key={index} className="home-testimonials-card">
            <p>{data.desc}</p>
            <h2>{data.name}</h2>
            <h3>{data.company}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
