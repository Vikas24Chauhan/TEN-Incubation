import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Career from "./components/career/Career";
import Contact from "./components/contact/Contact";
import IncubationSupport from "./components/incubation-support/IncubationSupport";
import PreIncubation from "./components/incubation-support/PreIncubation";
import VirtualIncubation from "./components/incubation-support/VirtualIncubation";
import Resident from "./components/incubation-support/Resident";
import SoftLandingProgram from "./components/incubation-support/SoftLandingProgram";
import Funding from "./components/funding/Funding";
import Fellowships from "./components/funding/Fellowships";
import Grants from "./components/funding/Grants";
import Seeds from "./components/funding/Seeds";
import Csr from "./components/funding/Csr";
import Services from "./components/services/Services";
import ServiceFacilities from "./components/services/ServiceFacilities";
import AnalyticalMeasurements from "./components/services/AnalyticalMeasurements";
import BusinessAdvisory from "./components/services/BusinessAdvisory";
import InfrastructuralSupport from "./components/services/InfrastructuralSupport";
import Programs from "./components/programs/Programs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/careers' element={<Career />} />
          <Route path='/contact' element={<Contact />} />

          {/* Incubation Support */}
          <Route path='/incubation-support' element={<IncubationSupport />} />
          <Route
            path='/incubation-support/preIncubation'
            element={<PreIncubation />}
          />
          <Route
            path='/incubation-support/virtualIncubation'
            element={<VirtualIncubation />}
          />
          <Route
            path='/incubation-support/residentIncubation'
            element={<Resident />}
          />
          <Route
            path='/incubation-support/softLandingProgram'
            element={<SoftLandingProgram />}
          />

          {/* Funding */}
          <Route path='/funding' element={<Funding />} />
          <Route path='/funding/fellowships' element={<Fellowships />} />
          <Route path='/funding/grants' element={<Grants />} />
          <Route path='/funding/seeds' element={<Seeds />} />
          <Route path='/funding/csr' element={<Csr />} />

          {/* Services */}
          <Route path='/services' element={<Services />} />
          <Route
            path='/services/scientific-services-and-facilities'
            element={<ServiceFacilities />}
          />
          <Route
            path='/services/analytical-measurements-and-certifications'
            element={<AnalyticalMeasurements />}
          />
          <Route
            path='/services/advisory-and-consulting'
            element={<BusinessAdvisory />}
          />
          <Route
            path='/services/infrastructural-support-services'
            element={<InfrastructuralSupport />}
          />

          <Route path='/programs' element={<Programs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
