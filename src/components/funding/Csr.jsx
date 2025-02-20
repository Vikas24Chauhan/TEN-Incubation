import React from "react";
import "./Csr.css";
import { NavLink } from "react-router-dom";

const Funding = () => {
  return (
    <>
      <div className="csr-content">
        <div className="csr-header">
          <h1>Corporate Social Responsibility</h1>
        </div>

        <div className="csr-navigation">
          <NavLink to="/funding">Back</NavLink>
          <NavLink to="/funding/fellowships">Fellowships</NavLink>
          <NavLink to="/funding/grants">Grants</NavLink>
          <NavLink to="/funding/seeds">Seed Investments</NavLink>
          <NavLink to="/funding/csr">Corporate Social Responsibility</NavLink>
        </div>

        <div className="csr-para">
          <h1>Partner with Venture Center for Your CSR Initiatives</h1>
        </div>

        <div className="csr-main-page-content">
          <div className="csr-info">
            <h1>Background</h1>
            <p>
              Large corporations are required by Section 135 of the Companies
              Act of 2013 to allocate 2% of their average net income to CSR
              initiatives.
            </p>
            <p>
              By collaborating with Venture Center, your business not only
              satisfies its CSR responsibilities but also joins a vibrant
              environment that fosters innovation. We at Venture Center are
              experts at transforming scientific and technology breakthroughs
              into successful, impact-driven businesses, and working with us
              enables you to take advantage of Venture Center's networks and
              experience to increase the scope of your CSR initiatives.
            </p>
            <p>
              You can select from a variety of cooperation possibilities offered
              by us. To achieve the goals of your business and Venture Center,
              the staff at Venture Center will be pleased to collaborate with
              you to develop the CSR project plan.
            </p>

            <h1>How can you get started?</h1>
            <p>
              The Entrepreneurship Development Center, also known as the Venture
              Center, is a non-profit technology business incubator housed
              within an academic institution that has received Central
              Government approval and is therefore qualified under Section 135,
              Schedule 7 of the Companies Act of 2013. Refer to Schedule VII,
              item (ix).
            </p>
            <p>
              To plan and discuss your CSR initiatives, get in touch with
              Venture Center. We would be pleased to talk about this via a
              teleconference or in person. We can be reached at the following
              contact information:
            </p>
            <p>
              Please let us know what your company's CSR policy prioritizes.
              Please think about incorporating the following goals into your CSR
              policy if you are still working on it:
            </p>

            <h1>Examples</h1>
            <ol>
              <li>
                Support the development and incubation of new and innovative
                technologies at technology incubators within academic
                organizations
              </li>
              <li>
                Support entrepreneurship skills development especially for
                technology incubation/advancement via inventive entrepreneurs,
                women entrepreneurs and social enterprises.
              </li>
              <li>
                Support public libraries focused on innovation and
                entrepreneurship.
              </li>
              <li>
                Support the creation of specialized facilities for technology
                incubation and thus enhance the innovation eco-system in
                academic organization
              </li>
            </ol>

            <h1>Participating Companies</h1>
            <ul>
              <li>Expanded Polymer Systems Pvt. Ltd</li>
              <li>e-Infochips Private Limited</li>
              <li>Cipla Foundation</li>
              <li>HDFC Bank Ltd.</li>
              <li>Asian Paints Limited</li>
              <li>Persistent Foundation</li>
              <li>Cognizant Foundation</li>
              <li>Kirloskar Brothers Ltd.</li>
              <li>Electronica Finance Limited (EFL)</li>
              <li>Bharat Seats Limited </li>
              <li>Garware Fulflex India </li>
              <li>Other CSR Projects: EMVOLIO </li>
              <li>Technip India </li>
              <li>Cummins Foundation</li>
              <li>Pubmatic India Pvt. Ltd. </li>
              <li>Bajaj Auto Ltd. </li>
              <li>Intox Pvt. Ltd. (see FY: 2017-18 | FY: 2018-19)</li>
              <li>Indus Biotech Pvt. Ltd. </li>
              <li>
                International Biotech Park Ltd (IBPL) (see FY: 2017-18 | FY:
                2018-19)
              </li>
              <li>Eppendorf </li>
              <li>LexInnova </li>
              <li>Praj Foundation</li>
              <li>Thoughtworks </li>
            </ul>
          </div>

          <aside>
            <div>
              <h4>Contact</h4>
              <p>
                <strong>Seed Fund Team</strong>
              </p>
              <p className="email">
                Email: <a href="#">info@entrepreneurshipnetwork.net</a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Funding;
