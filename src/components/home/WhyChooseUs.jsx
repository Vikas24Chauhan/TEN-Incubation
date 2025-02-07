import React, { useState } from "react";
import "./WhyChooseUs.css";
import ChooseImage1 from "../../assets/images/why-choose-us1.jpg";
import ChooseImage2 from "../../assets/images/why-choose-us2.jpg";
import ChooseImage3 from "../../assets/images/why-choose-us3.jpg";
import ChooseImage4 from "../../assets/images/why-choose-us4.jpg";
import UpArrow from "../../assets/images/up-arrow.svg";
import DownArrow from "../../assets/images/down-arrow.svg";

function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first question
  const [activeQuestion, setActiveQuestion] = useState(0);

  const toggleQuestion = (id) => {
    setActiveQuestion((prev) => (prev === id ? null : id));
  };

  const whyChooseUsData = [
    {
      image: ChooseImage1,
      ques: "Complete Ecosystem",
      ans: "Our diverse and impactful ecosystem is designed to nurture and propel early-stage ideas, startups, and entrepreneurs. Our support spans across key areas to ensure that your startup journey is seamless: mentoring expertise, funding, infrastructure support, open-access scientific and prototyping facilities, business, IP & regulatory advisory services, specialized resource centers and so much more!",
    },
    {
      image: ChooseImage2,
      ques: "Mentoring Expertise",
      ans: "Venture Center is one of the very few incubators in India that can support startups in difficult domain areas such as life sciences, engineering, materials sciences, agriculture, and clean energy. Our strong in-house mentoring team led by Dr Premnath Venugopalan is known for its depth and thought leadership,and we also have a large network of over 200 technical, business and other specialist mentors.",
    },
    {
      image: ChooseImage3,
      ques: "Track record",
      ans: "We have supported over 750 entrepreneurs over 17 years of dedicated service, and over 85% of the startups we have supported are still active, affirm our impactful incubation activities. Another key indicator is the substantial presence of our startups in the market. Close to 100 products developed by our startups have successfully made their way into the market, with over Rs. 700 crore investment mobilized by our incubatees, validating the potential in their technologies.",
    },
    {
      image: ChooseImage4,
      ques: "Stimulating Environment",
      ans: "Venture Center is in close proximity to some of India’s leading academic and research organizations that engage in cutting-edge research and innovation, adding to Pune’s vibrant, academic atmosphere. At Venture Center, you can also benefit from the strong peer network of like-minded, driven entrepreneurs, and discover invaluable mentorship and role models within our dynamic ecosystem.",
    },
  ];

  return (
    <div className="home-choose">
      <h1>Why Choose Us?</h1>
      <div className="home-choose-box">
        <div className="home-choose-image">
          <img
            src={whyChooseUsData[activeQuestion].image}
            alt="Why Choose Us"
          />
        </div>

        <div className="home-choose-qa">
          {whyChooseUsData.map((data, index) => (
            <div
              key={index}
              className={`qa-card ${
                activeQuestion === index ? "qa-active-card" : ""
              }`}
              onClick={() => toggleQuestion(index)}
            >
              <h3>
                {data.ques}
                <span>
                  {activeQuestion === index ? (
                    <img src={UpArrow} />
                  ) : (
                    <img src={DownArrow} />
                  )}
                </span>
              </h3>
              {activeQuestion === index && <p>{data.ans}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
