import React, { useRef } from "react";
import "./Event.css";
import PreviousIcon from "../../assets/images/previous-icon.svg";
import NextIcon from "../../assets/images/next-icon.svg";
import eventData from "../../assets/data/event";

function Event() {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(".home-event-card");
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

  return (
    <div className="home-event">
      <div className="home-event-header">
        <h1>Events</h1>
        <div className="home-event-icons">
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
      <div className="home-event-cards" ref={carouselRef}>
        {eventData.map((data, index) => (
          <div key={index} className="home-event-card">
            <div className="home-event-card-header">
              <button>Register Now</button>
              <h3>{data.date}</h3>
            </div>
            <h4>{data.tag}</h4>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
