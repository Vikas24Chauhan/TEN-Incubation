import React from "react";
import { Link } from "react-router-dom"; 
import "./Grants.css";
import grantImage1 from "../../assets/images/grantsimage1.jpg";
import grantImage2 from "../../assets/images/grantsimage2.jpg";
import grantImage4 from "../../assets/images/grantsimage3.jpg";
import grantImage3 from "../../assets/images/grantsimage4.jpg";

const Funding = () => {
  const fundingData = [
    {
      image: grantImage1,
      para: "Through initiatives like NIDHI-PRAYAS, the Department of Science & Technology's National Initiative for Developing and Harnessing Innovations (NIDHI) assists idea-stage entrepreneurs. The grant program serves idea-stage business owners that need assistance with prototyping and have a tangible product offering. Grant-in-aid is available for prototype development up to Rs. 10 lakhs.",
      tag: "NIDHI-PRAYAS",
      route: "/funding/fellowships",
    },
    {
      image: grantImage2,
      para: "The biggest early-stage biotech funding program in India is a BIRAC flagship project. BIG provides cash grants of up to INR 5 million (USD 70,000) to creative ideas for a maximum of 18 months in an effort to promote idea generation, confirm proof of concept, and encourage the establishment of businesses.",
      tag: "Biotechnology Ignition Grant",
      route: "/funding/grants",
    },
    {
      image: grantImage3,
      para: "Through focused interventions, Kickstarter Initiatives projects (KI Project) seek to assist healthcare technology entrepreneurs in filling important gaps in their technology advancement, de-risking, validation, and implementation initiatives.",
      tag: "BFI-BIOME Kickstarter Initiative",
      route: "/funding/seed-investments",
    },
    {
      image: grantImage4,
      para: "CSR awards for entrepreneurs and new businesses",
      tag: "CSR grants",
      route: "/funding/seed-investments",
    }
  ];

  return (
    <div className="grants-div">
      <header className="grants-header">
        <h1>Grants</h1>
      </header>

      <section className="grants-para">
        <p>
        Use our funding to investigate entrepreneurship and innovation.
        </p>
      </section>

      <div className="grants-cards">
        {fundingData.map((data, index) => (
          <Link to={data.route} key={index} className="grants-card-link">
            <div className="grants-card">
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
