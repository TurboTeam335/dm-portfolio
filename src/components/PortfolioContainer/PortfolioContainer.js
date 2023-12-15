import React, { useState } from "react";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Skills from "../../pages/Skills/Skills";
import Navbar from "../Navbar/Navbar";
import Education from "../../pages/Education/Education";
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Education") {
      return <Education />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Skills") {
      return <Skills />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Home />;
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
