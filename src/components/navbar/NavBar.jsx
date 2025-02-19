import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import logo from "../../assets/images/vc-logo.jpg";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
  };

  const handleLink = () => {
    window.open("https://calendly.com/techten/book-a-demo-session", "_blank");
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">
          <img onClick={() => navigate("/")} src={logo} alt="logo" />
        </div>

        <nav className={showNav ? "mobile-nav" : "web-nav"}>
          <div className="navbar-header1">
            <NavLink to="/about-us" onClick={handleCloseNav}>
              About Us
            </NavLink>
            <NavLink to="/careers" onClick={handleCloseNav}>
              Careers
            </NavLink>
            <NavLink to="/contact" onClick={handleCloseNav}>
              Contact
            </NavLink>
          </div>

          <hr className="navbar-hr" />

          <div className="navbar-header2">
            <NavLink to="/incubation-support" onClick={handleCloseNav}>
              <b>Incubation & Support</b>
            </NavLink>
            <NavLink to="/funding" onClick={handleCloseNav}>
              <b>Funding</b>
            </NavLink>
            <NavLink to="/services" onClick={handleCloseNav}>
              <b>Services</b>
            </NavLink>
            <NavLink to="/programs" onClick={handleCloseNav}>
              <b>Programs</b>
            </NavLink>
          </div>
        </nav>

        <div className="navbar-hamburger-div">
          <div className="navbar-button">
            <NavLink onClick={handleLink}>Incubate with us</NavLink>
          </div>
          <div className="hamburger">
            <button onClick={handleButtonToggle}>
              {showNav ? <RxCross1 /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
