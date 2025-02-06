import React, { useRef } from "react";
import "./Blog.css";
import PreviousIcon from "../../assets/images/previous-icon.svg";
import NextIcon from "../../assets/images/next-icon.svg";
import blogData from "../../assets/data/blogData";

function Blog() {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(".home-blog-card");
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
    <div className="home-blog">
      <div className="home-blog-header">
        <h1>Blog</h1>
        <div className="home-blog-icons">
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
      <div className="home-blog-cards" ref={carouselRef}>
        {blogData.map((data, index) => (
          <div key={index} className="home-blog-card">
            <img src={data.image} alt="blog" />
            <h3>{data.date}</h3>
            <h2>{data.tag}</h2>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
