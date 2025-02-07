import React from "react";
import "./Funding.css";
import FundingImage1 from "../../assets/images/fundingImage2.jpg";
import FundingImage2 from "../../assets/images/fundingImage3.jpg";
import FundingImage3 from "../../assets/images/fundingImage4.jpg";
import FundingImage4 from "../../assets/images/fundingImage5.jpg";

const Funding = () => {
  const dummyData = [
    {
      image: FundingImage1,
      para: "minimizes risks, offsets opportunity costs, and provides a platform for supporting entrepreneurial career aspirations in an effort to encourage people to pursue entrepreneurship. Read about the ways Venture Center can support you along the way.",
      tag: "Fellowships",
    },
    {
      image: FundingImage2,
      para: "intended to accelerate the development of innovative concepts into working prototypes, encourage experimentation, address global issues, and act as a springboard for the eventual establishment of ventures.",
      tag: "Grants",
    },
    {
      image: FundingImage3,
      para: "The investment strategy places a strong emphasis on creating resources for new businesses, encouraging co-investment, and making use of Venture Center's network for branding, community, and mentoring. There is a strong commitment to helping entrepreneurs reach important benchmarks and enabling further funding rounds.",
      tag: "Seed Investments",
    },
    {
      image: FundingImage4,
      para: "Possibilities provided by big corporations who collaborate with us to carry out their CSR initiatives",
      tag: "Corporate Social Responsibility",
    },
  ];
  return (
    <div className="funding-div">
      <header className="funding-header">
        <h1>Funding</h1>
      </header>

      <section className="funding-para">
        <p>
          The Venture Center offers entrepreneurs with creative concepts,
          inventions, and technologies a variety of funding possibilities.
        </p>
        <button>Inquire about available funding</button>
      </section>

      <div className="funding-cards">
        {dummyData.map((data, index) => (
          <div key={index} className="funding-card">
            <img src={data.image} alt={data.tag} />
            <h3>{data.tag}</h3>
            <p>{data.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Funding;
