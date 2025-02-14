import React from "react";
import seedinvestimg1 from "../../assets/images/seedinvestimg1.png";
import "./Seeds.css";

const Funding = () => {
  return (
    <>
    <div className="seeds-content">
        <div className="seeds-header">
            <h1>Seed Investments</h1>
        </div>
        <div className="content">
        <div className="seedssup">
            <div className="main-page-content">
                  <div className="submain">
                    <h1>
                    To empower and assist innovative early-stage startups by offering them catalytic funding that enables them to reach significant milestones, move past pivotal phases in their business development, and get ready for an institutional investment, angel investment, venture capital, or strategic investment round.
                    </h1>
                    <div className="buttons">
                    <button>Co-invest with us</button>
                    <button>Invest in our Portfolio Companies</button>
                   </div>
                          
           <div className="investpro">
            <h1>Investment Profile</h1>
            <p>Our goal is to support the development of innovative science startups from the ground up. We know that successful exits open the door for reinvesting in additional creative firms, even if we are patient investors. Cooperation with other investors is highly encouraged for our mutual benefit. </p>
            <ul>
              <li>Deeptech firms driven by science and technology; innovative businesses
              </li>
              <li>Sector-neutral investigations</li>
              <li>Any stage can be a startup.
              </li>
              <li>
              Size of ticket: about Rs 20–100 lakhs</li>
              <li>Investment in Equity</li>
            </ul>
            <p>
            Participate in the peer-to-peer network, branding, and community of Venture Center; access to the innovation ecosystem of Venture Center, which includes networks, resources, services, programs, mentors, and more; provide feedback and advice on choices made at the board level; assisting with upcoming investment rounds.
            </p>
            <button>Explore our Portfolio</button>
           </div>

   <div className="fundingschemes">
    <h1>Funding Schemes</h1>
    <div className="boxes">
       <div className="subbox">
        <h1>BIRAC SEED Fund</h1>
        <p>A seed grant under the Biotechnology Industry Research Assistance Council's ("SEED Fund") "Sustainable Entrepreneurship and Enterprise Development Fund" program (BIRAC). The maximum amount of funding available to a single startup will be Rs 30 lakh.</p>
        <button>Learn more</button>
       </div>
       <div className="subbox">
        <h1>BIRAC LEAP Fund</h1>
        <p>A fund under the Biotechnology Industry Research Assistance Council's "LEAP (Launching Entrepreneurial Driven Affordable Products) Fund" (also known as the "BIRAC LEAP Fund"). The maximum amount of funding available to a single startup will be Rs 100 lakh.</p>
        <button>Learn more</button>
       </div>
       <div className="subbox">
        <h1>NIDHI Seed Support Scheme</h1>
        <p>
        A fund under the Department of Science and Technology's "National Initiative for Developing and Harnessing Innovations – Seed Support System (NIDHI-SSS)." The maximum amount of funding available to a single startup will be Rs 100 lakh.
          </p>
        <button>Learn more</button>
       </div>
       <div className="subbox">
        <h1>Start up India Seed fund</h1>
        <p>
        In order to help companies with proof of concept, prototype development, product trials, market entry, and commercialization, the Startup India Seed Fund Scheme (SISFS) was established. One start-up would receive up to Rs 20 lakh in grants and up to Rs 50 lakh in compulsory convertible debt (CCD) as financial aid.
          </p>
        <button>Learn more</button>
       </div>
       <div className="subbox">
        <h1>NSTEDB Seed Fund (Fully Invested)</h1>
        <p>
        A seed fund administered by the Department of Science and Technology's National Science & Technology Entrepreneurship Development Board (NSTEDB). Up to Rs 50 lakh in financial support was given to one startup.
          </p>
        <button>Learn more</button>
       </div>
       <div className="subbox">
        <h1>TDB Seed fund (Fully Invested)</h1>
        <p>
        A seed fund administered by the Department of Science and Technology's Technology Development Board (TDB). Up to Rs 25 lakh in financial support was given to one startup.
          </p>
        <button>Learn more</button>
       </div>
    </div>
   </div>

<div className="seedinvstimg">
  <img src={<seedinvestimg1/>}/>
</div>


                  </div>
                <aside>
                    <div>
                        <h4>Contact</h4>
                        <p><strong>Seed Fund Team</strong></p>
                        <p className="email">Email: <a href="#">funding@venturecenter.co.in</a>
                        <br />
                        <br />
                        Phone: <a href="#">+91-9156465104 | +91-8956457046</a></p>
                    </div>
                </aside>
            </div>
        </div>
        </div>
    </div>
</>
  );
};

export default Funding;
