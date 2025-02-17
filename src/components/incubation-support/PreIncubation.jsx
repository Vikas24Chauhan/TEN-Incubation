import "./PreIncubation.css";

export default function PreIncubation() {
  return (
    <>
      <div className="preIncubation-content">
        <div className="preIncubation-header">
          <h1>Pre Incubation</h1>
        </div>
        <div className="content">
          <div className="incubationSupportnav">
            <div class="in-page-nav">
              <a class="back" href="/incubation-support">
                Back
              </a>
              <a class="current" href="/incubation-support/preIncubation">
                Pre-incubation
              </a>
              <a class="" href="/incubation-support/virtualIncubation">
                Virtual Incubation
              </a>
              <a class="" href="/incubation-support/residentIncubation">
                Resident Incubation
              </a>
              <a class="" href="/incubation-support/softLandingProgram">
                Soft Landing Program
              </a>
            </div>
            <div className="main-page-content">
              <article>
                <h4>
                  <strong>
                    Ignition and Kickstart, two separate pre-incubation programs
                    offered by Venture Center, are designed to develop and
                    advance technology initiatives that have the potential to
                    become stand-alone startup enterprises.
                  </strong>
                </h4>
                <h5>
                  In order to provide the conditions for prosperous new
                  endeavors, the objective is to reduce uncertainty, de-risk
                  technology, and close important gaps.
                </h5>
                <hr />
                <h3>Membership Criteria & Eligibility</h3>
                <ul>
                  <li>
                    Technology initiatives in their early stages that have
                    significant economic potential.
                  </li>
                  <li>Ideally with already-filed provisional patents.</li>
                  <li>
                    <strong>Category 1 </strong> (Pre-Incorporation):
                  </li>
                  <ul>
                    <li>
                      Clear commitment to creating a startup if Ignition yields
                      positive results.
                    </li>
                    <li>Key team member committed to venture creation.</li>
                    <li>No existing company.</li>
                  </ul>
                  <li>
                    <strong>Category 2 </strong> (Young Start-ups):
                  </li>
                  <ul>
                    <li>Less than 3 years old.</li>
                    <li>Technology-focused and knowledge-intensive.</li>
                  </ul>
                </ul>
                <p>
                  The stage of your project and your unique requirements will
                  determine whether you choose Ignition or Kickstart. Kickstart
                  prioritizes market access and company planning, whereas
                  Ignition concentrates on technological readiness.{" "}
                </p>
                <p>
                  Make an informed choice for a fruitful pre-incubation journey
                  with Venture Center by going over the main activities of each
                  program to assess your eligibility and project goals.
                </p>
                <h4>Key Activities During The Program</h4>
                <h5>Ignition</h5>
                <ul>
                  <li>Technology/IPR strategy and evaluation.</li>
                  <li>
                    Value proposition sharpening and target application
                    identification.
                  </li>
                  <li>Definition of proof-of-concept studies.</li>
                  <li>Support in obtaining funds for POC research.</li>
                </ul>
                <h5>Kickstart</h5>
                <ul>
                  <li>Mentorship for business planning.</li>
                  <li>
                    Collaboration with technology providers and market experts.
                  </li>
                  <li>Soft pitching to potential investors.</li>
                  <li>Relevant activities from the Ignition program.</li>
                </ul>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <span>
                  <a href="#">Terms And Conditions</a>
                </span>
                <br />
                <br />
                <br />
                <span>
                  <a href="#">Apply</a>
                </span>
              </article>
              <aside>
                <div>
                  <h4>Contact</h4>
                  <p>
                    <strong>Incubation Team</strong>
                  </p>
                  <p className="email">
                    Email: <a href="#">managerincubator@venturecenter.co.in</a>
                    <br />
                    <br />
                    Phone: <a href="#">+91 9172232211</a>
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
