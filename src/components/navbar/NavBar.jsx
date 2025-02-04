import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FiX, FiMenu } from "react-icons/fi";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../assets/images/Venture.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

function NavBar() {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);
    const handleClose = () => setNavOpen(false);

    return (
        <>
            {!navOpen && (


                <header className="navbar">
                    <div className="modal-header-content" style={{ display: "flex", alignItems: "center", width: "100%" }}>
                        <img src={logo} alt="logo" width={180} height={100} />
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}>
                            <div>
                                <div className="header1" style={{ marginBottom: "10px" }}>
                                    <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
                                        <li style={{ marginRight: "15px", alignItems: 'center' }}><Link to="/about-us">About Us</Link></li>
                                        <li style={{ marginRight: "15px" }}><Link to="/careers">Careers</Link></li>
                                        <li style={{ marginRight: "15px" }}><Link to="/contact">Contact</Link></li>
                                        <li style={{ marginRight: "15px" }}><Link to="/support-us">Support Us</Link></li>
                                    </ul>
                                </div>
                                <hr />
                                <div className="header2">
                                    <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
                                        <li style={{ marginRight: "15px" }}><Link to="/incubation-mentoring"><b>Incubation & Mentoring</b></Link></li>
                                        <li style={{ marginRight: "15px" }}><Link to="/funding"><b>Funding</b></Link></li>
                                        <li style={{ marginRight: "15px" }}><Link to="/services"><b>Services</b></Link></li>
                                        <li style={{ marginRight: "15px" }}><Link to="/programs"><b>Programs</b></Link></li>
                                        <li style={{ marginRight: "15px" }}><Link to="/startups"><b>Startups</b></Link></li>
                                        <li style={{ marginRight: "15px" }}><Link to="/events"><b>Events</b></Link></li>
                                    </ul>
                                </div>
                                <div className="header3">
                                    <ul>
                                        <li><Link to="/Incubate with us">Incubate with us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Button variant="link" className="menu-btn" onClick={toggleNav}>
                            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </Button>
                    </div>

                </header>
            )}

            {/* Modal for NavBar Content */}
            <Modal show={navOpen} fullscreen={true} onHide={handleClose}>
                <Modal.Header closeButton style={{ backgroundColor: "white" }}>
                    <div className="modal-header-content" style={{ display: "flex", alignItems: "center", width: "100%" }}>
                        <img src={logo} alt="logo" width={180} height={100} style={{ marginRight: "20px" }} />
                    </div>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "orange" }}>
                    <div className="nav-content">
                        <div className="nav-section">
                            <h3><b>Incubation & Mentoring</b></h3><br />
                            <ul>
                                <li><Link to="/pre-incubation">Pre-Incubation</Link></li><br />
                                <li><Link to="/virtual">Virtual</Link></li><br />
                                <li><Link to="/resident">Resident</Link></li>
                            </ul>
                        </div>
                        <div className="nav-section">
                            <h3><b>Funding</b></h3><br />
                            <ul>
                                <li><Link to="/grants">Grants</Link></li><br />
                                <li><Link to="/seed-investment">Seed Investment</Link></li><br />
                                <li><Link to="/fellowship">Fellowship</Link></li><br />
                                <li><Link to="/csr">CSR</Link></li><br />
                                <li><Link to="/funding-database">Funding Database</Link></li>
                            </ul>
                        </div>
                        <div className="nav-section">
                            <h3><b>Services</b></h3><br />
                            <ul>
                                <li><Link to="/scientific-services">Scientific Services & Facilities</Link></li><br />
                                <li><Link to="/prototyping-support">Prototyping Facility & Support</Link></li><br />
                                <li><Link to="/analytical-support">Analytical & Measurement Support</Link></li><br />
                                <li><Link to="/advisory">Advisory Consulting</Link></li><br />
                                <li><Link to="/infrastructural-support">Infrastructural Support Services</Link></li><br />
                                <li><Link to="/regulatory-services">Regulatory Services</Link></li>
                            </ul>
                        </div>
                        <div className="nav-section">
                            <h3><b>Programs</b></h3><br />
                            <ul>
                                <li><Link to="/investor-readiness">Investor Readiness Program</Link></li><br />
                                <li><Link to="/bfi-biome">BFI BIOME</Link></li><br />
                                <li><Link to="/msme-deia">MSME DEIA Catalyst</Link></li><br />
                                <li><Link to="/lab2mkt">Lab2Mkt: Spinouts from Academic Organizations</Link></li><br />
                                <li><Link to="/early-accelerator">Early Translation Accelerator</Link></li><br />
                                <li><Link to="/meity-samridh">MeitY SAMRIDH</Link></li><br />
                                <li><Link to="/bioincubation">Bioincubation</Link></li><br />
                                <li><Link to="/social-innovation">Social Innovation</Link></li><br />
                                <li><Link to="/brbc">BRBC</Link></li>
                            </ul>
                        </div>
                        <div className="nav-section">
                            <h3><b>Our Startups</b></h3><br />
                            <ul>
                                <li><Link to="/startup-directory">Startup directory</Link></li><br />
                                <li><Link to="/success-stories">Success Stories</Link></li>
                            </ul>
                        </div>
                        <div className="nav-section">
                            <h3><b>About Us</b></h3><br />
                            <ul>
                                <li><Link to="/history">History & Milestones</Link></li><br />
                                <li><Link to="/life-at-vc">Life at VC</Link></li><br />
                                <li><Link to="/awards">Awards & Recognition</Link></li><br />
                                <li><Link to="/governance">Corporate Governance</Link></li><br />
                                <li><Link to="/our-people">Our People</Link></li>
                            </ul>
                        </div>
                        <div className="nav-section">
                            <h3><b>Resources</b></h3><br />
                            <ul>
                                <li><Link to="/annual-reports">Annual Reports</Link></li><br />
                                <li><Link to="/aim-prime">AiM Prime Playbook</Link></li><br />
                                <li><Link to="/candid">Candid</Link></li><br />
                                <li><Link to="/library">Venture Center Library</Link></li><br />
                                <li><Link to="/tech-database">Technology Database</Link></li>
                            </ul>
                        </div>
                        <div className="nav-section">
                            <h3><b>Projects</b></h3><br />
                            <ul>
                                <li><Link to="/msme-ip">MSME IP Facilitation Center</Link></li><br />
                                <li><Link to="/bio-nest">BIRAC BioNest</Link></li><br />
                                <li><Link to="/nbm-cba">NBM - CBA</Link></li><br />
                                <li><Link to="/csr-clean-room">Bajaj Auto CSR - Med Tech Clean Room</Link></li><br />
                                <li><Link to="/nidhi-coe">NIDHI-CoE</Link></li><br />
                                <li><Link to="/birac-brbc">BIRAC-BRBC</Link></li><br />
                                <li><Link to="/nbm-rtto">NBM-RTTO</Link></li><br />
                                <li><Link to="/meity-samridh">MEITY-SAMRIDH</Link></li><br />
                                <li><Link to="/ibpl-solar">IBPL — Solar Farm</Link></li>
                            </ul>
                        </div>
                        <div className="nav-section">
                            <h3><Link to="/careers"><b>Careers</b></Link></h3><br />
                            <ul>
                                <li><Link to=""><b>Events</b></Link></li><br />
                                <li><Link to=""><b>Impact</b></Link></li><br />
                                <li><Link to=""><b>News</b></Link></li><br />
                                <li><Link to=""><b>Blog</b></Link></li><br />
                                <li><Link to=""><b>Support Us</b></Link></li><br />
                                <li><Link to=""><b>Contact</b></Link></li>
                            </ul>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default NavBar;
