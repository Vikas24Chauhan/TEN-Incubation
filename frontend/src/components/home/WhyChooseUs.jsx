import React, { useState } from "react";
import "./WhyChooseUs.css";
import ChooseImage1 from "../../assets/images/why-choose-us1.webp";
import ChooseImage2 from "../../assets/images/why-choose-us2.jpg";
import ChooseImage3 from "../../assets/images/why-choose-us3.png";
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
      ans: "Our influential and varied ecosystem is made to support and advance companies, entrepreneurs, and early-stage concepts. Our services cover a wide range of crucial areas to guarantee a smooth startup experience, including finance, infrastructure assistance, open-access research and prototyping facilities, commercial, intellectual property, and regulatory consultation services, specialist resource centers, and mentorship expertise.",
    },
    {
      image: ChooseImage2,
      ques: "Mentoring Expertise",
      ans: "One of the few incubators in India that can help businesses in challenging fields including engineering, materials science, renewable energy, life sciences, and agriculture is Venture Center. In addition to our extensive network of more than 200 technical, business, and other specialized mentors, we also have a robust in-house mentoring team under the direction of Dr. Premnath Venugopalan, which is renowned for its depth and thought leadership.",
    },
    {
      image: ChooseImage3,
      ques: "Track record",
      ans: "Over 750 entrepreneurs have benefited from our 17 years of devoted service, and the fact that more than 85% of the firms we have helped are still operating today attests to the effectiveness of our incubation efforts. The significant market presence of our startups is another important metric. With more than Rs. 700 crore in investment raised by our incubatees, almost 100 items created by our companies have successfully entered the market, demonstrating the promise of their innovations.",
    },
    {
      image: ChooseImage4,
      ques: "Stimulating Environment",
      ans: "Pune's lively, scholarly environment is enhanced by Venture Center's closeness to some of India's top academic and research institutions that conduct cutting-edge research and innovation. Along with finding priceless mentorship and role models within our vibrant ecosystem, Venture Center offers a robust peer network of motivated, like-minded entrepreneurs.",
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
