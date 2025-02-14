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
      desc: "We came to Venture Center with an idea and a will to execute our vision. Venture Center provided us with the infrastructure and initial capital to do that. Dr. Premnath also infused strategic thinking into us around Intellectual Property, stakeholder management and networking. They also invested in our subsequent funding rounds. Without Venture Centers help we would not have been able to execute our vision.",
      name: "Tanuj Gigras, Founder",
      company: "Nayam Innovations 1",
    },
    {
      desc: "We came to Venture Center with an idea and a will to execute our vision. Venture Center provided us with the infrastructure and initial capital to do that. Dr. Premnath also infused strategic thinking into us around Intellectual Property, stakeholder management and networking. They also invested in our subsequent funding rounds. Without Venture Centers help we would not have been able to execute our vision.",
      name: "Tanuj Gigras, Founder",
      company: "Nayam Innovations 2",
    },
    {
      desc: "We came to Venture Center with an idea and a will to execute our vision. Venture Center provided us with the infrastructure and initial capital to do that. Dr. Premnath also infused strategic thinking into us around Intellectual Property, stakeholder management and networking. They also invested in our subsequent funding rounds. Without Venture Centers help we would not have been able to execute our vision.",
      name: "Tanuj Gigras, Founder",
      company: "Nayam Innovations 3",
    },
    {
      desc: "We came to Venture Center with an idea and a will to execute our vision. Venture Center provided us with the infrastructure and initial capital to do that. Dr. Premnath also infused strategic thinking into us around Intellectual Property, stakeholder management and networking. They also invested in our subsequent funding rounds. Without Venture Centers help we would not have been able to execute our vision.",
      name: "Tanuj Gigras, Founder",
      company: "Nayam Innovations 4",
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
