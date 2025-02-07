import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Funding from "./components/funding/Funding";
import IncubationSupport from "./components/incubation-support/IncubationSupport";
import Services from "./components/services/Services";


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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
