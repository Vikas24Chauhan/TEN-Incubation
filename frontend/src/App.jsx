import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Funding from "./components/funding/Funding";
import IncubationSupport from "./components/incubation-support/IncubationSupport";
import Services from "./components/services/Services";
<<<<<<< HEAD
import ServiceFacilities from "./components/services/ServiceFacilities";

=======
import Fellowships from "./components/funding/Fellowships";
>>>>>>> 271e40d455097e4faed3ea39165e57762fa75698

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/incubation-support" element={<IncubationSupport />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/services" element={<Services />} />
<<<<<<< HEAD
          <Route path="/services/scientific-services-and-facilities" element={<ServiceFacilities />} />
=======
          <Route path="/funding/fellowships" element={<Fellowships />} />
>>>>>>> 271e40d455097e4faed3ea39165e57762fa75698
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
