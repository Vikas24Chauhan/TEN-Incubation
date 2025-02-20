import "./VirtualIncubation.css";
import { NavLink } from "react-router-dom";

export default function VirtualIncubation() {
  return (
    <>
      <div className="virtualIncubation-div">
        <div className="virtualIncubation-header">
          <h1>Virtual Incubation</h1>
        </div>

        <div className="virtualIncubation-content">
          <div className="virtualIncubation-navigation">
            <NavLink to="/incubation-support">Back</NavLink>
            <NavLink to="/incubation-support/preIncubation">
              Pre Incubation
            </NavLink>
            <NavLink to="/incubation-support/virtualIncubation">
              Virtual Incubation
            </NavLink>
            <NavLink to="/incubation-support/residentIncubation">
              Resident Incubation
            </NavLink>
            <NavLink to="/incubation-support/softLandingProgram">
              Soft Landing Program
            </NavLink>
          </div>

          <div className="virtualIncubation-page-content">
            <article>
              <h4>
                <strong>
                  Venture Center's Associate Incubatee Program (AIP) is designed
                  for science-based entrepreneurial businesses that are not
                  physically housed on our campus.
                </strong>
              </h4>
              <hr />
              <h3>Membership Criteria & Eligibility</h3>
              <p>
                Members of Venture Center's Associate Incubatee Program are
                chosen through a selective admissions process. Venture Center
                aims to make sure that every Associate Incubatee Program
                participant is connected to a science-led, ethically-driven
                business that has access to high-quality services, pertinent
                resources, and extensive networks. In this case, qualifying
                requirements consist of:
              </p>
              <h5>Selective Admission Criteria</h5>
              <ul>
                <li>
                  Eligible parties include individuals, start-ups, and
                  established businesses preparing to launch a new project.
                </li>
                <li>
                  Not-for-profit businesses and social entrepreneurs are also
                  qualified.
                </li>
                <li>
                  In keeping with the "innovation" ethos of the NCL Innovation
                  Park, business must be grounded in research.
                </li>
                <li>
                  Considerations include EHS and ethical factors, and the
                  company should be relatively early stage.
                </li>
                <li>Ineligibility for Residents:</li>
                <ul>
                  <li>The program is not available to resident incubatees.</li>
                </ul>
                <li>Tax and Funding Considerations: </li>
                <ul>
                  <li>
                    Members do not qualify for service tax benefits or
                    government concessions for resident incubate companies.
                  </li>
                  <li>
                    Funding programs may be reserved for resident incubatees,
                    and participation for Associate Incubatee Program (AIP)
                    members is subject to the decision of Scheme Managers and
                    the Investment Committee.
                  </li>
                </ul>
              </ul>

              <p>
                <strong>
                  By signing up for any of the programs listed below, a
                  candidate can become an Associate Incubatee.
                </strong>
              </p>

              <h5>1.Eklavya</h5>
              <p>
                Program for Mentoring and Advisory Assistance with Membership in
                the Library and IP Services.
              </p>
              <h5>2. Include Program</h5>
              <p>
                In partnership with CSIR-NCL and CSIR-800, Venture Center's
                social enterprise program is called INCLUDE. According to
                Venture Center, social enterprises are businesses that cater to
                societal needs, especially those of marginalized groups. They
                place a strong emphasis on for-profit financial sustainability,
                winning over stakeholders and investors with their social
                impact. Additionally, the initiative supports inclusive
                innovation by advancing technologies that realize Dr. RA
                Mashelkar's "More from Less for More" concept.
              </p>

              <p>
                In addition to discounts on scientific facilities and
                infrastructure support, INCLUDE members have access to the
                Eklavya Service.
              </p>
              <p>
                By using Address Service, which allows businesses to use the
                "NCL Innovation Park address," applicants can also become
                associate incubators. This covers basic reception services,
                email notifications, mailboxes, and postal addresses. The COO
                has the final say about this service.
              </p>
            </article>
            <aside>
              <div>
                <p>
                  <strong>Incubation Team</strong>
                </p>
                <p className="email">
                  Email: <a href="#">info@entrepreneurshipnetwork.net</a>
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
