import React, { useState } from "react";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";
import Contact from "../../pages/Contact/Contact";
import Skills from "../../pages/Skills/Skills";
import Navbar from "../Navbar/Navbar";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Skills") {
      return <Skills />;
    }
    return <About />;
  };

  const handlePageChange = page => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
