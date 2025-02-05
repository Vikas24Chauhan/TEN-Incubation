import { useRef } from "react";
import "./Home.css";
import WhyChooseUs from "./WhyChooseUs";
import PreviousIcon from "../../assets/images/previous-icon.svg";
import NextIcon from "../../assets/images/next-icon.svg";
import homeLatest from "../../assets/data/homeLatest";

function Home() {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelector(".home-latest-card");
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
    <div className="home-container">
      {/* <div className="home-header">
        
      </div> */}

      <div className="home-about">
        <div className="home-about-video">
          <iframe
            className="rounded-2xl"
            width="100%"
            height="100%"
            marginHeight="1"
            src="https://www.youtube.com/embed/I9562hY3fGg?si=Foi2PSOs8M_U2pMy"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="home-about-contant">
          <h1>About Venture Center</h1>
          <p>
            India's largest technology incubator hosted by CSIR’s National
            Chemical Laboratory, has aided over 750 science-based startups since
            its inception in December 2006. The incubator offers a robust
            innovation ecosystem, providing comprehensive support like
            mentoring, funding, scientific assistance, incubation, and
            specialized resource centers. As an approved incubator by
            DST-NSTEDB, Venture Center collaborates with organizations including
            BIRAC, DST, Atal Innovation Mission, MeitY, and the Defence
            Innovation Organisation, demonstrating its commitment to nurturing
            startups at different lifecycle stages.
          </p>
          <button>Tell me more</button>
        </div>
      </div>

      <div className="home-latest">
        <div className="home-latest-header">
          <h1>Latest at Venture Center</h1>
          <div className="home-latest-icons">
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
        <div className="home-latest-cards" ref={carouselRef}>
          {homeLatest.map((data, index) => (
            <div key={index} className="home-latest-card">
              <img src={data.image} alt="Latest" />
              <h3>{data.date}</h3>
              <h2>{data.tag}</h2>
              <p>{data.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <WhyChooseUs />
    </div>
  );
}

export default Home;
