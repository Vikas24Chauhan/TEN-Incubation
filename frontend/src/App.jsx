import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Career from "./components/career/Career";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Funding from "./components/funding/Funding";
import IncubationSupport from "./components/incubation-support/IncubationSupport";
import PreIncubation from "./components/incubation-support/PreIncubation";
import Services from "./components/services/Services";
import ServiceFacilities from "./components/services/ServiceFacilities";
import Fellowships from "./components/funding/Fellowships";
import Programs from "./components/programs/Programs";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/incubation-support" element={<IncubationSupport />} />
          <Route
            path="/incubation-support/preIncubation"
            element={<PreIncubation />}
          />
          <Route path="/funding" element={<Funding />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/scientific-services-and-facilities"
            element={<ServiceFacilities />}
          />
          <Route path="/funding/fellowships" element={<Fellowships />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
