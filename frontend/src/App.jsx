import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Funding from "./components/funding/Funding";
import IncubationSupport from "./components/incubation-support/IncubationSupport";
import Services from "./components/services/Services";
import ServiceFacilities from "./components/services/ServiceFacilities";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/incubation-support" element={<IncubationSupport />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/scientific-services-and-facilities" element={<ServiceFacilities />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
