import React from "react";
import { Link } from "react-router-dom"; 
import "./Funding.css";
import FundingImage1 from "../../assets/images/fundingImage2.jpg";
import FundingImage2 from "../../assets/images/fundingImage3.jpg";
import FundingImage3 from "../../assets/images/fundingImage4.jpg";
import FundingImage4 from "../../assets/images/fundingImage5.jpg";

const Funding = () => {
  const fundingData = [
    {
      image: FundingImage1,
      para: "Minimizes risks, offsets opportunity costs, and provides a platform for supporting entrepreneurial career aspirations...",
      tag: "Fellowships",
      route: "/funding/fellowships", 
    },
    {
      image: FundingImage2,
      para: "Intended to accelerate the development of innovative concepts into working prototypes...",
      tag: "Grants",
      route: "/funding/grants",
    },
    {
      image: FundingImage3,
      para: "The investment strategy places a strong emphasis on creating resources for new businesses...",
      tag: "Seed Investments",
      route: "/funding/seeds",
    },
    {
      image: FundingImage4,
      para: "Possibilities provided by big corporations who collaborate with us to carry out their CSR initiatives...",
      tag: "Corporate Social Responsibility",
      route: "/funding/csr",
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
        {fundingData.map((data, index) => (
          <Link to={data.route} key={index} className="funding-card-link">
            <div className="funding-card">
              <img src={data.image} alt={data.tag} />
              <h3>{data.tag}</h3>
              <p>{data.para}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Funding;
