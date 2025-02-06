import { useRef } from "react";
import "./Home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import HomeHeaderImage1 from "../../assets/images/home-header-image1.jpg";
import HomeHeaderImage2 from "../../assets/images/home-header-image2.png";
import PreviousIcon from "../../assets/images/previous-icon.svg";
import NextIcon from "../../assets/images/next-icon.svg";
import homeLatest from "../../assets/data/homeLatest";
import LetsTalk from "../../assets/images/let's-talk.svg";
import Impact1 from "../../assets/images/impact1.png";
import Impact2 from "../../assets/images/impact2.png";
import Impact3 from "../../assets/images/impact3.png";
import Impact4 from "../../assets/images/impact4.png";
import Impact5 from "../../assets/images/impact5.png";
import Impact6 from "../../assets/images/impact6.png";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const impactData = [
    {
      image: Impact1,
      number: "750+",
      title: "Entrepreneurs supported till date",
    },
    {
      image: Impact2,
      number: "1700 Cr+",
      title: "Total revenue generated by our startups in the last 8 years",
    },
    {
      image: Impact3,
      number: "85%",
      title: "Startups still active",
    },
    {
      image: Impact4,
      number: "140+",
      title: "Unique families of patents filed by our startups",
    },
    {
      image: Impact5,
      number: "700 Cr+",
      title: "Total Risk capital mobilized by our startups in the last 8 years",
    },
    {
      image: Impact6,
      number: "55%",
      title: "Startups with atleast one woman founder",
    },
  ];

  return (
    <div className="home-container">
      <div className="home-header">
        <Slider {...settings}>
          <div className="home-header-image">
            <img src={HomeHeaderImage1} alt="Slide 1" />
            <div className="home-header-content">
              <h1>India's top incubator for inventive startups</h1>
              <p>From Concept to Market</p>
              <button className="home-header-button">Get Started</button>
            </div>
          </div>

          <div className="home-header-image">
            <img src={HomeHeaderImage2} alt="Slide 2" />
            <div className="home-header-content">
              <h1>Seeding tomorrow's enterprises today</h1>
              <p>Translate your ideas into successful businesses.</p>
              <button className="home-header-button">Learn More</button>
            </div>
          </div>
        </Slider>
      </div>

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

      <div className="home-journey">
        <h1>Excited to start your journey?</h1>
        <h1>
          Let's Talk{" "}
          <span>
            <img src={LetsTalk} alt="" />
          </span>
        </h1>
      </div>

      <div className="home-impact">
        <h1>Impact</h1>
        <div className="home-impact-cards">
          {impactData.map((data, index) => (
            <div key={index} className="home-impact-card">
              <div className="home-impact-image">
                <img src={data.image} alt="" />
              </div>
              <div className="home-impact-contant">
                <h2>{data.number}</h2>
                <h3>{data.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Testimonials />
    </div>
  );
}

export default Home;
