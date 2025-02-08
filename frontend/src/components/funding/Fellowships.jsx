import React from "react";
import { Link } from "react-router-dom"; 
import "./Fellowships.css";
import FellowshipImage1 from "../../assets/images/fellowshipimage1.jpg";
import FellowshipImage2 from "../../assets/images/fellowshipimage2.jpg";
import FellowshipImage3 from "../../assets/images/fellowshipimage3.png";

const Funding = () => {
  const fundingData = [
    {
      image: FellowshipImage1,
      para: "Under the SPARSH (Social Innovation Programme for Products: Affordable & Relevant to Societal Health) program, DBT-BIRAC is funding this initiative. This plan emphasizes the need for creative answers to the most important issues facing society. The plan addresses significant societal concerns and presents fresh concepts for extensive reform.",
      tag: "Social Innovation Immersion Program(SIIP)",
      route: "/funding/fellowships",
    },
    {
      image: FellowshipImage2,
      para: "This DST-sponsored initiative encourages enterprising people to take risks and go after bold business concepts. In order to support their entrepreneurial career objectives and dreams, this program offers creative entrepreneurs fantastic opportunity to grow their networks and receive critical feedback on their endeavors. ",
      tag: "NIDHI Entrepreneur-in- Residence (EIR)",
      route: "/funding/grants",
    },
    {
      image: FellowshipImage3,
      para: "The goal of the BFI-BIOME Fellowships is to develop and assist a group of innovative, enterprising individuals who are eager to work on developing answers for significant healthcare issues.",
      tag: "BFI-BIOME Fellowship at Venture Center",
      route: "/funding/seed-investments",
    }
  ];

  return (
    <div className="fellowship-div">
      <header className="fellowship-header">
        <h1>Fellowships</h1>
      </header>

      <section className="fellowship-para">
        <p>
        The Social Innovation Immersion Program (SIIP), the NIDHI-EIR Fellowship, and the BFI-BIOME Fellowship are the three exciting fellowship programs that Venture Center offers.
        </p>
        <h5>
        SIIP focuses on sustainable projects that tackle social issues, whereas the NIDHI-EIR (Entrepreneur in Residence) Program promotes entrepreneurs to transform knowledge-based ideas into successful businesses while lowering risks and fostering networking opportunities for aspiring innovators.
</h5>
      </section>

      <div className="fellowship-cards">
        {fundingData.map((data, index) => (
          <Link to={data.route} key={index} className="fellowship-card-link">
            <div className="fellowship-card">
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
