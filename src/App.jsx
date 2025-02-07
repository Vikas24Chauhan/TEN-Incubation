import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Services from "./components/services/Services";
import ServiceFacilities from "./components/services/ServiceFacilities";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/Scientific-Services-Facilities" element={<ServiceFacilities />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
