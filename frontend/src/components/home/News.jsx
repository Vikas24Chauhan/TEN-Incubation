import React, { useRef } from "react";
import "./News.css";
import PreviousIcon from "../../assets/images/previous-icon.svg";
import NextIcon from "../../assets/images/next-icon.svg";
import newsData from "../../assets/data/news";

function News() {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(".home-news-card");
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
    <div className="home-news">
      <div className="home-news-header">
        <h1>News</h1>
        <div className="home-news-icons">
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
      <div className="home-news-cards" ref={carouselRef}>
        {newsData.map((data, index) => (
          <div key={index} className="home-news-card">
            <div className="home-news-card-header">
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

export default News;
