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
import Fellowships from "./components/funding/Fellowships";

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
          <Route path="/funding/fellowships" element={<Fellowships />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
